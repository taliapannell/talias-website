import React from 'react';
import Header from '../../../src/components/Header/Header.tsx';
import './ProjectsPage.scss'; 
import assetImage from '../../assets/images/asset.png';
import rentalImage from '../../assets/images/rental-detective.png';
import infinadeckImage from '../../assets/images/infinadeck.png';
import retailChoiceImage from '../../assets/images/retail-choice.png';
import incidentResponseImage from '../../assets/images/google-noc.png';
import documentIngestionImage from '../../assets/images/document.png';
import maximoAnalyticsImage from '../../assets/images/maximo-analytics.png';
import tariffNavigatorImage from '../../assets/images/tariff-nav.png';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Rental Detective",
    description: "Short description of project one goes here.",
    imageUrl: rentalImage
  },{
    id: 2,
    title: "The Infinadeck",
    description: "Short description of project two goes here.",
    imageUrl: infinadeckImage
  },  {
    id: 3,
    title: "Retail Choice Angel",
    description: "Short description of project two goes here.",
    imageUrl: retailChoiceImage
  },  {
    id: 4,
    title: "Incident Response",
    description: "Short description of project two goes here.",
    imageUrl: incidentResponseImage
  }, {
    id: 7,
    title: "Document Ingestion",
    description: "Short description of project two goes here.",
    imageUrl: documentIngestionImage
  }, {
    id: 9,
    title: "Maximo Analytics",
    description: "Short description of project two goes here.",
    imageUrl: maximoAnalyticsImage
  },  {
    id: 10,
    title: "Tariff Navigator",
    description: "Short description of project two goes here.",
    imageUrl: tariffNavigatorImage
  },  {
    id: 11,
    title: "Asset Criticality",
    description: "Short description of project two goes here.",
    imageUrl: assetImage
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="projects-page">
      <Header /> 
      <div className="projects-container">
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} />
              </div>
              <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;