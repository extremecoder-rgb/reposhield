import { useState, useEffect } from "react";
import {
  Search,
  ShieldCheck,
  ShieldAlert,
  Loader2,
  FileWarning,
  ArrowLeft,
  ChevronRight,
  Shield,
  Zap,
  X,
} from "lucide-react";
import { scanRepository } from "./api";
import logoImg from "./assets/logo.png";
import handImg from "./assets/real.png";

// Auth Imports
import useAuthStore from "./store/authStore";
import LoginButton from "./components/auth/LoginButton";
import UserProfile from "./components/auth/UserProfile";
import OAuthCallback from "./components/auth/OAuthCallback";

const LOADING_STEPS = [
  "ACCESSING GITHUB REPOSITORY...",
  "CLONING SOURCE CODE...",
  "INITIALIZING SECURITY ENGINE...",
  "ANALYZING STATIC PATTERNS...",
  "CHECKING FOR OBFUSCATION...",
  "SCANNING FOR EXPOSED SECRETS...",
  "CRUNCHING DATA...",
  "GENERATING FINAL REPORT...",
];

export default function App() {
  const [repoUrl, setRepoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [report, setReport] = useState(null);
  const [error, setError] = useState(null);
  const [view, setView] = useState("landing"); // 'landing', 'results', 'callback'
  const [showAuthModal, setShowAuthModal] = useState(false);

  const { isAuthenticated } = useAuthStore();

  // Handle OAuth Callback Route
  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/auth/callback" || window.location.search.includes("code=")) {
      setView("callback");
    }
  }, []);

  // Cycle through loading steps
  useEffect(() => {
    let interval;
    if (loading) {
      interval = setInterval(() => {
        setLoadingStep((prev) => (prev + 1) % LOADING_STEPS.length);
      }, 1200);
    } else {
      setLoadingStep(0);
    }
    return () => clearInterval(interval);
  }, [loading]);

  async function handleScan(e) {
    if (e) e.preventDefault();
    console.log("Scan initiated for:", repoUrl);
    
    if (!repoUrl) {
      console.warn("No repo URL provided");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log("Calling scanRepository API...");
      const data = await scanRepository(repoUrl);
      console.log("Scan successful, data received:", data);
      
      if (!data) {
        throw new Error("Empty response from server");
      }

      setReport(data);
      
      // Brief delay to show finished status before switching view
      setTimeout(() => {
        setLoading(false);
        setView("results");
        window.scrollTo({ top: 0, behavior: 'smooth' });
        console.log("Switching to results view");
      }, 1000);
    } catch (err) {
      console.error("Scan failed error:", err);
      setError(err.message || "Scan failed. Please check if the backend is running.");
      setLoading(false);
    }
  }

  const resetScanner = () => {
    setReport(null);
    setRepoUrl("");
    setView("landing");
    setError(null);
  };

  // Render Authentication Callback View
  if (view === "callback") {
    return (
      <>
        <div className="page-bg"></div>
        <OAuthCallback />
      </>
    );
  }

  if (view === "results" && report) {
    return (
      <ResultsPage
        report={report}
        onBack={resetScanner}
        repoUrl={repoUrl}
      />
    );
  }

  return (
    <>
      <div className="page-bg"></div>

      {/* Auth Modal */}
      {showAuthModal && (
        <div className="auth-modal-overlay">
          <div className="auth-modal">
            <button 
              className="close-modal-btn"
              onClick={() => setShowAuthModal(false)}
            >
              <X size={20} />
            </button>
            <div className="auth-modal-content">
              <h2>Welcome to RepoShield</h2>
              <p>Connect your GitHub account to verify ownership and unlock premium features like private repository scanning.</p>
              <div className="auth-actions">
                <LoginButton className="modal-login-btn" />
              </div>
              <p className="auth-footer-text">
                By connecting, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="hero">
        <div className="hero-glass">
          <header className="navbar">
            <div className="logo" onClick={resetScanner} style={{ cursor: 'pointer' }}>
              <img src={logoImg} alt="RepoShield" />
              <span>REPOSHIELD</span>
            </div>

            <nav>
              <a href="#">HOME</a>
              <a href="#">RECORDS</a>
              <a href="#">HOW IT WORKS</a>
              <a href="#">CONTACT</a>
            </nav>

            {isAuthenticated ? (
              <UserProfile />
            ) : (
              <button 
                className="signup-btn"
                onClick={() => setShowAuthModal(true)}
              >
                SIGN UP
              </button>
            )}
          </header>

          <h1>
            VERIFY BEFORE YOU
            <br />
            CLONE.
          </h1>

          <p>
            AUTOMATED SECURITY SCANNING FOR GITHUB
            <br />
            REPOSITORIES—BEFORE CODE REACHES YOUR SYSTEM.
          </p>

          <div className="search-box-container">
            <form 
              onSubmit={handleScan} 
              className={`search-box ${loading ? 'scanning' : ''}`}
            >
              <input
                type="text"
                placeholder="Paste your GitHub repository link here..."
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                disabled={loading}
              />
              <div className={`progress-container ${loading ? 'active' : ''}`}>
                <div 
                  className="progress-fill" 
                  style={{ width: `${((loadingStep + 1) / LOADING_STEPS.length) * 100}%` }}
                ></div>
              </div>
              <button 
                className={`search-btn ${loading ? 'scanning' : ''}`} 
                type="submit"
                disabled={loading || !repoUrl}
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <ChevronRight className="w-6 h-6" />
                )}
              </button>
            </form>

            {loading && (
              <div className="scanning-feedback">
                <div className="scanner-dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
                <div className="scanning-text">
                  {LOADING_STEPS[loadingStep]}
                </div>
              </div>
            )}
          </div>

          <small>
            By using our service you are accepting our{" "}
            <a href="#">terms of service</a>.
          </small>

          {error && (
            <p style={{ marginTop: "30px", color: "#ff8888", fontSize: "14px", fontWeight: "500", background: 'rgba(255,0,0,0.1)', padding: '10px 20px', borderRadius: '10px' }}>
              ⚠️ {error}
            </p>
          )}
        </div>
      </section>

      <div className="hand-wrapper">
        <img src={handImg} className="hand-image" alt="Human & AI Hand" />
      </div>

      <section className="features">
        <div className="feature-card">
          <div className="icon">🛡️</div>
          <h3>PROACTIVE PROTECTION</h3>
          <p style={{ marginTop: '15px' }}>
            Continuously protects your development workflow from malicious and
            insecure open-source code.
          </p>
        </div>

        <div className="feature-card">
          <div className="icon">🔒</div>
          <h3>PRE-FLIGHT BLOCKING</h3>
          <p style={{ marginTop: '15px' }}>Blocks unsafe repositories before they ever touch your local file system.</p>
        </div>

        <div className="feature-card">
          <div className="icon">📄</div>
          <h3>DEEP ANALYSIS</h3>
          <p style={{ marginTop: '15px' }}>
            Actionable security report highlighting risks, affected files, and
            recommended fixes.
          </p>
        </div>
      </section>

      <section className="tagline">
        <h2>Security you can trust, before you run the code.</h2>
      </section>
    </>
  );
}

function ResultsPage({ report, onBack, repoUrl }) {
  const { risk, policy, ai } = report;
  const isSafe = risk.verdict === "SAFE";

  return (
    <>
      <div className="page-bg"></div>
      <div className="results-page">
        <header className="results-header">
          <button className="back-btn" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" />
            BACK TO SEARCH
          </button>
          <div style={{ textAlign: "right" }}>
            <p style={{ fontSize: "12px", opacity: 0.5 }}>SCANNED TARGET</p>
            <p style={{ fontSize: "14px", fontWeight: "500" }}>{repoUrl}</p>
          </div>
        </header>

        <div className="result-main-card">
          <div className={`verdict-banner ${isSafe ? "safe" : "danger"}`}>
            {isSafe ? (
              <ShieldCheck className="w-16 h-16 text-emerald-400" />
            ) : (
              <ShieldAlert className="w-16 h-16 text-red-400" />
            )}
            <div>
              <h2 style={{ fontSize: "32px", fontWeight: "600" }}>
                {isSafe ? "CLEAN" : "THREAT DETECTED"}
              </h2>
              <p style={{ opacity: 0.8, fontSize: "16px" }}>
                {isSafe
                  ? "Scan complete. No malicious patterns or security risks found in the specified repository."
                  : "Caution: Our analysis has identified potential security risks that require your attention."}
              </p>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-label">RISK SCORE</div>
              <div className="stat-value" style={{ color: isSafe ? '#88ffaa' : '#ff8888' }}>
                {risk.score}/100
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-label">POLICY DECISION</div>
              <div className="stat-value">{policy.decision}</div>
            </div>
            <div className="stat-item">
              <div className="stat-label">VERDICT</div>
              <div className="stat-value">{risk.verdict}</div>
            </div>
          </div>

          <h3 className="findings-title">
            <Shield className="w-6 h-6" style={{ color: "#88ffaa" }} />
            DETAILED FINDINGS
          </h3>

          {ai?.explanation && ai.explanation.length > 0 ? (
            <div className="findings-list">
              {ai.explanation.map((item, index) => (
                <div key={index} className="finding-card">
                  <div className="finding-header">
                    <div>
                      <p style={{ fontSize: "12px", opacity: 0.6, marginBottom: "4px" }}>FILE PATH</p>
                      <p style={{ fontWeight: "500" }}>{item.file}</p>
                    </div>
                    <span className={`severity-badge severity-${(item.severity || 'low').toLowerCase()}`}>
                      {item.severity}
                    </span >
                  </div>

                  <div style={{ marginTop: "20px" }}>
                    <p style={{ fontSize: "14px", color: "#88ffaa" }}>
                      <strong>{item.issue}</strong>
                    </p>
                    <p style={{ fontSize: "14px", opacity: 0.8, marginTop: "4px" }}>
                      {item.why_risky}
                    </p>
                  </div>

                  <div className="mono-box">
                    {item.pattern}
                  </div>

                  <div style={{ marginTop: "15px", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                    <Zap className="w-4 h-4 text-emerald-400 flex-shrink-0" style={{ marginTop: "3px" }} />
                    <p style={{ fontSize: "13px", opacity: 0.7 }}>
                      {item.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: "40px", textAlign: "center", background: "rgba(255,255,255,0.02)", borderRadius: "20px", border: "1px dashed rgba(255,255,255,0.1)" }}>
              <p style={{ opacity: 0.5 }}>No specific line-item risks were detected. Repository appears compliant with standard policies.</p>
            </div>
          )}
        </div>

        <footer style={{ marginTop: "40px", textAlign: "center", opacity: 0.4, fontSize: "13px" }}>
          Report generated by RepoShield Security Engine v0.1.0-alpha
        </footer>
      </div>
    </>
  );
}
