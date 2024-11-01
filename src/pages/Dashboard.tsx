import React from 'react';
import Navigation from '../components/Navigation';
// import Sidebar  from '../components/Sidebar';

const Dashboard: React.FC = () => {
  return (
    <div className="container">
      <Navigation />
      {/* <Sidebar /> */}
      <div>
        <h2>Dashboard</h2>
      </div>
    </div>
  );
};

export default Dashboard;

