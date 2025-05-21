import React from 'react';
import Header from '../../../src/components/Header/Header.tsx';
import './DemoesPage.scss'; 

const DemoesPage: React.FC = () => {
  return (
    <div className="demoes-page">
      <Header /> 
      <h1>Demoes Page</h1>
      <p>This is the demoes page.</p>
    </div>
  );
};

export default DemoesPage;