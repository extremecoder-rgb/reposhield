# 🛡️ RepoShield-AI: Multi-Repo Security Scanner

![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**RepoShield-AI** is a powerful, deterministic security analysis engine designed to identify malicious patterns, exposed secrets, and risky code execution in GitHub repositories. Built with a "Safety First" philosophy, it performs deep static analysis without ever executing a line of third-party code.

---

## ✨ Key Features

- **🚀 Instant Analysis**: Just paste a GitHub URL and get a detailed security report in seconds.
- **🔍 AST-Powered Detection**: Go beyond simple regex. Our Python analyzer uses Abstract Syntax Trees to distinguish between benign strings and dangerous calls.
- **🛡️ Noise-Cancellation**: Intelligent heuristics specifically tuned for MERN stack and modern frontend projects (skips SVGs, bundled assets, and minified noise).
- **🔑 Secret Scanning**: High-entropy detection for AWS keys, GitHub tokens, and custom API patterns.
- **📉 Weighted Scoring**: A behavior-aware scoring engine that prioritizes *dangerous capability* over simple warnings.
- **🌓 Modern UI**: A sleek, dark-mode-ready React interface with real-time scan states and actionable findings.

---

## 🛠️ Tech Stack

### Backend
- **Core**: Python 3.11+
- **API**: Flask with CORS support
- **Analysis**: Specialized modules for Obfuscation, Secrets, Static Code (AST), and CI/CD.
- **Integration**: Git subprocess with security-cloning (shallow, no-tags, 300s timeout).

### Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Client**: Fetch API with clean error handling

---

## 🚀 Getting Started

### Prerequisites
- Python 3.11+
- Node.js & npm
- Git

### 1. Backend Setup
```bash
# Navigate to root
cd multi-repo-analyzer

# Install dependencies
pip install -e .

# Start the Flask server
python -m multi_repo_analyzer.service.app
```
*Server runs on `http://127.0.0.1:8000`*

### 2. Frontend Setup
```bash
# Navigate to frontend
cd repo-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```
*App runs on `http://localhost:5173`*

---

## 📖 Documentation

Explore our deep-dives into how the engine works:
- [Architecture & Flow](./docs/ARCHITECTURE.md)
- [Risk Scoring Methodology](./docs/SCORING.md)
- [Philosophy & Non-Goals](./docs/PHILOSOPHY.md)
- [Rule Registry](./docs/PHASE1_RULE_SNAPSHOT.md)

---

## 🤝 Philosophy
> "Security decisions require justification, not guesses."

RepoShield-AI is built to be **Deterministic** and **Explainable**. We favor correctness over recall—ensuring that when we flag a repository, we can tell you exactly *why* and how to fix it.
