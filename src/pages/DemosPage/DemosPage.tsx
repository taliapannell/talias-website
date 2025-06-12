import React from 'react';
import Header from '../../components/Header/Header.tsx';
import './DemosPage.scss'; 

const DemosPage: React.FC = () => {
  return (
    <div className="demos-page">
      <Header /> 
      <h1>Demos Page</h1>
      <p>This is the demos page.</p>
    </div>
  );
};

export default DemosPage;