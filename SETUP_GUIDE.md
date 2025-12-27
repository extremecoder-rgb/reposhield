# 🚀 Quick Setup Guide - RepoShield AI

## Prerequisites
- Python 3.11+
- Node.js 18+
- Git
- GitHub account
- Dodo Payments account (optional for testing)

---

## Step 1: Clone & Setup Environment

```bash
cd multi-repo-analyzer

# Copy environment template
cp .env.example .env
```

---

## Step 2: Configure GitHub OAuth

### Create GitHub OAuth App
1. Go to: https://github.com/settings/developers
2. Click "New OAuth App"
3. Fill in:
   - **Application name**: RepoShield AI (Local)
   - **Homepage URL**: http://localhost:5173
   - **Authorization callback URL**: http://localhost:5173/auth/callback
4. Click "Register application"
5. Copy **Client ID** and **Client Secret**

### Update .env
```bash
GITHUB_CLIENT_ID=your_client_id_here
GITHUB_CLIENT_SECRET=your_client_secret_here
GITHUB_REDIRECT_URI=http://localhost:5173/auth/callback
```

---

## Step 3: Configure Dodo Payments (Optional)

### Get Dodo API Keys
1. Sign up at: https://dodo.dev
2. Go to Dashboard → API Keys
3. Copy **Test API Key** and **Webhook Secret**

### Update .env
```bash
DODO_API_KEY=your_test_api_key_here
DODO_WEBHOOK_SECRET=your_webhook_secret_here
```

---

## Step 4: Generate JWT Secret

```bash
# Generate a secure random key
python -c "import secrets; print(secrets.token_urlsafe(32))"

# Copy output to .env
JWT_SECRET_KEY=<paste_generated_key_here>
```

---

## Step 5: Install Dependencies

### Backend
```bash
cd multi-repo-analyzer
pip install -r requirements.txt
```

### Frontend
```bash
cd repo-frontend
npm install
```

---

## Step 6: Initialize Database

The database will be automatically initialized when you start the backend for the first time.

```bash
# Database file will be created at: multi-repo-analyzer/reposhield.db
```

---

## Step 7: Start Backend

```bash
cd multi-repo-analyzer
python -m multi_repo_analyzer.service.app
```

✅ Backend running at: **http://localhost:8000**

Test it:
```bash
curl http://localhost:8000/health
```

Expected response:
```json
{
  "status": "ok",
  "service": "multi-repo-analyzer"
}
```

---

## Step 8: Start Frontend

```bash
cd repo-frontend
npm run dev
```

✅ Frontend running at: **http://localhost:5173**

---

## Step 9: Test the Application

### Test 1: Health Check
```bash
curl http://localhost:8000/health
```

### Test 2: Scan Public Repo (No Auth)
```bash
curl -X POST http://localhost:8000/scan \
  -H "Content-Type: application/json" \
  -d '{"repo_url": "https://github.com/octocat/Hello-World"}'
```

### Test 3: GitHub Login
1. Open browser: http://localhost:5173
2. Click "Login with GitHub"
3. Authorize the app
4. You should be redirected back and logged in

### Test 4: Scan Private Repo (Requires Premium)
1. Login with GitHub
2. Enter a private repo URL
3. Should see "Premium required" message
4. Click "Upgrade to Premium"
5. Complete payment (test mode)
6. Try scanning again - should work!

---

## 🐛 Troubleshooting

### Issue: Database not found
**Solution**: Make sure you're running from the correct directory
```bash
cd multi-repo-analyzer
python -m multi_repo_analyzer.service.app
```

### Issue: CORS errors
**Solution**: Check FRONTEND_URL in .env matches your frontend URL
```bash
FRONTEND_URL=http://localhost:5173
```

### Issue: GitHub OAuth fails
**Solution**: Verify redirect URI matches exactly
- GitHub OAuth App: `http://localhost:5173/auth/callback`
- .env: `GITHUB_REDIRECT_URI=http://localhost:5173/auth/callback`

### Issue: Import errors
**Solution**: Install package in development mode
```bash
pip install -e .
```

---

## 📝 Environment Variables Checklist

```bash
# Required for basic functionality
✅ GITHUB_CLIENT_ID
✅ GITHUB_CLIENT_SECRET
✅ GITHUB_REDIRECT_URI
✅ JWT_SECRET_KEY

# Required for payments
✅ DODO_API_KEY
✅ DODO_WEBHOOK_SECRET

# Optional
DATABASE_URL (defaults to SQLite)
FRONTEND_URL (defaults to *)
PORT (defaults to 8000)
```

---

## 🎯 Next Steps

1. ✅ Backend running
2. ✅ Frontend running
3. ✅ GitHub OAuth configured
4. ✅ Database initialized
5. 🔄 Test login flow
6. 🔄 Test payment flow
7. 🔄 Test private repo scanning

---

## 📚 Additional Resources

- **Implementation Plan**: `.agent/IMPLEMENTATION_PLAN.md`
- **Complete Documentation**: `.agent/IMPLEMENTATION_COMPLETE.md`
- **Project Overview**: `.agent/PROJECT_OVERVIEW.md`
- **API Documentation**: See routes in `service/routes_*.py`

---

**Need Help?** Check the troubleshooting section or review the implementation docs!

*Setup time: ~10 minutes* ⚡
