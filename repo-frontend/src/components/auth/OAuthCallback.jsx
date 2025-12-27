/**
 * OAuth Callback Handler
 * Handles GitHub OAuth callback and completes authentication
 */

import { useEffect, useState } from 'react';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';
import useAuthStore from '../../store/authStore';
import { completeGitHubCallback } from '../../utils/api-auth';

export default function OAuthCallback() {
  const { login } = useAuthStore();
  const [status, setStatus] = useState('processing'); // processing, success, error
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleCallback = async () => {
      // Get code and state from URL
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');
      const state = params.get('state');

      // Get stored state
      const storedState = sessionStorage.getItem('github_oauth_state');

      if (!code || !state) {
        setStatus('error');
        setError('Missing authorization code or state');
        return;
      }

      if (state !== storedState) {
        setStatus('error');
        setError('Invalid state parameter. Possible CSRF attack.');
        return;
      }

      try {
        // Complete OAuth flow
        const { access_token, refresh_token, user } = await completeGitHubCallback(code, state);

        // Store tokens and user
        login(user, access_token, refresh_token);

        // Clear stored state
        sessionStorage.removeItem('github_oauth_state');

        setStatus('success');

        // Redirect to home after 2 seconds
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      } catch (err) {
        setStatus('error');
        setError(err.message);
      }
    };

    handleCallback();
  }, [login]);

  return (
    <div className="oauth-callback-container">
      <div className="oauth-callback-card">
        {status === 'processing' && (
          <>
            <Loader2 className="animate-spin callback-icon" size={48} />
            <h2>Completing authentication...</h2>
            <p>Please wait while we log you in</p>
          </>
        )}

        {status === 'success' && (
          <>
            <CheckCircle className="callback-icon success" size={48} />
            <h2>Authentication successful!</h2>
            <p>Redirecting you back...</p>
          </>
        )}

        {status === 'error' && (
          <>
            <XCircle className="callback-icon error" size={48} />
            <h2>Authentication failed</h2>
            <p>{error}</p>
            <button 
              className="retry-button"
              onClick={() => window.location.href = '/'}
            >
              Return to Home
            </button>
          </>
        )}
      </div>
    </div>
  );
}
