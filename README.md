Auth RBAC System

This is a Role-Based Access Control (RBAC) system designed for secure user authentication and authorization. The project is implemented using Node.js, Express, and MongoDB. It provides a robust way to manage user roles and permissions effectively.

Features

User Authentication
Secure user login and registration using hashed passwords with bcrypt.
Authentication using JWT (JSON Web Token).
Role-Based Access Control
Users are assigned roles, and permissions are granted based on these roles.
Middleware to restrict access to specific routes/actions for unauthorized roles.
Security Best Practices
Environment variables for sensitive data.
Secure database connection with MongoDB.
Tech Stack

Backend: Node.js, Express
Database: MongoDB
Authentication: JWT, bcrypt
Getting Started

Prerequisites
Node.js (v14 or above)
MongoDB (Cloud or Local Instance)
Git
Setup
Clone the repository:
git clone https://github.com/rahulpandey535/auth-rbac-system.git
cd auth-rbac-system
Install dependencies:
npm install
Set up environment variables:
Create a .env file in the root directory.
Add the following:
MONGO_URI=mongodb+srv://rahul1:rahul1515@cluster0.smtsa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=supersecretkey123
PORT=5001
Start the server:
npm start
The server will run on http://localhost:5001.
API Endpoints

Authentication
Method	Endpoint	Description	Authorization Required
POST	/api/login	User login	No
POST	/api/register	User registration	No
User Management
Method	Endpoint	Description	Authorization Required
GET	/api/users	Get all users	Admin
POST	/api/users	Create a new user	Admin
Example:
Admin can view all users:
GET http://localhost:5001/api/users
Project Structure

auth-rbac-system/
├── routes/
│   ├── userRoutes.js    # User-related routes
├── middleware/
│   ├── authMiddleware.js # JWT authentication middleware
├── models/
│   ├── userModel.js     # User schema and model
├── server.js            # Main server file
├── .env.example         # Example environment variables
├── README.md            # Project documentation
└── package.json         # Project dependencies and scripts
Usage Instructions

Use Postman or any API client to test the endpoints.
Replace JWT_SECRET and MONGO_URI in the .env file with your secure credentials for production.
Ensure MongoDB is up and running to avoid connection errors.
Contact Information

For queries, reach out to:
Name: Rahul Pandey
GitHub: rahulpandey535
Email: rahulpandey02124@gmail.com
