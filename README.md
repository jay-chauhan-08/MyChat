# 💬 MyChat - Real Time Chat Application

  A full-stack real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Socket.io.


---

## 🚀 Features

### ✅ 1. User Authentication

- Register/Login using email and password.
- JWT-based authentication.
- Protect chat routes.
- Allow only logged-in users to send messages.

### ✅ 2. Save Messages to MongoDB

- Store chat history persistently.
- Fetch message history on page load.
- Load previous conversations in chat window.

### ✅ 3. Online Users List

- Track online/offline users.
- Show active users in a sidebar.
- Update list when users connect/disconnect.

### ✅ 4. Message Timestamps

- Show time next to each message.
- Format using moment.js or native Date.

### ✅ 5. Scroll to Latest Message

- Auto-scroll to the latest message on new messages.
- Smooth scrolling for better UX.

### ✅ 6. Image Sharing

- Upload and share images files.
- Store files in cloud (e.g., Cloudinary).

### ✅ 7. Mobile Responsiveness

- Fully responsive chat UI.
- Use Flexbox or CSS Grid with media queries or Tailwind CSS.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Socket.io Client
- **Backend**: Node.js, Express.js, Socket.io Server
- **Database**: MongoDB (with Mongoose)
- **Others**: CORS, Dotenv

---

## 📁 Project Structure
MYCHAT/
├── client/
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   └── ChatContext.jsx
│   │
│   ├── public/
│   |
│   ├── src/
│   │   ├── assets/                    # Images, icons, or static files
│   │   ├── Components/                # Reusable UI components
│   │   │   ├── ChatContainer.jsx
│   │   │   ├── RightSidebar.jsx
│   │   │   └── Sidebar.jsx
│   │   │
│   │   ├── lib/
│   │   │   └── utils.js               # Utility/helper functions
│   │   │
│   │   ├── Pages/                     # Application pages
│   │   │   ├── HomePage.jsx
│   │   │   ├── LoginPage.jsx
│   │   │   └── ProfilePage.jsx
│   │   │
│   │   ├── App.jsx                    # Main app wrapper
│   │   ├── index.css                  # Global styles
│   │   └── main.jsx                   # Entry point (Vite)
│   |
│   ├── .env                           # Environment variables
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html                     # HTML template
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js 
|
├── server/                        # Backend (Node + Express + Socket.io)
│   ├── Controllers/               # Route controller logic
│   │   ├── messageController.js
│   │   └── userController.js
│   │
│   ├── lib/                       # Core server utilities
│   │   ├── cloudinary.js
│   │   ├── db.js
│   │   └── utils.js
│   │
│   ├── middleware/               # Custom middleware
│   │   └── auth.js
│   │
│   ├── Models/                   # Mongoose models
│   │   ├── Message.js
│   │   └── User.js
│   │
│   ├── routes/                   # Express route definitions
│   │   ├── messageRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── server.js                 # Main Express & Socket.io entry point

---

### Want Me to Include:

- Author: jay Chauhan
- GitHub: https://github.com/jay-chauhan-08
- contact: 7041416383
