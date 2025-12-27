/**
 * User Profile Component
 * Displays user info and premium badge
 */

import { useState } from 'react';
import { LogOut, Crown, User, CreditCard } from 'lucide-react';
import useAuthStore from '../../store/authStore';
import { logout as logoutAPI } from '../../utils/api-auth';

export default function UserProfile({ onUpgradeClick }) {
  const { user, accessToken, logout, isPremium } = useAuthStore();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  if (!user) return null;

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logoutAPI(accessToken);
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      logout();
      setIsLoggingOut(false);
      setShowDropdown(false);
    }
  };

  const handleUpgradeClick = () => {
    setShowDropdown(false);
    if (onUpgradeClick) {
      onUpgradeClick();
    }
  };

  return (
    <div className="user-profile-container">
      <button
        className="user-profile-button"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <img 
          src={user.avatar_url} 
          alt={user.username}
          className="user-avatar"
        />
        <span className="user-name">{user.username}</span>
        {isPremium() && (
          <Crown size={16} className="premium-icon" />
        )}
      </button>

      {showDropdown && (
        <div className="user-dropdown">
          <div className="dropdown-header">
            <img 
              src={user.avatar_url} 
              alt={user.username}
              className="dropdown-avatar"
            />
            <div>
              <p className="dropdown-username">{user.username}</p>
              {isPremium() ? (
                <span className="premium-badge">
                  <Crown size={12} />
                  Premium
                </span>
              ) : (
                <span className="free-badge">Free Plan</span>
              )}
            </div>
          </div>

          <div className="dropdown-divider"></div>

          <button className="dropdown-item">
            <User size={16} />
            Profile
          </button>

          {!isPremium() && (
            <button 
              className="dropdown-item upgrade-item"
              onClick={handleUpgradeClick}
            >
              <CreditCard size={16} />
              Upgrade to Premium
            </button>
          )}

          <div className="dropdown-divider"></div>

          <button 
            className="dropdown-item logout-item"
            onClick={handleLogout}
            disabled={isLoggingOut}
          >
            <LogOut size={16} />
            {isLoggingOut ? 'Logging out...' : 'Logout'}
          </button>
        </div>
      )}
    </div>
  );
}
