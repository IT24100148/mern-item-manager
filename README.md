# MERN Item Manager - Starter Project

A beginner-friendly starter project for a MERN stack application, featuring an Item Manager with simple Name and Description fields. This project is intentionally missing a `price` field to serve as a lab test exercise where you must add it yourself.

## Directory Structure
```
mern-item-manager/
├── backend/
│   ├── models/
│   │   └── Item.js
│   ├── routes/
│   │   └── items.js
│   ├── .env
│   ├── package.json
│   └── server.js
└── frontend/
    ├── src/
    │   ├── api.js
    │   ├── App.css
    │   ├── App.jsx
    │   └── components/
    │       ├── ItemForm.jsx
    │       └── ItemList.jsx
    ├── .env
    └── package.json
```

---

## Running the Application

### 1. Setup Database
First, update the MongoDB connection string in `backend/.env`.

### 2. Run Backend
Open a terminal and navigate to the backend directory:
```bash
cd mern-item-manager/backend
npm install
npm start (or node server.js)
```

### 3. Run Frontend
Open a new terminal and navigate to the frontend directory:
```bash
cd mern-item-manager/frontend
npm install
npm run dev
```
Your backend will run on `http://localhost:5000` and frontend generally on `http://localhost:5173`.

---

## Deployment Steps

### Render Backend Deployment
1. Go to [Render](https://render.com/) and create a new **Web Service**.
2. Connect your GitHub repository.
3. Root Directory: `backend`
4. Build Command: `npm install`
5. Start Command: `node server.js`
6. Environment Variables:
   - `MONGO_URI`: `your_production_mongodb_connection_string`
   - `PORT`: `5000`
7. Click **Create Web Service**. Wait for it to finish and copy the Render URL (e.g., `https://your-backend.onrender.com`).

**IMPORTANT**: After backend deployment, the `VITE_API_URL` environment variable in the frontend must be changed *before* deploying the frontend.

### Netlify Frontend Deployment
1. After your backend is deployed on Render, go to your local `frontend/.env` (or set it in Netlify later).
   Change `VITE_API_URL` from `http://localhost:5000/api` to `https://your-backend.onrender.com/api`
2. Push this change to GitHub.
3. Go to [Netlify](https://www.netlify.com/) and click **Add new site** -> **Import an existing project**.
4. Connect your GitHub and select the repository.
5. Base directory: `frontend`
6. Build command: `npm run build`
7. Publish directory: `frontend/dist`
8. In "Environment variables" add:
   - `VITE_API_URL`: `https://your-backend.onrender.com/api`
9. Click **Deploy Site**.

---

## GitHub Push Commands

To push this new project to GitHub, open your terminal in the `mern-item-manager` folder and run:
```bash
git init
git add .
git commit -m "Initial commit - Starter MERN Project"
git branch -M main
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```
