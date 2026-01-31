# 🚀 Quick Setup - Single Service Deployment

## What You Need to Do RIGHT NOW:

### 1️⃣ Go to Your Backend Service on Render
Find your Python/Flask service (probably named `reposhield-ai` or similar)

### 2️⃣ Update Build Command
**Settings → Build & Deploy → Build Command**

Replace with:
```bash
pip install -r requirements.txt && cd repo-frontend && npm install && npm run build && cd ..
```

### 3️⃣ Update Environment Variables
**Settings → Environment**

Make sure you have (replace `YOUR-SERVICE-URL` with your actual backend URL):
```
GITHUB_REDIRECT_URI=https://YOUR-SERVICE-URL.onrender.com/auth/callback
GITHUB_CLIENT_ID=Ov23li0KdoWiWAF8Lcsk
GITHUB_CLIENT_SECRET=183c16c38c695fc2d09bc43864495e08a6faadcb
GEMINI_API_KEY=AIzaSyC4igHa1YWgwF7vwB9yz53KMhvn8Noe5Qw
PORT=8000
```

### 4️⃣ Update GitHub OAuth App
Go to: https://github.com/settings/applications/3310563

Update both URLs to your **backend service URL**:
- Homepage URL: `https://YOUR-SERVICE-URL.onrender.com/`
- Callback URL: `https://YOUR-SERVICE-URL.onrender.com/auth/callback`

### 5️⃣ Deploy
Click **Manual Deploy** → **Clear build cache & deploy**

### 6️⃣ Test
Once it says "Live", visit your backend service URL and test the login!

### 7️⃣ Delete Frontend Service
**ONLY after confirming everything works**, delete the static site service.

---

## What's Your Backend Service URL?

Look in your Render dashboard - it should be something like:
- `https://reposhield-ai.onrender.com` OR
- `https://reposhield-backend.onrender.com` OR
- Similar

**Use that URL everywhere you see `YOUR-SERVICE-URL` above!**

---

## If Build Fails

If you get "npm: command not found", Render needs Node.js installed.

Use this longer build command instead:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash && export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && nvm install 18 && pip install -r requirements.txt && cd repo-frontend && npm install && npm run build && cd ..
```

---

## Expected Build Time
First build: 5-10 minutes (installing Node.js + dependencies)
Subsequent builds: 2-3 minutes

---

## Success Indicators
✅ Build logs show "Building frontend..."
✅ Build logs show "Build completed successfully"
✅ Service shows "Live" status
✅ Website loads at your backend URL
✅ Login with GitHub works without 404 errors

---

**Your code is ready! Just update the Render configuration and deploy! 🎉**
