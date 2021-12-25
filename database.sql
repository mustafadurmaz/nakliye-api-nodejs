-- psql -U postgres

CREATE DATABASE nakliyedb;

-- c\ nakliyedb;

CREATE SEQUENCE vehicles_seq INCREMENT 1 START 1;
CREATE SEQUENCE devices_seq INCREMENT 1 START 1;
CREATE SEQUENCE devices_type_seq INCREMENT 1 START 1;
CREATE SEQUENCE log_temperature_seq INCREMENT 1 START 1;
CREATE SEQUENCE log_location_seq INCREMENT 1 START 1;


CREATE TABLE vehicles(
    id INTEGER NOT NULL DEFAULT NEXTVAL('vehicles_seq'),
    vehicle_plate VARCHAR(20),
    current_status INT,
    is_active BOOLEAN,
    CONSTRAINT veh_cons PRIMARY KEY(id)
);

CREATE TABLE devices(
    id INTEGER NOT NULL DEFAULT NEXTVAL('devices_seq'),
    vehicle_id INT NOT NULL,
    device_type_id INT NOT NULL,
    device_name VARCHAR(75),
    is_online BOOLEAN,
    is_active BOOLEAN,
    CONSTRAINT dev_cons PRIMARY KEY(id)
);

CREATE TABLE devices_type(
    id INTEGER NOT NULL DEFAULT NEXTVAL('devices_type_seq'),
    type_name VARCHAR(75),
    type_description VARCHAR(255),
    is_active BOOLEAN,
    CONSTRAINT devtyp_cons PRIMARY KEY(id)
);

CREATE TABLE log_temperature(
    id INTEGER NOT NULL DEFAULT NEXTVAL('log_temperature_seq'),
    vehicle_id INT NOT NULL,
    device_id INT NOT NULL,
    read_data VARCHAR(50),
    created_at TIMESTAMP DEFAULT LOCALTIMESTAMP(0),
    CONSTRAINT logtemp_cons PRIMARY KEY(id)
);

CREATE TABLE log_location(
    id INTEGER NOT NULL DEFAULT NEXTVAL('log_location_seq'),
    vehicle_id INT NOT NULL,
    device_id INT NOT NULL,
    latitude VARCHAR(50),
    longtitude VARCHAR(50),
    created_at TIMESTAMP DEFAULT LOCALTIMESTAMP(0),
    CONSTRAINT logloc_cons PRIMARY KEY(id)
);
