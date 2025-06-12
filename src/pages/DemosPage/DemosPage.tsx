import React from 'react';
import Header from '../../../src/components/Header/Header.tsx';
import './DemosPage.scss'; 

interface Demo {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const demos: Demo[] = [
  {
    id: 1,
    title: "Demo One",
    description: "Short description of demo one goes here.",
    imageUrl: "/path/to/image1.jpg"
  },
  {
    id: 2,
    title: "Demo Two",
    description: "Short description of demo two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 3,
    title: "Demo Two",
    description: "Short description of demo two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 4,
    title: "Demo Two",
    description: "Short description of demo two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 5,
    title: "Demo Two",
    description: "Short description of demo two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 6,
    title: "Demo Two",
    description: "Short description of demo two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 7,
    title: "Demo Two",
    description: "Short description of demo two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 8,
    title: "Demo Two",
    description: "Short description of demo two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 9,
    title: "Demo Two",
    description: "Short description of demo two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 10,
    title: "Demo Two",
    description: "Short description of demo two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 11,
    title: "Demo Two",
    description: "Short description of demo two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 12,
    title: "Demo Two",
    description: "Short description of demo two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 13,
    title: "Demo Two",
    description: "Short description of demo two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 14,
    title: "Demo Two",
    description: "Short description of demo two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },  {
    id: 15,
    title: "Demo Two",
    description: "Short description of demo two goes here.",
    imageUrl: "/path/to/image2.jpg"
  },
];

const DemosPage: React.FC = () => {
  return (
    <div className="demos-page">
      <Header /> 
      <div className="demos-container">
        <div className="demos-grid">
          {demos.map(demo => (
            <div className="demo-card" key={demo.id}>
              <div className="demo-image">
                <img src={demo.imageUrl} alt={demo.title} />
              </div>
              <div className="demo-content">
                <h2 className="demo-title">{demo.title}</h2>
                <p className="demo-description">{demo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemosPage;