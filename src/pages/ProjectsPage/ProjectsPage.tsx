import React from 'react';
import Header from '../../../src/components/Header/Header.tsx';
import './ProjectsPage.scss'; 

// Project data structure
interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

// Sample project data - replace with your actual projects
const projects: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "Short description of project one goes here.",
    imageUrl: "/path/to/image1.jpg"
  },
  {
    id: 2,
    title: "Project Two",
    description: "Short description of project two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 3,
    title: "Project Two",
    description: "Short description of project two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 4,
    title: "Project Two",
    description: "Short description of project two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 5,
    title: "Project Two",
    description: "Short description of project two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 6,
    title: "Project Two",
    description: "Short description of project two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 7,
    title: "Project Two",
    description: "Short description of project two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 8,
    title: "Project Two",
    description: "Short description of project two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 9,
    title: "Project Two",
    description: "Short description of project two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 10,
    title: "Project Two",
    description: "Short description of project two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 11,
    title: "Project Two",
    description: "Short description of project two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 12,
    title: "Project Two",
    description: "Short description of project two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 13,
    title: "Project Two",
    description: "Short description of project two goes here.",
    imageUrl: "/path/to/image2.jpg"
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