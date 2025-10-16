import React, { useState, useRef, useEffect } from 'react';
import './Header.css';

const Header = ({ userRole }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    // Handle logout logic here
    alert('Logout clicked');
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <div className="logo">SC LOGO COMES HERE</div>
        </div>
        <div className="header-right">
          <div className="welcome-message">Hello {userRole}</div>
          <div className="navbar-actions" ref={dropdownRef}>
            <div className="admin-profile" onClick={toggleDropdown}>
              <div className="admin-avatar">A</div>
              <div className="admin-name">Admin</div>
              <div className={`arrow ${isDropdownOpen ? 'up' : ''}`}></div>
            </div>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">Settings</a>
                <a href="#" className="dropdown-item logout" onClick={handleLogout}>Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
