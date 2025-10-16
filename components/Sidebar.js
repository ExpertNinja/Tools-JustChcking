import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ userRole }) => {
  const getMenuItems = () => {
    switch (userRole) {
      case 'admin':
        return [
          { path: '/admin/path-config', label: 'Path Config', icon: '⚙️' },
          { path: '/admin/user-management', label: 'User Management', icon: '👥' },
        ];
      case 'ops':
        return [
          { path: '/ops/reports', label: 'Reports', icon: '📊' },
          { path: '/ops/notifications', label: 'Notifications', icon: '🔔' },
        ];
      case 'user':
      default:
        return [
          { path: '/user/my-reports', label: 'My Reports', icon: '📄' },
          { path: '/user/favorites', label: 'Favorites', icon: '⭐' },
        ];
    }
  };

  const menuItems = getMenuItems();

  return (
    <div className="sidebar">
      <nav>
        <ul className="sidebar-menu">
          {menuItems.map((item, index) => (
            <li key={index} className="sidebar-menu-item">
              <Link to={item.path} className="sidebar-link">
                <span className="sidebar-icon">{item.icon}</span>
                <span className="sidebar-label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
