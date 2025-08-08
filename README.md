# Growly - AI-Powered Ad Generator & Lead Capture

Growly is a modern React web application designed to help users create high-converting ads quickly using AI-generated content. It features a responsive lead capture form and an admin dashboard to manage submitted leads. The app supports light/dark mode toggle for an enhanced user experience.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation & Local Setup](#installation--local-setup)
  - [1. Clone the repository](#1-clone-the-repository)
  - [2. Backend Setup](#2-backend-setup)
  - [3. Frontend Setup](#3-frontend-setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Deployment Suggestions](#deployment-suggestions)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Troubleshooting](#troubleshooting)
- [Contribution](#contribution)
- [License](#license)
- [Contact](#contact)
- [Hosted Links](#hosted-links)

---

## Tech Stack

### Frontend
- React 18+
- React Router v6
- Tailwind CSS for styling and responsive design
- React Icons for icons
- React Toastify for toast notifications

### Backend
- Node.js with Express.js
- MongoDB with Mongoose ODM
- CORS middleware for cross-origin requests
- dotenv for environment variable management

---

## Features

- AI-inspired UI for ad copy and creative generation (frontend UI only)
- Responsive and accessible lead capture form with client-side validation
- Admin route `/admin/leads` to view leads in a sortable table with serial numbering
- Dark and Light mode toggle accessible on every page
- Smooth animations using TailwindCSS custom keyframes

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later recommended)
- npm (comes bundled with Node.js)
- MongoDB (local installation or cloud-hosted, e.g., MongoDB Atlas)

---

## Installation & Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/Satyamrai8707/Growly.git
cd growly
```
### 2. Backend Setup

```bash
cd backend
npm install
```

Create a ***.env*** file inside the backend folder with the following:

```bash
MONGO_URI=mongodb+srv://satyamrai8707:lUUOGzrqOmxNSmIV@cluster0.ujthmuo.mongodb.net/growly?retryWrites=true&w=majority&appName=Cluster0
PORT=9000
```
Start the backend server:
```bash
npm start
```
The backend server will be running at http://localhost:9000.

### 3. Frontend Setup
Open a new terminal window/tab:

```bash
cd client
npm install
npm start
```
The React development server will start at http://localhost:3000.

## Environment Variables

Backend .env example:
```bash
MONGO_URI=mongodb+srv://satyamrai8707:lUUOGzrqOmxNSmIV@cluster0ujthmuo.mongodb.net/growly?retryWrites=true&w=majority&appName=Cluster0
PORT=9000
```

Frontend environment variables (optional):
```bash
REACT_APP_API_BASE_URL=http://localhost:9000
```
Make sure your frontend API calls use this base URL accordingly.

## Usage

- Visit http://localhost:3000 to use the main app.

- Submit leads via the lead capture form.

- Visit http://localhost:3000/admin/leads to view submitted leads in the admin dashboard.

- Toggle between light and dark modes using the icon button in the header.

## Deployment

- Backend: Deploy the Express API to platforms like Render, Heroku, Railway, or DigitalOcean.

- Frontend: Deploy the React app on Vercel, Netlify, or similar.

## Project Structure

```bash
/server
  ├── models/           # Mongoose models (e.g., Lead.js)
  ├── routes/           # Express route handlers (e.g., leads.js)
  ├── config/           # DB and other config files
  ├── server.js         # Express app entry point
  ├── package.json
  ├── controllers/  
  ├── package.json
  └── .env              # Environment variables

/client
  ├── src/
  │    ├── components/  # React components
  │    ├── context/     # Context providers (e.g., DarkModeContext)
  │    ├── api.js       # API helper functions
  │    └── App.jsx      # Root React component
  ├── public/           # Static files like index.html
  └── package.json
  

```

## Dependencies

### Backend
- **express**

- **mongoose**

- **cors**

- **dotenv**

### Frontend
- **react**

- **react-dom**

- **react-router-dom**

- **tailwindcss**

- **postcss**

- **autoprefixer**

- **react-icons**

- **react-toastify**


## Troubleshooting

- ***react-scripts: command not found***
Run ***npm install*** inside your React client folder.

- **CORS errors**
Ensure backend CORS middleware is properly configured and enabled.

- **MongoDB connection issues**
Double-check your ***MONGO_URI*** string and internet connectivity.

## Contribution

Contributions are welcome! Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss your plans.

## License
This project is licensed under the MIT License.


## Contact
For questions or support, open an issue or contact the maintainer at satyamrai8707@gmail.com

## Hosted Links
Frontend: https://growly.netlify.app/

Backend API: https://growly-backend-csbz.onrender.com


Thank you for checking out Growly! 🚀


