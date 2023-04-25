# Project to manage patient doses and doctor follow-up

# Introduction

This project was developed to help doctors manage patient doses and follow them up. Doctors can now register on the website and log in to view their patients. They can add a new patient, edit a patient's dose, and delete a patient.

# Features

The main features of this project include:

- Doctor registration and login
- Adding, editing, and deleting patients
- Managing patient doses

# Technologies

- Node.js/Express with TypeScript
- PostgreSQL for the database
- Docker Container
- jsonwebtoken from npm for working with JWTs
- dotenv from npm for managing environment variables
- bcrypt to hash passwords to secure them
- dotenv from npm for managing environment variables
- nginx as a web server
- React.js for the frontend
- Axios for communicating with the backend

## Schema:

**Doctors**:
| Column | Type |
|--------|------|
| ID | STRING/UUID |
| Name | STRING |
| Email | STRING |
| Password | STRING |
| verified | BOOLEAN |

**Patient**:
| Column | Type |
|--------|------|
| ID | STRING/UUID |
| Name | STRING |
| Age | STRING |
| Gender | STRING |
| Potion | STRING |
| Doctor_id | STRING |

## Endpoints

## users endpoints

#### Doctor can be create account & sign in & delete account

    (post) {{url}}/api/v1/signup
    (post) {{url}}/api/v1/login
    (delete) {{url}}/api/v1/doctor <Token required>

### Doctor can be add patient & delete patient

    (post) {{url}}/api/v1/patient <Token required>
    (delete) {{url}}/api/v1/patient/:id <Token required>

### Doctor can be edit patient Potion

    (put) {{url}}/api/v1/patient/:id <Token required>

### Doctor can be get all patient & single patient by id

    (get) {{url}}/api/v1/patient <Token required>
    (get) {{url}}/api/v1/patient/:id <Token required>

# Deployment

- The app is deployed on Azure. You can visit it at [http://172.190.14.21/api/v1/](http://172.190.14.21/test)

# API Documentation

- You can visit the API documentation at [https://documenter.getpostman.com/view/18849836/2s93Y5RLtU](https://documenter.getpostman.com/view/18849836/2s93Y5RLtU)
