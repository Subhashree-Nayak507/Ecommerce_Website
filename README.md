# Ecommerce_Website

This project is a full-stack eCommerce web application built using the MERN stack (MongoDB, Express, React, and Node.js). It includes JWT-based authentication, Cloudinary for image storage,shadcn ui, Stripe for payments, and various user and admin functionalities.

Features:-
User Features
User Authentication: JWT (JSON Web Token) is used for secure authentication. Users can register, login, and access their accounts.
Product Browsing: Users can view a list of products and see product details.
Cart Management: Users can add products to their cart, update quantities, and remove items.
Checkout & Payment: Users can complete purchases using Stripe for secure payments.
Order History: Users can view their past orders and payment status.
Admin Features
Product Management: Admins can perform full CRUD (Create, Read, Update, Delete) operations on products. Product images are stored in Cloudinary.
Order Management: Admins can manage user orders and update the order status.
Payment Handling: Admins can view payment details and confirm successful payments made by users.
Tech Stack
MongoDB: NoSQL database for storing user, product, and order data.
Express: Backend web framework for building RESTful APIs.
React: Frontend JavaScript library for building user interfaces.
Node.js: JavaScript runtime for running the server-side code.
Additional Libraries & Services
JWT: Used for user authentication and authorization.
Cloudinary: Cloud service used for storing and managing product images.
Stripe: Payment gateway for handling secure payments.
Redux: State management for handling global application state.
Axios: HTTP client for making API requests from the frontend.

Project Structure:-
/client               # Frontend React application
/server               # Backend Node.js application
  /controllers        # API request handlers
  /models             # Mongoose models (User, Product, Order)
  /routes             # Express routes for API
  /middlewares        # Authentication and other middlewares

