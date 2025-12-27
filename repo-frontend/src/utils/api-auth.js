/**
 * Authentication API client
 * Handles GitHub OAuth and JWT authentication
 */

const API_BASE = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

/**
 * Initiate GitHub OAuth login
 * @returns {Promise<{authorization_url: string, state: string}>}
 */
export async function initiateGitHubLogin() {
    const res = await fetch(`${API_BASE}/auth/github/login`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to initiate GitHub login");
    }

    return res.json();
}

/**
 * Complete GitHub OAuth callback
 * @param {string} code - Authorization code from GitHub
 * @param {string} state - CSRF state parameter
 * @returns {Promise<{access_token: string, refresh_token: string, user: object}>}
 */
export async function completeGitHubCallback(code, state) {
    const res = await fetch(`${API_BASE}/auth/github/callback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, state }),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "GitHub authentication failed");
    }

    return res.json();
}

/**
 * Refresh access token
 * @param {string} refreshToken - Refresh token
 * @returns {Promise<{access_token: string, refresh_token: string}>}
 */
export async function refreshAccessToken(refreshToken) {
    const res = await fetch(`${API_BASE}/auth/refresh`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh_token: refreshToken }),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Token refresh failed");
    }

    return res.json();
}

/**
 * Get current user info
 * @param {string} accessToken - Access token
 * @returns {Promise<{user: object}>}
 */
export async function getCurrentUser(accessToken) {
    const res = await fetch(`${API_BASE}/auth/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to fetch user info");
    }

    return res.json();
}

/**
 * Logout user
 * @param {string} accessToken - Access token
 * @returns {Promise<void>}
 */
export async function logout(accessToken) {
    const res = await fetch(`${API_BASE}/auth/logout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Logout failed");
    }

    return res.json();
}
