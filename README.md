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

## 📊 SWOT Analysis

### Strengths 💪
- **🎯 Zero-Execution Security**: Complete static analysis without running any third-party code, eliminating execution risks
- **🧠 AST-Powered Intelligence**: Advanced Abstract Syntax Tree analysis for accurate detection beyond simple pattern matching
- **🔐 Enterprise-Grade Authentication**: Robust GitHub OAuth + JWT implementation with secure token management
- **💎 Premium Monetization**: Integrated payment system (Dodo Payments) with subscription management
- **🎨 Modern Tech Stack**: Built with Python 3.11+, React 19, Vite, and Tailwind CSS for optimal performance
- **📚 Comprehensive Documentation**: Detailed guides for architecture, scoring, philosophy, and implementation
- **🛡️ Multi-Layer Analysis**: Combines obfuscation detection, secret scanning, static code analysis, and CI/CD security checks
- **⚡ Instant Results**: Fast analysis with real-time feedback and progress indicators
- **🎯 Context-Aware**: Intelligent filtering for MERN stacks, frontend projects, and common false positives

### Weaknesses 🔍
- **🌐 Language Limitation**: Currently focused on Python; limited support for TypeScript, Go, Rust, and other languages
- **🔄 No Dynamic Analysis**: Static-only approach may miss runtime vulnerabilities and behavior-based threats
- **📊 No Historical Tracking**: Lacks scan history and trend analysis for repositories over time
- **👥 Single-User Focus**: No team collaboration features or multi-user workspace support
- **⚠️ Potential False Positives**: Despite noise-cancellation, complex codebases may still trigger some false alerts
- **🔌 Limited Integrations**: No webhook support or CI/CD pipeline integration yet
- **📈 Scalability Unknown**: Performance on extremely large repositories (100k+ files) not yet tested
- **🌍 No Multi-Language UI**: Interface currently available only in English

### Opportunities 🚀
- **🌐 Multi-Language Expansion**: Add support for JavaScript/TypeScript, Go, Rust, Java, C++, and other popular languages
- **🤖 ML Enhancement**: Integrate machine learning for pattern recognition and predictive security analysis
- **🔗 CI/CD Integration**: GitHub Actions, GitLab CI, Jenkins plugins for automated scanning
- **📊 Analytics Dashboard**: Historical trends, vulnerability tracking, and security score evolution
- **👥 Enterprise Features**: Team workspaces, role-based access control, and compliance reporting
- **🌍 Global Expansion**: Multi-language UI support and localization
- **📱 Mobile App**: iOS/Android apps for on-the-go security monitoring
- **🔌 API Marketplace**: Public API for third-party integrations and custom workflows
- **🎓 Educational Platform**: Security training modules and best practices guides
- **🏢 White-Label Solution**: Customizable branding for enterprise clients

### Threats ⚠️
- **🏆 Established Competitors**: GitHub Advanced Security, Snyk, SonarQube with larger market share
- **🆓 Free Alternatives**: Open-source tools like Bandit, Semgrep, and GitGuardian
- **🔄 Rapid Tech Evolution**: New attack vectors and obfuscation techniques emerging constantly
- **💰 Market Saturation**: Crowded security tools market with high customer acquisition costs
- **🔐 Privacy Concerns**: Users may be hesitant to grant repository access to third-party services
- **⚖️ Compliance Requirements**: GDPR, SOC 2, and other regulations requiring significant investment
- **🚀 GitHub Native Features**: GitHub expanding built-in security features (Dependabot, CodeQL)
- **💸 Economic Downturn**: Reduced security budgets affecting premium subscription adoption
- **🔧 Maintenance Burden**: Keeping up with GitHub API changes and new language versions

---

## 🔄 Static Analyzer Architecture Flowchart

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          USER INTERACTION LAYER                              │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │                     React Frontend (Vite + Tailwind)                  │  │
│  │  • GitHub URL Input                                                   │  │
│  │  • OAuth Login Button                                                 │  │
│  │  • Real-time Progress Display                                         │  │
│  │  • Results Visualization                                              │  │
│  └────────────────────────────┬─────────────────────────────────────────┘  │
└────────────────────────────────┼────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         AUTHENTICATION LAYER                                 │
│                                                                              │
│  ┌──────────────────┐      ┌──────────────────┐      ┌─────────────────┐  │
│  │  GitHub OAuth    │─────▶│   JWT Manager    │─────▶│  Access Control │  │
│  │  • State CSRF    │      │  • 15min Access  │      │  • Public: Free │  │
│  │  • Code Exchange │      │  • 7day Refresh  │      │  • Private: $$  │  │
│  └──────────────────┘      └──────────────────┘      └─────────────────┘  │
└────────────────────────────────┬────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          API GATEWAY (Flask)                                 │
│                                                                              │
│  POST /scan ────▶ Validate URL ────▶ Check Access ────▶ Queue Analysis     │
│                      │                    │                    │             │
│                      ▼                    ▼                    ▼             │
│                 Repo Public?         User Premium?      Start Scan Job      │
└────────────────────────────────┬────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        REPOSITORY CLONING LAYER                              │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                    Git Subprocess Manager                              │ │
│  │  • Shallow Clone (--depth 1)                                          │ │
│  │  • No Tags (--no-tags)                                                │ │
│  │  • 300s Timeout                                                       │ │
│  │  • Temp Directory Isolation                                           │ │
│  │  • GitHub Token Injection (if private)                                │ │
│  └───────────────────────────────┬───────────────────────────────────────┘ │
└────────────────────────────────┼────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                      STATIC ANALYSIS ORCHESTRATOR                            │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │                      File Discovery Engine                            │  │
│  │  • Recursive Directory Walk                                           │  │
│  │  • Extension Filtering (.py, .js, .env, .yml, etc.)                   │  │
│  │  • Size Limits (skip >1MB files)                                      │  │
│  │  • Ignore Patterns (node_modules, .git, dist, build)                  │  │
│  └────────────────────────────┬─────────────────────────────────────────┘  │
└────────────────────────────────┼────────────────────────────────────────────┘
                                 │
                                 ▼
                    ┌────────────┴────────────┐
                    │                         │
                    ▼                         ▼
┌──────────────────────────────┐  ┌──────────────────────────────┐
│   PARALLEL ANALYZER MODULES  │  │   PARALLEL ANALYZER MODULES  │
│                              │  │                              │
│  ┌────────────────────────┐ │  │  ┌────────────────────────┐ │
│  │ 1. OBFUSCATION ANALYZER│ │  │  │ 3. STATIC CODE ANALYZER│ │
│  │ ─────────────────────  │ │  │  │ ─────────────────────  │ │
│  │ • Entropy Calculation  │ │  │  │ • AST Parsing (Python) │ │
│  │ • Base64 Detection     │ │  │  │ • Dangerous Calls:     │ │
│  │ • Hex Pattern Matching │ │  │  │   - eval()             │ │
│  │ • String Obfuscation   │ │  │  │   - exec()             │ │
│  │ • Minification Check   │ │  │  │   - subprocess.call()  │ │
│  │ • SVG/Asset Filtering  │ │  │  │   - os.system()        │ │
│  │ • Frontend Noise Skip  │ │  │  │ • Import Analysis      │ │
│  └────────────────────────┘ │  │  │ • Function Complexity  │ │
│                              │  │  └────────────────────────┘ │
│  ┌────────────────────────┐ │  │                              │
│  │ 2. SECRETS ANALYZER    │ │  │  ┌────────────────────────┐ │
│  │ ─────────────────────  │ │  │  │ 4. CI/CD ANALYZER      │ │
│  │ • High-Entropy Strings │ │  │  │ ─────────────────────  │ │
│  │ • Regex Patterns:      │ │  │  │ • .github/workflows/   │ │
│  │   - AWS Keys           │ │  │  │ • .gitlab-ci.yml       │ │
│  │   - GitHub Tokens      │ │  │  │ • Jenkinsfile          │ │
│  │   - API Keys           │ │  │  │ • Dangerous Actions:   │ │
│  │   - Private Keys       │ │  │  │   - curl | bash        │ │
│  │   - JWT Tokens         │ │  │  │   - wget | sh          │ │
│  │ • .env File Scanning   │ │  │  │   - npm install -g     │ │
│  │ • Context Filtering    │ │  │  │ • Secret Exposure      │ │
│  └────────────────────────┘ │  │  └────────────────────────┘ │
└──────────────┬───────────────┘  └──────────────┬───────────────┘
               │                                 │
               └────────────┬────────────────────┘
                            ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         RISK SCORING ENGINE                                  │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                    Weighted Scoring Algorithm                          │ │
│  │                                                                        │ │
│  │  Finding Severity Weights:                                            │ │
│  │  ┌──────────────────────────────────────────────────────────────┐    │ │
│  │  │ CRITICAL (100 pts)  : eval() with user input, hardcoded AWS  │    │ │
│  │  │ HIGH (50 pts)       : exec(), subprocess, exposed secrets    │    │ │
│  │  │ MEDIUM (25 pts)     : suspicious imports, obfuscated code    │    │ │
│  │  │ LOW (10 pts)        : high entropy, potential secrets        │    │ │
│  │  │ INFO (0 pts)        : recommendations, best practices        │    │ │
│  │  └──────────────────────────────────────────────────────────────┘    │ │
│  │                                                                        │ │
│  │  Risk Score Calculation:                                              │ │
│  │  ┌──────────────────────────────────────────────────────────────┐    │ │
│  │  │ Total Score = Σ (Finding Weight × Confidence × Context)      │    │ │
│  │  │                                                               │    │ │
│  │  │ Risk Level:                                                   │    │ │
│  │  │   • SAFE      : 0-20 points                                  │    │ │
│  │  │   • LOW       : 21-50 points                                 │    │ │
│  │  │   • MEDIUM    : 51-100 points                                │    │ │
│  │  │   • HIGH      : 101-200 points                               │    │ │
│  │  │   • CRITICAL  : 201+ points                                  │    │ │
│  │  └──────────────────────────────────────────────────────────────┘    │ │
│  └───────────────────────────────┬───────────────────────────────────────┘ │
└────────────────────────────────┼────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        REPORT GENERATION LAYER                               │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                         JSON Report Builder                            │ │
│  │                                                                        │ │
│  │  {                                                                     │ │
│  │    "repository": "owner/repo",                                         │ │
│  │    "risk_score": 150,                                                  │ │
│  │    "risk_level": "HIGH",                                               │ │
│  │    "findings": [                                                       │ │
│  │      {                                                                 │ │
│  │        "type": "DANGEROUS_CALL",                                       │ │
│  │        "severity": "CRITICAL",                                         │ │
│  │        "file": "app.py",                                               │ │
│  │        "line": 42,                                                     │ │
│  │        "code": "eval(user_input)",                                     │ │
│  │        "message": "Dangerous eval() with user input",                 │ │
│  │        "recommendation": "Use ast.literal_eval() instead",            │ │
│  │        "why_it_matters": "Allows arbitrary code execution"            │ │
│  │      }                                                                 │ │
│  │    ],                                                                  │ │
│  │    "summary": {                                                        │ │
│  │      "total_files": 150,                                               │ │
│  │      "analyzed_files": 120,                                            │ │
│  │      "critical_findings": 2,                                           │ │
│  │      "high_findings": 5,                                               │ │
│  │      "medium_findings": 10                                             │ │
│  │    }                                                                   │ │
│  │  }                                                                     │ │
│  └───────────────────────────────┬───────────────────────────────────────┘ │
└────────────────────────────────┼────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          CLEANUP & RESPONSE                                  │
│                                                                              │
│  ┌──────────────────┐      ┌──────────────────┐      ┌─────────────────┐  │
│  │  Delete Temp Dir │─────▶│  Send JSON to UI │─────▶│  Log Analytics  │  │
│  │  • Secure Wipe   │      │  • WebSocket/HTTP│      │  • Scan Duration│  │
│  │  • Error Handling│      │  • Pretty Format │      │  • Findings Log │  │
│  └──────────────────┘      └──────────────────┘      └─────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          FRONTEND DISPLAY                                    │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                     Results Visualization                              │ │
│  │  • Risk Score Badge (Color-coded)                                     │ │
│  │  • Findings Table (Sortable, Filterable)                              │ │
│  │  • Code Snippets with Syntax Highlighting                             │ │
│  │  • Recommendations Panel                                              │ │
│  │  • Export Options (PDF, JSON, CSV)                                    │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 🔍 Analysis Flow Details

**Phase 1: Pre-Analysis** (1-2 seconds)
- URL validation and repository metadata fetch
- Access control verification (public vs. private)
- User authentication and premium status check

**Phase 2: Repository Acquisition** (3-10 seconds)
- Secure shallow clone with timeout protection
- Temporary directory creation with isolation
- GitHub token injection for private repositories

**Phase 3: Parallel Analysis** (5-30 seconds depending on repo size)
- All four analyzers run concurrently for speed
- Each analyzer processes files independently
- Results aggregated in real-time

**Phase 4: Scoring & Reporting** (1-2 seconds)
- Weighted risk calculation
- Finding deduplication and prioritization
- JSON report generation with actionable insights

**Phase 5: Cleanup & Delivery** (<1 second)
- Secure deletion of cloned repository
- Response transmission to frontend
- Analytics logging for improvement

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

