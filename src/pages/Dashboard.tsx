import React from 'react';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import CardComponent from '../components/CardComponent';
import {UserDummyData} from '../components/UserDummyData';
import DataTable from '../components/Tables/DataTable';

const Dashboard: React.FC = () => {
  return (
    <div className='dashboard-body'>
      <Navigation />
      <Sidebar />
      <div className="container">
        <h2 className='title'>Users</h2>
        <div className="card-view">
        {UserDummyData.map((user: any, index: number) => (
          <CardComponent 
            key={index} 
            title={user.title} 
            numbers={user.numbers} 
            icon={user.icon} 
          />
        ))}
        </div>
        <div className="table-view">
          <DataTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


