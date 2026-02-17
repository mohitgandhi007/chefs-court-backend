# Chef's Court Backend System

A secure backend system implementing hierarchical role-based access control where Jury members vote and Judges declare final verdicts.

## Features

- JWT-based authentication and authorization
- Role-based access control (Judge, Jury, Participant)
- Secure protected routes using middleware
- Voting system with verdict logic
- RESTful API architecture
- Modular backend structure

## Tech Stack

- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Mongoose

## Architecture

- models/ → database schemas
- routes/ → API routes
- controllers/ → business logic
- middleware/ → authentication & authorization

## How to run

git clone <repo-link>
cd chefs-court-backend
npm install
npm start
