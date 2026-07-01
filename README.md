# 🎯 InterviewIQ

An AI-powered mock interview platform that helps candidates prepare for real interviews. Upload your resume, select your role and experience level, and get dynamically generated interview questions tailored to your profile — with real-time AI evaluation and detailed performance reports.

---

# 🌐 Live Demo

### Frontend
https://interviewiq-ashy.vercel.app

### Backend API
https://interviewiq-backend-8d3r.onrender.com

---

# 📂 GitHub Repository

https://github.com/rajrais2004/interviewiq

---

# ✨ Key Features

## Interview Flow
- Google OAuth Sign-In via Firebase
- Resume Upload (PDF parsing with pdfjs-dist)
- AI-generated questions tailored to role, experience, and resume
- Live interview session with per-question timers
- Real-time answer evaluation by AI judge

## AI Evaluation
- Each answer scored across 3 dimensions:
  - **Confidence** — clarity and presentation
  - **Communication** — language and structure
  - **Correctness** — accuracy and relevance
- Final score calculated as average across all questions
- Short human-style feedback per question

## Reports & History
- Detailed performance report after each session
- Question-wise score breakdown
- Full interview history with role, mode, and final score
- Persistent data stored in MongoDB Atlas

## Payments & Credits
- Credit-based usage system (50 credits per interview)
- Razorpay payment integration for credit top-up
- New users start with 100 free credits

## Security
- Firebase Google OAuth
- JWT Authentication via HTTP-only cookies
- Protected REST APIs with auth middleware
- Environment-based config (no hardcoded secrets)

---

# 🏗️ Architecture

```
Frontend (React + Vite)        →  Vercel
         │
         ▼
Backend API (Express.js)       →  Render
         │
         ▼
MongoDB Atlas (Database)
         │
Firebase (Google Auth)
         │
OpenRouter (AI API)
         │
Razorpay (Payments)
```

---

# 🛠 Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Redux Toolkit
- Firebase (Google Auth)
- Axios

## Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (cookie-based auth)
- pdfjs-dist (PDF parsing)
- Razorpay SDK
- OpenRouter AI API

## Deployment
- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

# 👥 User Flow

```
Sign in with Google
        ↓
Upload Resume (PDF)
        ↓
Select Role + Experience + Mode
        ↓
AI generates 5 tailored questions
        ↓
Answer each question (with timer)
        ↓
AI evaluates each answer
        ↓
View detailed performance report
        ↓
Check interview history anytime
```

---

# ⚙️ Local Setup

## Clone Repository

```bash
git clone https://github.com/rajrais2004/interviewiq.git
cd interviewiq
```

## Setup Backend

```bash
cd server
npm install
```

Create `server/.env`:

```env
PORT=8000
MONGODB_URL=your_mongodb_atlas_url
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CLIENT_URL=http://localhost:5173
```

Start backend:

```bash
node index.js
```

## Setup Frontend

```bash
cd client
npm install
```

Create `client/.env`:

```env
VITE_BACKEND_URL=http://localhost:8000
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

Start frontend:

```bash
npm run dev
```

---

# ☁️ Deployment

### Frontend → Vercel
- Root Directory: `client`
- Framework: Vite
- Add all `VITE_` environment variables in Vercel dashboard

### Backend → Render
- Root Directory: `server`
- Build Command: `npm install`
- Start Command: `node index.js`
- Add all environment variables in Render dashboard

---

# 📈 Future Improvements

- Voice-based answer input
- More interview modes (HR, Case Study, System Design)
- Leaderboard and peer comparison
- Email report delivery
- Resume improvement suggestions via AI
- Mobile app

---

# 👨‍💻 Developed By

**Raj Rai**

GitHub: https://github.com/rajrais2004

LinkedIn: https://www.linkedin.com/in/raj-rai-33a3b9287
