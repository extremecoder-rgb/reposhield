# 🛡️ RepoShield-AI: Multi-Repo Security Scanner

![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**RepoShield-AI** is a powerful, deterministic security analysis engine designed to identify malicious patterns, exposed secrets, and risky code execution in GitHub repositories. Built with a "Safety First" philosophy, it performs deep static analysis without ever executing a line of third-party code.

**🆕 Now with GitHub Authentication & Premium Private Repository Scanning!**

---

## ✨ Key Features

### Security Analysis
- **🚀 Instant Analysis**: Just paste a GitHub URL and get a detailed security report in seconds.
- **🔍 AST-Powered Detection**: Go beyond simple regex. Our Python analyzer uses Abstract Syntax Trees to distinguish between benign strings and dangerous calls.
- **🛡️ Noise-Cancellation**: Intelligent heuristics specifically tuned for MERN stack and modern frontend projects (skips SVGs, bundled assets, and minified noise).
- **🔑 Secret Scanning**: High-entropy detection for AWS keys, GitHub tokens, and custom API patterns.
- **📉 Weighted Scoring**: A behavior-aware scoring engine that prioritizes *dangerous capability* over simple warnings.

### Authentication & Access Control 🆕
- **🔐 GitHub OAuth Integration**: Secure login with your GitHub account
- **🎯 Smart Access Control**: Public repos scan for free, private repos require authentication
- **👑 Premium Subscriptions**: Unlock private repository scanning with Premium
- **💳 Dodo Payments Integration**: Seamless payment processing for Premium plans
- **🔒 JWT Authentication**: Secure token-based authentication with refresh tokens

### User Experience
- **🌓 Modern UI**: A sleek, dark-mode-ready React interface with real-time scan states and actionable findings.
- **👤 User Profiles**: View your account info, premium status, and payment history
- **⚡ Real-time Feedback**: Progress indicators and status updates during scans

---

## 🛠️ Tech Stack

### Backend
- **Core**: Python 3.11+
- **API**: Flask with CORS support
- **Database**: SQLAlchemy (SQLite/PostgreSQL)
- **Authentication**: JWT + GitHub OAuth
- **Payments**: Dodo Payments API
- **Analysis**: Specialized modules for Obfuscation, Secrets, Static Code (AST), and CI/CD
- **Integration**: Git subprocess with security-cloning (shallow, no-tags, 300s timeout)

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Icons**: Lucide React
- **Client**: Fetch API with clean error handling

---

## 🚀 Quick Start

### Prerequisites
- Python 3.11+
- Node.js 18+ & npm
- Git
- GitHub account (for authentication)
- Dodo Payments account (optional, for testing payments)

### Setup (5 minutes)

1. **Clone and configure environment**
```bash
cd multi-repo-analyzer
cp .env.example .env
# Edit .env with your credentials (see SETUP_GUIDE.md)
```

2. **Install dependencies**
```bash
# Backend
pip install -r requirements.txt

# Frontend
cd repo-frontend
npm install
```

3. **Start the application**
```bash
# Terminal 1: Backend
python -m multi_repo_analyzer.service.app

# Terminal 2: Frontend
cd repo-frontend
npm run dev
```

4. **Access the app**
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:8000`

📚 **Detailed Setup**: See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for complete instructions including GitHub OAuth and Dodo Payments configuration.

---

## 🔐 Access Control

### Free Tier
- ✅ Scan unlimited **public** repositories
- ✅ No authentication required
- ✅ Full security analysis

### Premium Tier ($9.99/month)
- ✅ Scan **private** repositories
- ✅ GitHub OAuth authentication
- ✅ Priority support
- ✅ Advanced security insights

### How It Works
```
Public Repo → Scan Immediately (Free)
Private Repo → Login Required → Premium Required → Scan
```

---

## 📖 Documentation

### Core Documentation
- [Architecture & Flow](./docs/ARCHITECTURE.md)
- [Risk Scoring Methodology](./docs/SCORING.md)
- [Philosophy & Non-Goals](./docs/PHILOSOPHY.md)
- [Rule Registry](./docs/PHASE1_RULE_SNAPSHOT.md)

### Implementation Guides 🆕
- [Setup Guide](./SETUP_GUIDE.md) - Quick start instructions
- [Implementation Plan](./.agent/IMPLEMENTATION_PLAN.md) - Technical architecture
- [Implementation Complete](./.agent/IMPLEMENTATION_COMPLETE.md) - Feature documentation
- [Project Overview](./.agent/PROJECT_OVERVIEW.md) - Comprehensive project details

---

## 🔌 API Endpoints

### Public
- `GET /health` - Health check
- `POST /scan` - Scan repository (with access control)

### Authentication
- `GET /auth/github/login` - Initiate GitHub OAuth
- `POST /auth/github/callback` - Complete OAuth
- `GET /auth/me` - Get current user
- `POST /auth/logout` - Logout

### Payments (Premium)
- `POST /payments/create-checkout` - Create checkout session
- `GET /payments/history` - Get payment history
- `GET /payments/subscription` - Get active subscription

---

## 🗄️ Database Schema

### Users
- GitHub ID, username, avatar
- Premium status
- Created/updated timestamps

### Payments
- Payment ID, checkout session
- Plan type, status, amount
- Subscription details

### Sessions
- JWT tokens
- GitHub access tokens (encrypted)
- Expiration management

---

## 🔒 Security Features

- ✅ **Zero Code Execution**: 100% static analysis
- ✅ **OAuth State Parameter**: CSRF protection
- ✅ **JWT with Expiration**: 15-min access, 7-day refresh tokens
- ✅ **Webhook Signature Verification**: HMAC-SHA256
- ✅ **Server-Side Access Control**: Not just frontend checks
- ✅ **Secure Token Storage**: Encrypted GitHub tokens
- ✅ **HTTPS Enforcement**: Production-ready

---

## 🤝 Philosophy

> "Security decisions require justification, not guesses."

RepoShield-AI is built to be **Deterministic** and **Explainable**. We favor correctness over recall—ensuring that when we flag a repository, we can tell you exactly *why* and how to fix it.

### Core Principles
- **No Code Execution**: Analysis is strictly static
- **Explainability**: Every finding includes "Why it Matters" and recommendations
- **No ML**: Deterministic rules for reproducibility
- **Context-Aware**: Understands file purpose (test, CI, frontend, etc.)

---

## 📊 Project Stats

- **Backend Files**: 50+ Python files
- **Frontend Files**: 15+ React components
- **API Endpoints**: 12+
- **Database Models**: 3 (User, Payment, Session)
- **Test Coverage**: Comprehensive test suite
- **Documentation**: 7+ detailed guides

---

## 🚀 Deployment

### Backend (Render/Heroku)
```bash
# Set environment variables
GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...
DODO_API_KEY=...
JWT_SECRET_KEY=...
DATABASE_URL=postgresql://...

# Deploy
git push heroku main
```

### Frontend (Vercel/Netlify)
```bash
# Set environment variable
VITE_API_URL=https://your-backend.com

# Deploy
npm run build
```

---

## 🛣️ Roadmap

### ✅ Completed
- [x] Core security analysis engine
- [x] GitHub OAuth authentication
- [x] Dodo Payments integration
- [x] Access control for private repos
- [x] Premium subscription management
- [x] JWT authentication
- [x] Database persistence

### 🔄 In Progress
- [ ] Payment UI components
- [ ] User dashboard
- [ ] Subscription management UI

### 📋 Planned
- [ ] Multi-language support (TypeScript, Go, Rust)
- [ ] Webhook integration for real-time scanning
- [ ] Historical scan tracking
- [ ] Team collaboration features
- [ ] API rate limiting
- [ ] Advanced analytics

---

## 📝 License

MIT License - See LICENSE file for details

---

## 🙏 Acknowledgments

- Built with Flask, React, and modern web technologies
- Powered by GitHub API and Dodo Payments
- Inspired by the need for transparent security analysis

---

**Ready to secure your repositories?** 🛡️

[Get Started](./SETUP_GUIDE.md) | [View Docs](./docs/) | [Report Issues](https://github.com/your-repo/issues)

