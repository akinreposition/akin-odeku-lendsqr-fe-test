import React from 'react';
import Navigation from '../components/Navigation';
import Sidebar  from '../components/Sidebar';
import CardComponent from  '../components/CardComponent';


const Dashboard: React.FC = () => {
  return (
    <div className="container">
      <Navigation />
      <Sidebar />
      <div>
        <h2 className='title'>Users</h2>
        <CardComponent />
      </div>
    </div>
  );
};

export default Dashboard;

