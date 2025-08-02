# 📝 MERN Blogging App

A full-stack blogging platform built with the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to register, log in, create, edit, and delete blog posts.

---

## 📚 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Folder Structure](#folder-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## 🚀 Features

- User registration & login (JWT Auth)
- Create, edit, and delete blog posts
- View all blogs or only your own
- Protected routes with token validation
- Responsive UI using Tailwind CSS
- Role-based UI (Logout/Login visibility)
- Friendly alert prompts and spinners

---

## 🛠 Tech Stack

**Frontend**  
- React
- Tailwind CSS
- Axios
- React Router

**Backend**  
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)

---

## ⚙️ Installation

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/mern-blog-app.git
cd mern-blog-app
```

### 2.Backend Setup
```
cd server
npm install
```
**Create a .env file in the server/ directory:**
```
PORT=5000
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
```
**Start the backend:**
```
npm start
```

### 3.Frontend Setup
```
cd ../client
npm install
```
**Create a .env in client/:**
```
VITE_API_BASE_URL=http://localhost:5000/api
```
**Start the frontend**
```
npm start
```

##🔐 Environment Variables

| Key                 | Description                |
| ------------------- | -------------------------- |
| `MONGODB_URI`       | MongoDB connection string  |
| `JWT_SECRET`        | Secret key for JWT signing |
| `VITE_API_BASE_URL` | Frontend API base URL      |


##📡 API Documentation

| Method | Endpoint             | Description        | Protected |
| ------ | -------------------- | ------------------ | --------- |
| POST   | `/api/auth/register` | Register user      | ❌         |
| POST   | `/api/auth/login`    | Login user         | ❌         |
| GET    | `/api/users/me`      | Get logged-in user | ✅         |
| GET    | `/api/blogs`         | Get all blogs      | ✅         |
| GET    | `/api/blogs/:id`     | Get blog by ID     | ✅         |
| POST   | `/api/blogs`         | Create blog        | ✅         |
| PUT    | `/api/blogs/:id`     | Edit blog          | ✅         |
| DELETE | `/api/blogs/:id`     | Delete blog        | ✅         |
All protected routes require the Authorization: Bearer <token> header.

##📁 Folder Structure

mern-blog-app/
├── client/             # React frontend
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/AuthContext.js
├── server/             # Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js

## 🧪 Usage
Register or login to get a JWT token

Use the Navbar to navigate

Create or edit blog posts via the UI

Logout to clear token and session

## 🪪 License
This project is licensed under the MIT License.



