import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AdminPathConfig from './components/admin/AdminPathConfig';

function App() {
  const [userRole, setUserRole] = useState('admin'); // Default to admin for this task

  return (
    <Router>
      <div className="layout">
        <Header userRole={userRole} />
        <Sidebar userRole={userRole} />
        <main className="main-content">
          <Routes>
            <Route path="/admin/path-config" element={<AdminPathConfig />} />
            {/* Add other routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
