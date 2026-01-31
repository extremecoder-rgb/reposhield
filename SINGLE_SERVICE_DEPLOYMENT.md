# Single Service Deployment Guide

## Overview
This guide will help you consolidate your frontend and backend into a **single Web Service** on Render, eliminating the 404 errors and simplifying your deployment.

---

## Step 1: Update Your Backend Web Service on Render

### A. Go to Your Backend Service
1. Open Render Dashboard
2. Click on your **backend service** (the Python/Flask one)
3. Go to **Settings**

### B. Update Build Command
Change the build command to build BOTH backend and frontend:

```bash
pip install -r requirements.txt && cd repo-frontend && npm install && npm run build && cd ..
```

**What this does:**
- Installs Python dependencies
- Goes into the frontend folder
- Installs Node dependencies
- Builds the React app (creates `dist` folder)
- Returns to root directory

### C. Keep Start Command
Your start command should remain:
```bash
python -m multi_repo_analyzer.service.app
```

### D. Update Environment Variables
Make sure you have these environment variables set:

```
GEMINI_API_KEY=AIzaSyC4igHa1YWgwF7vwB9yz53KMhvn8Noe5Qw
GITHUB_CLIENT_ID=Ov23li0KdoWiWAF8Lcsk
GITHUB_CLIENT_SECRET=183c16c38c695fc2d09bc43864495e08a6faadcb
GITHUB_REDIRECT_URI=https://YOUR-BACKEND-SERVICE.onrender.com/auth/callback
PORT=8000
```

**IMPORTANT:** Replace `YOUR-BACKEND-SERVICE` with your actual backend service URL (e.g., `reposhield-ai.onrender.com`)

---

## Step 2: Update GitHub OAuth App Settings

1. Go to: https://github.com/settings/applications/3310563
2. Update these URLs to point to your **backend service**:
   - **Homepage URL**: `https://YOUR-BACKEND-SERVICE.onrender.com/`
   - **Authorization callback URL**: `https://YOUR-BACKEND-SERVICE.onrender.com/auth/callback`

---

## Step 3: Deploy and Test

1. Click **Manual Deploy** on your backend service
2. Click **Clear build cache & deploy**
3. Wait for the build to complete (this will take longer now because it's building the frontend too)
4. Once it says "Live", test your application at your backend service URL

---

## Step 4: Delete the Frontend Static Site Service

**ONLY do this after confirming the backend service works!**

1. Go to your frontend Static Site service (`RepoShield-AI-1`)
2. Go to **Settings**
3. Scroll to the bottom
4. Click **Delete or suspend**
5. Choose **Delete Web Service**

---

## Step 5: (Optional) Update Custom Domain

If you had a custom domain pointing to the frontend service, update it to point to your backend service instead.

---

## Verification Checklist

After deployment, verify:

- [ ] Backend service is "Live" in Render dashboard
- [ ] You can access the website at your backend service URL
- [ ] The homepage loads correctly
- [ ] Clicking "Sign Up" or "Login" opens the modal
- [ ] Clicking "Login with GitHub" redirects to GitHub
- [ ] After authorizing, you're redirected back successfully
- [ ] No 404 errors in browser console

---

## Troubleshooting

### Build fails with "npm: command not found"
**Solution:** Render needs to install Node.js. Add this to your build command at the beginning:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash && export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm install 18 && pip install -r requirements.txt && cd repo-frontend && npm install && npm run build && cd ..
```

### Frontend shows "Frontend not built" error
**Solution:** The build didn't complete successfully. Check the build logs in Render for errors.

### Still getting 404 on /auth/callback
**Solution:** Make sure:
1. The frontend was built successfully (check for `repo-frontend/dist` folder in logs)
2. Your `app.py` has the updated code that serves the frontend
3. `GITHUB_REDIRECT_URI` matches your backend service URL

---

## Benefits of Single Service Deployment

✅ **Simpler:** Only one service to manage
✅ **Cheaper:** Only one service to pay for
✅ **No CORS issues:** Frontend and backend on same domain
✅ **Easier environment variables:** Everything in one place
✅ **Faster:** No cross-domain API calls

---

## Current Code Status

Your `app.py` is already configured to serve the frontend! The code I added earlier:
- Serves static files from `repo-frontend/dist`
- Handles SPA routing (serves `index.html` for all non-API routes)
- Allows API routes to work normally

You're ready to deploy! 🚀
