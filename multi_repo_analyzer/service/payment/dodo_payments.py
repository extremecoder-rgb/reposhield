# multi_repo_analyzer/service/payment/dodo_payments.py
"""
Dodo Payments integration for premium features.
"""

import os
import requests
from typing import Dict, Optional
from datetime import datetime, timedelta


class DodoPaymentsError(Exception):
    """Raised when Dodo Payments API call fails."""


class DodoPaymentsClient:
    """Client for Dodo Payments API."""
    
    def __init__(self, api_key: Optional[str] = None):
        """
        Initialize Dodo Payments client.
        
        Args:
            api_key: Dodo Payments API key. If not provided, reads from environment.
        """
        self.api_key = api_key or os.getenv("DODO_PAYMENTS_API_KEY")
        if not self.api_key:
            raise DodoPaymentsError("Dodo Payments API key not configured")
        
        # Use test mode for development, live for production
        self.base_url = os.getenv("DODO_PAYMENTS_BASE_URL", "https://test.dodopayments.com")
        
    def _make_request(self, method: str, endpoint: str, data: Optional[Dict] = None) -> Dict:
        """Make HTTP request to Dodo Payments API."""
        url = f"{self.base_url}{endpoint}"
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
        }
        
        try:
            if method == "POST":
                response = requests.post(url, json=data, headers=headers, timeout=30)
            elif method == "GET":
                response = requests.get(url, headers=headers, timeout=30)
            else:
                raise DodoPaymentsError(f"Unsupported HTTP method: {method}")
            
            response.raise_for_status()
            return response.json()
        
        except requests.exceptions.Timeout:
            raise DodoPaymentsError("Request to Dodo Payments timed out")
        except requests.exceptions.RequestException as e:
            raise DodoPaymentsError(f"Dodo Payments API error: {str(e)}")
    
    def create_checkout_session(
        self,
        product_id: str,
        customer_email: Optional[str] = None,
        return_url: Optional[str] = None,
        metadata: Optional[Dict] = None,
    ) -> Dict:
        """
        Create a checkout session for ML feature access.
        
        Args:
            product_id: ID of the product to purchase
            customer_email: Customer's email address
            return_url: URL to redirect after payment
            metadata: Additional metadata to attach to the payment
        
        Returns:
            Dict with session_id and checkout_url
        """
        payload = {
            "product_cart": [
                {
                    "product_id": product_id,
                    "quantity": 1
                }
            ]
        }
        
        if customer_email:
            payload["customer_email"] = customer_email
        
        if return_url:
            payload["return_url"] = return_url
        
        if metadata:
            payload["metadata"] = metadata
        
        try:
            response = self._make_request("POST", "/checkouts", payload)
            return {
                "session_id": response.get("session_id"),
                "checkout_url": response.get("checkout_url"),
            }
        except Exception as e:
            raise DodoPaymentsError(f"Failed to create checkout session: {str(e)}")
    
    def verify_payment(self, session_id: str) -> Dict:
        """
        Verify payment status for a checkout session.
        
        Args:
            session_id: Checkout session ID
        
        Returns:
            Dict with payment status and details
        """
        try:
            response = self._make_request("GET", f"/checkouts/{session_id}")
            return {
                "status": response.get("status"),
                "paid": response.get("status") == "completed",
                "customer_email": response.get("customer_email"),
                "amount": response.get("amount"),
                "currency": response.get("currency"),
            }
        except Exception as e:
            raise DodoPaymentsError(f"Failed to verify payment: {str(e)}")


# Singleton instance
_dodo_client: Optional[DodoPaymentsClient] = None


def get_dodo_client() -> DodoPaymentsClient:
    """Get or create Dodo Payments client instance."""
    global _dodo_client
    if _dodo_client is None:
        _dodo_client = DodoPaymentsClient()
    return _dodo_client
