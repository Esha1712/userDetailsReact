### User Details React Application

A simple, production-ready React application that fetches and displays a random user’s full name and email address using the public
https://randomuser.me
 API.

This project was built as an assessment to demonstrate clean React architecture, modern hooks usage, TypeScript safety, and thoughtful UI/UX decisions.

### Live Demo

👉 https://user-details-react-mu.vercel.app/

### GitHub Repository

👉 https://github.com/Esha1712/userDetailsReact

### Features

Fetches random user data asynchronously using Axios

Displays the user’s full name and email address

Stores fetched user data in localStorage

Uses functional components and custom hooks

Refresh button fetches a new user without page reload

Button is disabled during API calls to prevent duplicate requests

Handles errors gracefully using an Error Boundary

Prevents duplicate API calls caused by React 18 StrictMode

Clean, minimal, and professional UI

Fully written in TypeScript (.tsx)

ESLint and Prettier configured for code quality

Deployed using Vercel

### Tech Stack

React

TypeScript

Vite

Axios

ESLint

Prettier

Vercel

### Getting Started (Local Setup)
Install dependencies
npm install

Run the application locally
npm run dev

Build for production
npm run build

### Project Structure
src/
├── api/              # API calls
├── components/       # UI components
├── hooks/            # Custom hooks
├── types/            # TypeScript interfaces
├── utils/            # Utility helpers
├── App.tsx
├── main.tsx
└── index.css
