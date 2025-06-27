import React from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Avatar, 
  Box, 
  Container
} from '@mui/material';
import './TestimonialsPage.scss';
import carlyleImage from "../../assets/images/Carlyle Profile.jpeg";
import danielImage from "../../assets/images/Daniel Profile.jpeg";
import lesterImage from "../../assets/images/lester.d.bravo.lopez.jpg";
import silviaImage from "../../assets/images/Silvia Profile.jpeg";
import evelynImage from "../../assets/images/Evelyn Profile.jpeg";
import jenniferImage from "../../assets/images/Jennifer Profile.jpeg";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatarUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Carlyle Campbell",
    role: "Welcome Host",
    text: "I met Talia one day and she's been nothing short of pleasant and super helpful. The best part though is how Talia handles the group; she absolutely shines when explaining how it works, what it's used for, it's capabilities and its limits. Talia is always the best and brightest part of our tours.",
    avatarUrl: carlyleImage
  },
  {
    id: 2,
    name: "Daniel Steinberg",
    role: "Advanced App Engineering Specialist",
    text: "Talia's enthusiasm is infectious, and she is incredibly proactive and reliable in achieving her goals. Her communication skills are exceptional. Talia is a skilled developer and quick learner. When I first met Talia, she was still relatively new to coding, but by last summer, she had already become a very strong front-end programmer.",
    avatarUrl: danielImage
  },
  {
    id: 3,
    name: "Lester Bravo",
    role: "Full Stack Engineering Specialist",
    text: "Talia has demonstrated great versatility and commitment in her role within the team. She has shown a willingness to take on both frontend and backend development, showcasing her adaptability and a strong sense of collaboration. Her contributions have been invaluable, and her proactive attitude has positively impacted the team's progress.",
    avatarUrl: lesterImage
  },
  {
    id: 4,
    name: "Silvia Chorny",
    role: "HR Service Delivery Senior Analyst",
    text: "Your story was an inspiration for anyone interested in starting their careers with us, here at Accenture. Your hard work and dedication made a huge impact. Looking back on the work that you have done, we hope that you can now see yourself as an example to all future apprentices. We are so proud of you and we hope you are too!",
    avatarUrl: silviaImage
  },
  {
    id: 5,
    name: "Evelyn Stellara",
    role: "Advanced App Engineering Specialist",
    text: "Talia has shown great progress in her programming skills and has become proficient in delivering tasks based on requirements. Her ability to work efficiently is evident from her recent project delivery, showing commendable adaptability in transitioning into a new project role and consistently delivering work within the given timeline.",
    avatarUrl: evelynImage
  },
  {
    id: 6,
    name: "Jennifer Malach",
    role: "Inclusion and Diversity Senior Manager",
    text: "Thank you so much for sharing your expertise at our event yesterday! Hudson was a big hit – but only because of your presentation and active engagement with the educators in the room. Helping them experience first-hand the type of work we do was a crucial part of this program and I really appreciate you taking the time to join.",
    avatarUrl: jenniferImage
  }
];

const TestimonialsPage: React.FC = () => {
  return (
    <div className="testimonials-page">
      <Container maxWidth="lg" className="testimonials-container" disableGutters>
        <Box py={4} px={2}>
          
          <Grid container spacing={4} className="testimonials-grid" justifyContent="center">
            {testimonials.map((testimonial) => (
              <Grid item xs={12} sm={6} md={4} key={testimonial.id} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                <Card 
                  className="testimonial-card"
                  elevation={2}
                >
                  <CardContent className="testimonial-content">
                    <Typography 
                      variant="body2" 
                      className="testimonial-text"
                    >
                      {testimonial.text}
                    </Typography>
                    
                    <Box className="testimonial-author">
                      <Avatar 
                        className="testimonial-avatar"
                        src={testimonial.avatarUrl}
                        alt={testimonial.name}
                      />
                      <Box sx={{ width: '100%', textAlign: 'center' }}>
                        <Typography variant="subtitle2" className="testimonial-name">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="caption" color="textSecondary" className="testimonial-role">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default TestimonialsPage;
