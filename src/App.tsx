import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import './styles/App.scss';
import Navigation from './components/Navigation';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
      {/* {location.pathname !== '/' && <Navigation />} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Navigation />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
