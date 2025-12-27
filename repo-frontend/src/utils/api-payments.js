/**
 * Payments API client
 * Handles Dodo Payments integration
 */

const API_BASE = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

/**
 * Create checkout session
 * @param {string} accessToken - Access token
 * @param {string} planType - Plan type (premium_monthly or premium_yearly)
 * @returns {Promise<{checkout_url: string, checkout_session_id: string}>}
 */
export async function createCheckoutSession(accessToken, planType = "premium_monthly") {
    const res = await fetch(`${API_BASE}/payments/create-checkout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ plan_type: planType }),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to create checkout session");
    }

    return res.json();
}

/**
 * Verify payment status
 * @param {string} accessToken - Access token
 * @param {string} paymentId - Payment ID
 * @returns {Promise<{payment: object}>}
 */
export async function verifyPayment(accessToken, paymentId) {
    const res = await fetch(`${API_BASE}/payments/verify/${paymentId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to verify payment");
    }

    return res.json();
}

/**
 * Get payment history
 * @param {string} accessToken - Access token
 * @returns {Promise<{payments: array}>}
 */
export async function getPaymentHistory(accessToken) {
    const res = await fetch(`${API_BASE}/payments/history`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to fetch payment history");
    }

    return res.json();
}

/**
 * Get active subscription
 * @param {string} accessToken - Access token
 * @returns {Promise<{subscription: object | null, is_active: boolean}>}
 */
export async function getSubscription(accessToken) {
    const res = await fetch(`${API_BASE}/payments/subscription`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to fetch subscription");
    }

    return res.json();
}
