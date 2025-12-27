/**
 * Login Button Component
 * Handles GitHub OAuth login flow
 */

import { useState } from 'react';
import { Github, Loader2 } from 'lucide-react';
import { initiateGitHubLogin } from '../../utils/api-auth';

export default function LoginButton({ className = '' }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Get GitHub authorization URL
      const { authorization_url, state } = await initiateGitHubLogin();

      // Store state in sessionStorage for callback verification
      sessionStorage.setItem('github_oauth_state', state);

      // Redirect to GitHub
      window.location.href = authorization_url;
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleLogin}
        disabled={isLoading}
        className={`github-login-btn ${className}`}
      >
        {isLoading ? (
          <>
            <Loader2 className="animate-spin" size={20} />
            <span>Connecting...</span>
          </>
        ) : (
          <>
            <Github size={20} />
            <span>Login with GitHub</span>
          </>
        )}
      </button>
      
      {error && (
        <p className="error-message" style={{ color: '#ff8888', marginTop: '10px', fontSize: '14px' }}>
          {error}
        </p>
      )}
    </div>
  );
}
