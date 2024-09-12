import React from 'react';
import Header from '../../../src/components/Header/Header.tsx';
import './AboutPage.scss'; // Import the SCSS file
import thoughtBubble1 from '/src/assets/images/thoughtbubble1.svg'
import thoughtBubble2 from '/src/assets/images/thoughtbubble2.svg'

const AboutPage: React.FC = () => {
  return (
    <>
      <div className="about-page">
        <Header /> {/* Include the Header component */}
        <div className="about-text">
          <img src={thoughtBubble1} alt="Thought Bubble 1" />
          <img src={thoughtBubble2} alt="Thought Bubble 2" />
        </div>
      </div>
    </>
  );
};

export default AboutPage;