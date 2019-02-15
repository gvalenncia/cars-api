BEGIN;

DROP TABLE IF EXISTS "public"."vehicle_tb";
DROP TABLE IF EXISTS "public"."brand_tb";
DROP TABLE IF EXISTS "public"."owner_tb";

-- CREATE TABLE "brand_tb" -------------------------------------
CREATE TABLE "public"."brand_tb" ( 
	"id" SERIAL NOT NULL,
	"name" Character Varying( 2044 ) NOT NULL,
	PRIMARY KEY ( "id" ));
 ;
-- -------------------------------------------------------------

-- CREATE TABLE "owner_tb" -------------------------------------
CREATE TABLE "public"."owner_tb" ( 
	"id" SERIAL NOT NULL,
	"cedula" Character Varying( 2044 ) NOT NULL,
	"name" Character Varying( 2044 ) NOT NULL,
	PRIMARY KEY ( "id" ),
	CONSTRAINT "unique_owner_tb_cedula" UNIQUE( "cedula" ) );
 ;
-- -------------------------------------------------------------

-- CREATE TABLE "vehicle_tb" -----------------------------------
CREATE TABLE "public"."vehicle_tb" ( 
	"id" SERIAL NOT NULL,
	"plate" Character Varying( 2044 ) NOT NULL,
	"type" Character Varying( 2044 ) NOT NULL,
	"id_owner" Integer NOT NULL,
	"id_brand" Integer NOT NULL,
	PRIMARY KEY ( "id" ),
	CONSTRAINT "unique_vehicle_tb_plate" UNIQUE( "plate" ) );
 ;
-- -------------------------------------------------------------

-- CREATE LINK "lnk_brand_tb_vehicle_tb" -----------------------
ALTER TABLE "public"."vehicle_tb"
	ADD CONSTRAINT "lnk_brand_tb_vehicle_tb" FOREIGN KEY ( "id_brand" )
	REFERENCES "public"."brand_tb" ( "id" ) MATCH FULL
	ON DELETE Cascade
	ON UPDATE Cascade;
-- -------------------------------------------------------------

-- CREATE LINK "lnk_owner_tb_vehicle_tb" -----------------------
ALTER TABLE "public"."vehicle_tb"
	ADD CONSTRAINT "lnk_owner_tb_vehicle_tb" FOREIGN KEY ( "id_owner" )
	REFERENCES "public"."owner_tb" ( "id" ) MATCH FULL
	ON DELETE Cascade
	ON UPDATE Cascade;
-- -------------------------------------------------------------

INSERT INTO public.brand_tb VALUES (DEFAULT, 'ford');
INSERT INTO public.brand_tb VALUES (DEFAULT, 'chevrolet');

INSERT INTO public.owner_tb VALUES (DEFAULT, '80754212', 'german valencia');
INSERT INTO public.owner_tb VALUES (DEFAULT, '78654390', 'andrew lilles');
INSERT INTO public.owner_tb VALUES (DEFAULT, '34567845', 'steve jobs');

INSERT INTO public.vehicle_tb VALUES (DEFAULT, 'AAA123', 'truck', 1, 1);
INSERT INTO public.vehicle_tb VALUES (DEFAULT, 'BBB456', 'sedan', 1, 1);
INSERT INTO public.vehicle_tb VALUES (DEFAULT, 'CCC789', 'sedan', 2, 2);
INSERT INTO public.vehicle_tb VALUES (DEFAULT, 'DDD012', 'sedan', 3, 2);

COMMIT;