import React from 'react';
import '../styles/Grid.scss';

interface GridProps {
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className="grid-container">
      {children}
    </div>
  );
};

export default Grid;
