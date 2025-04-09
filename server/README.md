# Jtronix_auth
# 🔐 User Authentication System (React + Express)

A simple full-stack user authentication system with **SignUp** and **SignIn** functionality.  
Built using **ReactJS** for frontend, **ExpressJS** for backend, and **MongoDB** for data storage.

---

## 📌 Features

- 🔐 User SignUp with validation
- 🔓 User SignIn with JWT authentication
- 🧠 Password hashing with bcrypt
- 📦 Token saved in localStorage after login
- 🔁 Redirect to login after successful registration
- 🖌️ Clean and minimal UI using basic CSS

---

## 🛠 Tech Stack

| Layer       | Tech             |
|-------------|------------------|
| Frontend    | ReactJS          |
| Backend     | ExpressJS        |
| Database    | MongoDB          |
| Auth        | JWT + bcrypt     |
| Styling     | Custom CSS       |

---

## 📁 Folder Structure

project-root/ ├── backend/ │ ├── models/ │ ├── routes/ │ ├── controllers/ │ ├── .env │ ├── server.js ├── frontend/ │ ├── src/ │ │ ├── components/ │ │ ├── sapp.css │ │ ├── App.js │ │ └── index.js │ └── package.json


---

## 🚀 Getting Started

### 🔧 Backend Setup

1. Go to the `backend` folder:

   ```bash
   cd backend
npm install
2. Create a .env file:

MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
PORT=4000
3. Start the backend:

node server.js
