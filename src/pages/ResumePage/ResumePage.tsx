import React from 'react';
import Header from '../../../src/components/Header/Header.tsx';
import './ResumePage.scss'; // Import the SCSS file

const ResumePage: React.FC = () => {
  return (
    <div className="resume-page">
      <Header /> {/* Include the Header component */}
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
};

export default ResumePage;