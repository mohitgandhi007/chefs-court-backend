# Chef's Court Backend 

Chef's Court is a secure backend system that implements hierarchical role-based access control where Jury members vote on cases and Judges declare final verdicts. The system uses JWT authentication and follows a modular, production-level backend architecture.

This project demonstrates secure backend design, authentication, authorization, and real-world business logic implementation.

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- dotenv

---

## Core Features

- JWT-based authentication
- Role-based authorization (Judge, Jury, Participant)
- Secure protected routes using middleware
- Jury voting system
- Judge verdict control system
- RESTful API architecture
- Modular backend structure

---

## Architecture

The project follows proper backend separation of concerns:
controllers/   → business logic
models/        → database schemas
routes/        → API endpoints
middleware/    → authentication & authorization
config/        → database connection
server.js      → application entry point

---

## Authentication & Authorization

The system uses JWT tokens to secure routes and enforce role-based access.

Roles:

- Participant → limited access
- Jury → can vote on cases
- Judge → can declare verdict and manage cases

Authorization is enforced using middleware.

---

## API Endpoints

Authentication:
POST /api/auth/register
POST /api/auth/login

Voting:
POST /api/vote
GET /api/votes

Verdict:
POST /api/verdict
GET /api/verdict

Cases:
GET /api/cases
POST /api/cases

---

## Installation

Clone repository:
git clone https://github.com/mohitgandhi007/chefs-court-backend.git
cd chefs-court-backend

Install dependencies:
npm install

Create .env file:
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

Run server:
npm start

---

## Backend Concepts Demonstrated

- JWT authentication
- Role-based access control (RBAC)
- REST API development
- Middleware implementation
- Secure password handling
- Modular backend architecture
- MongoDB database integration

---

## Author

Mohit Gandhi  
CSE Student, VIT Vellore  
GitHub: https://github.com/mohitgandhi007

---

## Purpose

This project was built to demonstrate production-level backend development skills including authentication, authorization, secure API design, and scalable architecture.
