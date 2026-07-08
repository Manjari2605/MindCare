# 🧠 MindCare – AI-Powered Mental Health Support Platform

MindCare is a full-stack web application designed to promote mental well-being through AI-powered assistance, mood tracking, and personalized support. The platform aims to provide users with a safe space to monitor their mental health, interact with an intelligent chatbot, and access helpful resources.

> 🚧 **Project Status:** Work in Progress

---

## ✨ Features

- 🔐 User Authentication (Register & Login)
- 🤖 AI-powered Mental Health Chatbot
- 😊 Daily Mood Tracking
- 👤 User Profile Management
- 📊 Mood History Storage
- 💬 Interactive User Interface
- 📱 Responsive Design
- 🌐 REST API Integration
- 🗂 MongoDB Database Support

---

## 🛠 Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Python (AI Chatbot)

### AI & Data
- Python
- JSON-based Mental Health Dataset

---

## 📂 Project Structure

```
MindCare/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── data/
│   ├── chatbot.py
│   ├── index.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Clone the Repository

```bash
git clone https://github.com/Manjari2605/MindCare.git
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start the backend:

```bash
npm start
```

---

## Frontend Setup

```bash
cd frontend
npm install
```

Start the frontend:

```bash
npm start
```

---

## AI Chatbot

The backend includes a Python-based chatbot that utilizes a mental health dataset to generate supportive responses.

Run the chatbot (if applicable):

```bash
python chatbot.py
```

---

## 📌 Future Enhancements

- Voice-enabled chatbot
- Emotion detection from text
- Personalized wellness recommendations
- Appointment booking with therapists
- Emergency SOS support
- Meditation and breathing exercises
- Daily mental health reminders
- Analytics dashboard
- Mobile application
- Deployment on Vercel and Render

---

## 📄 License

This project is developed for educational and learning purposes.

---
