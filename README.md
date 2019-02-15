### Setting the database up

```
$ sudo -u postgres psql;
postgres=# CREATE USER gvv WITH ENCRYPTED PASSWORD 'gvv';
postgres=# CREATE DATABASE cars_db;
postgres=# GRANT ALL PRIVILEGES ON DATABASE cars_db TO gvv;
```