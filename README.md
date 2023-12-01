## Restful API Development Challenge
 This repository contains the code for my backend API development challenge. I've created a RESTful API using Node.js, JavaScript, MongoDB for database storage, and JWT token-based authentication.

## About Me
Hi, I'm Sudhakar Mirjeli, passionate about backend development and have designed this API to meet the requirements of the challenge while also implementing best practices and security measures.

## Tech Stack
- Node.js
- JavaScript
- MongoDB

## Authentication
The API uses JSON Web Tokens (JWT) for authentication. It employs a token-based authentication system for securing endpoints and authorizing access to protected resources.


## Database
This project utilizes MongoDB Cluster for cloud-based storage.MongoDB provides flexibility and scalability.

- **Database Type**: NoSQL
- **Database Provider**: MongoDB Atlas
- **Storage Cloud**: MongoDB Cluster

### Configuration
If you wish to replicate the database setup locally or in another environment, ensure to:

- Set up a MongoDB Atlas Cluster.
- Configure the connection string in the application's environment variables or configuration files.

To run this application, you need to set the following environment variables:

- **MONGODB_URI**: The connection URI for your MongoDB database.
- **JWT_SECRET_KEY**: Secret key used for JWT token generation and verification.
- **PORT** : The port number on which the application will run.

### Steps to Set Environment Variables

1. **PORT**:
   - Example: `PORT=3000` (You can specify any available port number)
   - Set the `PORT` variable to the desired port number where the application will listen for incoming requests.

2. **MONGODB_URI**:
   - Example (for MongoDB Atlas): `MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.example.net/<dbname>`
   - Obtain the connection URI from your MongoDB provider and replace `<username>`, `<password>`, and `<dbname>` with your actual credentials and database name.

3. **JWT_SECRET_KEY**:
   - Generate a secure random string to use as the secret key for JWT.


## Installation
To run the project locally:
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Set up your MongoDB database.
4. Configure environment variables for JWT secret, MongoDB connection string, etc.
5. Run the application using `npm run start-watch`.

## Usage
- Use POSTman or any API testing tool to interact with the API endpoints.
- Register users, authenticate with JWT tokens,Login user, Get all users and access protected routes as specified in the API documentation.

## Folder Structure
- `/controllers`: Contains logic handling incoming requests and producing responses.
- `/models`: Defines MongoDB data models and schemas.
- `/routes`: Defines API routes and endpoints.
- `/middleware`: Contains middleware functions for authentication, error handling, etc.
- `/config`: Configuration files, environment variables, etc.
- `/utilities`: Auth Middleware files, loggers, etc.


## API Endpoints

- **POST /api/user/login**
  - Description: User login.


- **POST /api/user/register**
  - Description: Adding new User.


- **GET /api/user**
  - Description: Get all users.
