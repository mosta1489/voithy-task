-- Active: 1682345349365@@127.0.0.1@5432@voithy@public
CREATE Table doctor (
    id VARCHAR(100) NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    verified BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE patient (
  id VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  age INTEGER NOT NULL,
  gender VARCHAR(100) NOT NULL,
  potion VARCHAR(100),
  doctor_id VARCHAR(100) NOT NULL,
  FOREIGN KEY (doctor_id) REFERENCES doctor(id)
);
