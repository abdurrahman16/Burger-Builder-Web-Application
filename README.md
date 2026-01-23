🍔 Burger Builder Web Application

A full-stack React application that allows users to build custom burgers, place orders, authenticate securely, and view order history.
This project demonstrates React, Redux, Routing, Authentication, and Firebase deployment in one complete application.

🚀 Live Demo

👉 (Add Firebase Hosting URL after deployment)
Example: https://burger-builder-xxxx.web.app

🛠️ Tech Stack
Frontend

React (Vite / CRA)

React Router DOM

Redux Toolkit

Formik + Yup (Forms & Validation)

CSS / Bootstrap / Tailwind (UI)

Backend & Services

Firebase Authentication

Firebase Realtime Database / Firestore

Firebase Hosting

✨ Features
Burger Builder

Add & remove ingredients dynamically

Live burger preview

Real-time price calculation

Order summary modal

Orders & Checkout

Checkout form

Save orders to database

Fetch previous orders

User-specific order history

Authentication

Sign Up & Login

Form validation using Formik + Yup

Firebase Authentication

Auth token stored in Redux & Local Storage

Protected routes

Logout functionality

UX Enhancements

Loading spinner

Error handling

Clean UI navigation

Deployment

Firebase Hosting

Production build optimization

src/
 ├── components/
 │   ├── Burger/
 │   ├── BuildControls/
 │   ├── Navigation/
 │   ├── UI/
 ├── pages/
 │   ├── BurgerBuilder.jsx
 │   ├── Checkout.jsx
 │   ├── Orders.jsx
 │   ├── Auth.jsx
 ├── store/
 │   ├── index.js
 │   ├── burgerSlice.js
 │   ├── authSlice.js
 │   ├── orderSlice.js
 ├── services/
 │   ├── firebase.js
 │   ├── api.js
 ├── App.jsx
 ├── main.jsx



🔀 Application Flow

User builds a burger

Views order summary

Authenticates (login/signup)

Proceeds to checkout

Order saved to Firebase

User can view past orders

Logout securely

🔐 Authentication Flow

Firebase handles login/signup

Token stored in Redux

Token persisted in Local Storage

Auto-login on refresh

Protected routes enabled
