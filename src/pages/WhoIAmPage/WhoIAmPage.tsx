import React from 'react';
import Header from '../../../src/components/Header/Header.tsx';
import './WhoIAmPage.scss'; // Import the SCSS file

const WhoIAmPage: React.FC = () => {
  return (
    <div className="whoiam-page">
      <Header /> {/* Include the Header component */}
      <h1>Who I Am Page</h1>
      <p>This is the Who I Am page.</p>
    </div>
  );
};

export default WhoIAmPage;