import React from 'react';
import Header from '../../../src/components/Header/Header.tsx';
import './DemoesPage.scss'; // Import the SCSS file

const DemoesPage: React.FC = () => {
  return (
    <div className="demoes-page">
      <Header /> {/* Include the Header component */}
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
};

export default DemoesPage;