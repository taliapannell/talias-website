import React from 'react';
import Header from '../../../src/components/Header/Header.tsx';
import './ProjectsPage.scss'; // Import the SCSS file

const ProjectsPage: React.FC = () => {
  return (
    <div className="projects-page">
      <Header /> {/* Include the Header component */}
      <h1>Projects Page</h1>
      <p>This is the projects page.</p>
    </div>
  );
};

export default ProjectsPage;