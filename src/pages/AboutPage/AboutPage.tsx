import React from 'react';
import Header from '../../../src/components/Header/Header.tsx';
// import tabBackground from '/src/pages/AboutPage/tabbackground.png';
import './AboutPage.scss'; // Import the SCSS file

const AboutPage: React.FC = () => {
  // const aboutPageStyle = {
  //   backgroundImage: `url(${tabBackground})`,
  //   backgroundSize: 'contain', // Ensure the entire background image is visible
  //   backgroundRepeat: 'no-repeat', // Prevent the background from repeating
  //   backgroundPosition: 'center', // Center the background image
  //   height: '85vh', // Use full viewport height
  //   width: '93vw', // Use full viewport width
  //   padding: '20px',
  //   marginLeft: '60px',
  // };

  return (
    <>
      {/* <div style={aboutPageStyle}></div> */}
      <div className="about-page">
        <Header /> {/* Include the Header component */}
        <div className="about-text">
          <h3>My Journey</h3>
            <p className="about-text-content">Textblahblahblahblahblahblahblah</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;