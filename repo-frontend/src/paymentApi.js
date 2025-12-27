// Payment API functions
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

export async function createCheckoutSession(email) {
    const response = await fetch(`${API_BASE}/payments/create-checkout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to create checkout session");
    }

    return response.json();
}

export async function verifyPayment(sessionId) {
    const response = await fetch(`${API_BASE}/payments/verify-payment`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ session_id: sessionId }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to verify payment");
    }

    return response.json();
}

// Check if user has ML access (from localStorage)
export function hasMLAccess() {
    const paymentData = localStorage.getItem("ml_payment");
    if (!paymentData) return false;

    try {
        const data = JSON.parse(paymentData);
        // Check if payment is still valid (e.g., within 30 days)
        const paymentDate = new Date(data.timestamp);
        const now = new Date();
        const daysSincePayment = (now - paymentDate) / (1000 * 60 * 60 * 24);

        return data.paid && daysSincePayment < 365; // Valid for 1 year
    } catch {
        return false;
    }
}

// Store ML access after successful payment
export function storeMLAccess(sessionId) {
    const paymentData = {
        paid: true,
        sessionId,
        timestamp: new Date().toISOString(),
    };
    localStorage.setItem("ml_payment", JSON.stringify(paymentData));
}

// Clear ML access
export function clearMLAccess() {
    localStorage.removeItem("ml_payment");
}
