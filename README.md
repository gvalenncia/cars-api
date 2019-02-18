### Install the following tools

- Postgres
- Nodejs (latest version)

### Setting the database up

Once you have postgres, please crate a database ana user as:

```
$ sudo -u postgres psql;
postgres=# CREATE USER gvv WITH ENCRYPTED PASSWORD 'gvv';
postgres=# CREATE DATABASE cars_db;
postgres=# GRANT ALL PRIVILEGES ON DATABASE cars_db TO gvv;
```

### Run the application

To run the application, please execute the following commands:

```
$ npm install
$ npm run start
```

The above commands will start the api in http://localhost:4000. There, you can see the graph squema
with the available querys.

### Run unit testig

The suite is written with Jest, and can be executing by running:

```
$ npm test
```
