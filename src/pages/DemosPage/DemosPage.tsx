import React from 'react';
import { Grid } from '@mui/material';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Container } from '@mui/material';
import Header from '../../../src/components/Header/Header.tsx';
import './DemosPage.scss';
import hudsonImage from '../../assets/images/hudson.png';
import AVPImage from '../../assets/images/AppleVisionPro.jpg';
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
    description: `Hudson is an agile, quadruped robot dog developed by Liquid Studios in collaboration with Boston Dynamics, designed to autonomously navigate enterprise environments, collect data from key points of interest, and support tasks like fire safety inspections and hazardous area monitoring. It serves as a compelling demonstration of service robotics, sparking client conversations across industries by showcasing how robotics, machine learning, and image recognition can enhance operational safety and efficiency.`,
    imageUrl: hudsonImage
  },
   {
    id: 2,
    title: "AVP (Apple Vision Pro)",
    description: "The Apple Vision Pro is Apple’s first spatial computing headset, blending augmented and virtual reality with ultra-high-resolution micro-OLED displays, spatial audio, and intuitive hand and eye tracking to deliver immersive experiences for work, entertainment, and communication. Internally, it has been used in client demos and innovation labs for showcasing immersive environments like jetpack simulations and concerts, though enterprise support is still limited due to compatibility issues with Microsoft apps and device management systems.",
    imageUrl: AVPImage
  }, {
    id: 3,
    title: "MaIR",
    description: "MAIR is a hyper-realistic digital human, a digital twin of Mary Hamilton, Accenture’s Technology Innovation Lead for North America and Latin America. She is powered by Generative AI, utilizing OpenAI’s GPT-3.5-turbo chat model and prompt engineering, and integrated with technologies that enable question and answering over a corpus of documents.",
    imageUrl: mairImage
  }, {
    id: 4,
    title: "Mendi (Brain Gym)",
    description: "Accenture’s BrainGym utilizes brain-sensing technologies and generative AI to provide continuous insights into the needs of the workforce through assessing mental wellness and fitness in real time.​​ Leveraging neurotechnology combined with generative AI, BrainGym is able to measure brain activity and provide signal feedback to measure focus and attention of individuals within the workforce, including personalized recommendations.",
    imageUrl: mendiImage
  }, {
    id: 5,
    title: "Meta Quest Pro",
    description: "The Meta Quest Pro is a high-end standalone mixed reality headset developed by Meta, designed primarily for enterprise and professional use. Accenture’s VR solution needs due to its native support for required apps, ergonomic design, and spatial computing capabilities, despite limitations like short battery life and the need for Meta account setup.",
    imageUrl: questProImage
  }, {
    id: 6,
    title: "Hololens",
    description: "The Microsoft HoloLens is a self-contained augmented reality headset that overlays interactive 3D holograms onto the real world, enabling hands-free collaboration, training, and data visualization across industries like healthcare, design, and field services. Internally, it has been evaluated as a strong enterprise solution due to its native support for Intune MDM, spatial mapping, and Windows UX, with use cases ranging from surgical assistance and interior design to remote expert guidance and immersive training.",
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
  const [activeCard, setActiveCard] = React.useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setActiveCard(prevState => prevState === id ? null : id);
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
                flipped={activeCard === demo.id} 
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default DemosPage;