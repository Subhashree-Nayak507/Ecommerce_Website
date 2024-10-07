# Full-Stack eCommerce Web Application

## Overview
This project is a full-stack eCommerce web application built using the MERN stack (MongoDB, Express, React, Node.js). It includes various features for both users and administrators, ensuring a complete shopping experience.

## Features

### User Features
- **User Authentication**: 
  - JWT (JSON Web Token) is used for secure authentication. 
  - Users can register, login, and access their accounts.
  
- **Product Browsing**: 
  - Users can view a list of products and see detailed product descriptions.
  
- **Cart Management**: 
  - Users can add products to their cart, update quantities, and remove items.
  
- **Checkout & Payment**: 
  - Users can complete purchases using Stripe for secure payments.
  
- **Order History**: 
  - Users can view their past orders and payment statuses.

### Admin Features
- **Product Management**: 
  - Admins can perform full CRUD (Create, Read, Update, Delete) operations on products.
  - Product images are stored in Cloudinary.
  
- **Order Management**: 
  - Admins can manage user orders and update order statuses.
  
- **Payment Handling**: 
  - Admins can view payment details and confirm successful payments made by users.

## Tech Stack
- **MongoDB**: NoSQL database for storing user, product, and order data.
- **Express**: Backend web framework for building RESTful APIs.
- **React**: Frontend JavaScript library for building user interfaces.
- **Node.js**: JavaScript runtime for running server-side code.

## Additional Libraries & Services
- **JWT**: Used for user authentication and authorization.
- **Cloudinary**: Cloud service used for storing and managing product images.
- **Stripe**: Payment gateway for handling secure payments.
- **Redux**: State management for handling global application state.
- **Axios**: HTTP client for making API requests from the frontend.

## Installation & Setup
1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd <project-directory>`
3. Install dependencies:
   - For the backend: `npm install` (in the backend folder)
   - For the frontend: `npm install` (in the frontend folder)
4. Set up environment variables (e.g., for MongoDB, Stripe).
5. Start the development server:
   - Backend: `npm start` (in the backend folder)
   - Frontend: `npm start` (in the frontend folder)
