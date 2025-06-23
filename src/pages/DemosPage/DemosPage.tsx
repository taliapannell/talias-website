import React from 'react';
import { Grid } from '@mui/material';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Container } from '@mui/material';
import Header from '../../../src/components/Header/Header.tsx';
import './DemosPage.scss';
import hudsonImage from '../../assets/images/hudson.png';
import infinadeckImage from '../../assets/images/infinadeck.png';
import mairImage from '../../assets/images/mair.png';
import mendiImage from '../../assets/images/mendi.png';
import questProImage from '../../assets/images/questPro.png';
import hololensImage from '../../assets/images/hololens.png';

interface Demo {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const demos: Demo[] = [
  {
    id: 1,
    title: "Hudson",
    description: `Rental Detective is a next-generation, AI-powered web application built to revolutionize the apartment hunting experience. This platform is built using React, TypeScript, and Vite, hosted on GitHub, and powered by AWS services for scalability, speed, and security. Searching for an apartment can be stressful, time-consuming, and expensive — especially when you're paying application fees only to find out later that you don't qualify. Rental Detective solves this with a personalized, smart, and secure process that saves renters time, money, and frustration.`,
    imageUrl: hudsonImage
  },
   {
    id: 2,
    title: "Infinadeck",
    description: "Retail Choice Angel is a GenAI-powered assistant developed to support Con Edison's Retail Access operations. It addresses the high volume of system exceptions—nearly 1,000 monthly \"To Dos\"—that arise from billing disputes and data inconsistencies between ConEd and ESCOs (Energy Service Companies).",
    imageUrl: infinadeckImage
  }, {
    id: 3,
    title: "MaIR",
    description: "The NOC Incident Response Accelerator is a GenAI-powered solution designed to transform traditional Network Operations Center workflows by automating incident detection, triage, and resolution through intelligent event correlation, predictive analytics, and autonomous agents—dramatically reducing mean time to resolution (MTTR), minimizing costly downtime, and enhancing operational resilience by integrating real-time monitoring, anomaly detection, and AI-generated troubleshooting steps across complex infrastructure environments.",
    imageUrl: mairImage
  }, {
    id: 4,
    title: "Mendi (Brain Gym)",
    description: "The Document Ingestion Demo is a robust, end-to-end GenAI-powered pipeline that enables seamless uploading, parsing, embedding, and storage of documents using Azure-native services and large language models, empowering downstream applications—such as intelligent search, chatbots, and compliance tools—with fast, scalable, and secure access to structured knowledge extracted from unstructured content.",
    imageUrl: mendiImage
  }, {
    id: 5,
    title: "Meta Quest Pro",
    description: "The Maximo Analytics Demo is a forward-looking initiative that leverages predictive analytics, operational data, and environmental inputs to proactively identify equipment failures and optimize maintenance strategies, combining IBM’s Maximo Application Suite with custom-built dashboards and AI-powered insights to deliver real-time asset performance monitoring, reduce operational costs, and enhance decision-making across asset-intensive industries through a unified, cloud-enabled, and user-centric platform.",
    imageUrl: questProImage
  }, {
    id: 6,
    title: "Hololens",
    description: "The Tariff Navigator is a GenAI-powered tool designed to help ConEd's VDER Specialists and Specialized Activities Managers quickly interpret and apply complex tariff and legal documents. These documents are often dense, frequently updated, and critical for validating CDG (Community Distributed Generation) allocation plans.",
    imageUrl: hololensImage
  }
];

interface DemoCardProps {
  demo: Demo;
  onClick: () => void;
  flipped: boolean;
}

const DemoCard: React.FC<DemoCardProps> = ({ demo, onClick, flipped }) => {
  return (
    <Card 
      className={`demo-card ${flipped ? 'flipped' : ''}`}
      onClick={onClick}
    >
      <CardActionArea>
        {!flipped ? (
          <CardMedia
            component="img"
            height="250"
            image={demo.imageUrl}
            alt={demo.title}
            className="card-front"
          />
        ) : (
          <CardContent className="card-back">
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              align="center"
              style={{ width: '100%', fontWeight: 600 }}
            >
              {demo.title}
            </Typography>
            <Typography variant="body2" style={{ padding: '0 9px', fontWeight: 500 }}>
              {demo.description}
            </Typography>
          </CardContent>
        )}
      </CardActionArea>
    </Card>
  );
};

const DemosPage: React.FC = () => {
  const [flippedCards, setFlippedCards] = React.useState<{ [key: number]: boolean }>({});

  const handleCardClick = (id: number) => {
    setFlippedCards(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <div className="demos-page">
      <Header />
      <Container className="demos-container">
        <Grid container spacing={4} className="demos-grid">
          {demos.map((demo) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={demo.id}>
              <DemoCard 
                demo={demo} 
                onClick={() => handleCardClick(demo.id)} 
                flipped={flippedCards[demo.id]} 
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default DemosPage;