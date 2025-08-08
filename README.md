# Growly - AI-Powered Ad Generator & Lead Capture

# Growly

Growly is a modern React web application designed to help users create high-converting ads quickly using AI-generated content. It includes a lead capture form and an admin dashboard to manage submitted leads. The app features a light/dark mode toggle for a better user experience.

---

## Tech Stack

- **Frontend:**
  - React 18+
  - React Router v6
  - Tailwind CSS for styling and responsive design
  - React Icons for icons
  - React Toastify for toast notifications

- **Backend:**
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

Make sure you have installed:

- Node.js (v16 or later recommended) — [Download Node.js](https://nodejs.org/)
- npm (comes with Node.js)
- MongoDB (locally or a cloud-hosted MongoDB URI, e.g., MongoDB Atlas)

---

## Installation & Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/growly.git
cd growly
2. Backend Setup
bash
Copy
Edit
cd backend  # or root folder if both frontend/backend combined
npm install
Create a .env file inside the backend folder with the following content:

ini
Copy
Edit
MONGO_URI=<Your MongoDB connection string>
PORT=8000
Start the backend server:

bash
Copy
Edit
npm start
The backend server should be running on http://localhost:8000.

3. Frontend Setup
Open a new terminal window/tab and run:

bash
Copy
Edit
cd client
npm install
npm start
The React development server will start on http://localhost:3000.

Environment Variables
Backend .env file example:

ini
Copy
Edit
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/growly?retryWrites=true&w=majority
PORT=8000
Frontend environment variables (optional if you want to configure API base URL dynamically):

ini
Copy
Edit
REACT_APP_API_BASE_URL=http://localhost:8000
Update your API calls accordingly to use this variable.

Usage
Visit http://localhost:3000 to use the main app.

Submit leads via the form.

Visit http://localhost:3000/admin/leads to view submitted leads in the admin dashboard.

Toggle between light and dark modes using the icon button in the header.

Deployment Suggestions
Backend: Deploy your Express API to platforms like Render, Heroku, Railway, or DigitalOcean.

Frontend: Deploy React app on Vercel, Netlify, or similar.

Update the frontend API base URL to point to your live backend in production.

Project Structure (Typical)
lua
Copy
Edit
/backend
  |-- models/
  |-- routes/
  |-- config/
  |-- server.js (or app.js)
  |-- package.json
  |-- .env

/client
  |-- src/
       |-- components/
       |-- context/
       |-- api.js
       |-- App.jsx
  |-- public/
  |-- package.json
Dependencies Used
Backend
express

mongoose

cors

dotenv

Frontend
react

react-dom

react-router-dom

tailwindcss

postcss

autoprefixer

react-icons

react-toastify

Troubleshooting
react-scripts: command not found - Run npm install inside your React client folder.

CORS errors - Ensure backend CORS middleware is properly configured.

MongoDB connection issues - Double-check your MONGO_URI string and internet connectivity.

Contribution
Feel free to fork the repo and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License.

Contact
For questions or support, open an issue or contact the maintainer at your.email@example.com

Hosted Links
Frontend: [Add your live frontend URL here]

Backend API: [Add your live backend API URL here]

Thanks for checking out Growly! 🚀

yaml
Copy
Edit

---

If you want, I can also help you generate `package.json` scripts or config files. Just ask!