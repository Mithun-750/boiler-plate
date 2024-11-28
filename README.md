# Full Stack User Authentication Application (Boiler Plate)

A modern, full-stack application featuring user authentication and profile management, built with React, Express, and MongoDB.

## 🚀 Tech Stack

### Frontend

- React with Vite
- Redux Toolkit for state management
- Tailwind CSS for styling
- React Router for navigation
- React Toastify for notifications

### Backend

- Node.js & Express
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing

## ✨ Features

- User authentication (Register/Login)
- Profile management
- Protected routes
- Responsive design
- Modern UI with Tailwind CSS
- Redux state management
- JWT-based authentication
- Secure password hashing
- MongoDB data persistence

## 🛠️ Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)
- MongoDB (local or Atlas URI)

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd boiler-plate
```

2. Install backend dependencies:

```bash
cd backend
npm install
```

3. Install frontend dependencies:

```bash
cd ../frontend
npm install
```

## 🚀 Running the Application

1. Start the backend server:

```bash
cd backend
npm run dev
```

The backend will run on `http://localhost:3001`

2. Start the frontend development server:

```bash
cd frontend
npm run dev
```

The frontend will run on `http://localhost:5173`

## 📁 Project Structure

```
boiler-plate/
├── backend/
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Custom middleware
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   └── server.js       # Server entry point
│
├── frontend/
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── redux/      # Redux store and slices
│   │   ├── App.jsx     # Main component
│   │   └── main.jsx    # Entry point
│   └── index.html
│
└── README.md
```

## 🔒 API Endpoints

### Authentication Routes

- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get user profile (Protected)
- `PUT /api/users/profile` - Update user profile (Protected)

## 💻 Available Scripts

### Backend

- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

### Frontend

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🔐 Authentication Flow

1. User registers or logs in
2. Server validates credentials and returns JWT
3. Frontend stores JWT in localStorage
4. Protected routes check for valid JWT
5. Requests to protected endpoints include JWT in Authorization header
