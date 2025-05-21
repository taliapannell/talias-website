import React from 'react';
import Header from '../../../src/components/Header/Header.tsx';
import './WhoIAmPage.scss'; 

const WhoIAmPage: React.FC = () => {
  return (
    <div className="whoiam-page">
      <Header /> 
      <h1>Who I Am Page</h1>
      <p>This is the Who I Am page.</p>
    </div>
  );
};

export default WhoIAmPage;