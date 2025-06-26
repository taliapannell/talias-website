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
import avatarImage from '../../assets/images/AppleVisionPro.jpg';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatarUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Name 1",
    role: "Senior Developer",
    company: "Tech Company",
    text: "Working with Talia was an incredible experience. Her technical expertise and innovative thinking helped us solve complex problems in record time. I highly recommend her for any engineering project.",
    rating: 5,
  },
  {
    id: 2,
    name: "Name 2",
    role: "Project Manager",
    company: "Enterprise Solutions",
    text: "Talia's contributions to our team were invaluable. She consistently delivered high-quality work ahead of schedule and mentored junior team members. Her communication skills and technical knowledge are outstanding.",
    rating: 5,
  },
  {
    id: 3,
    name: "Name 3",
    role: "CTO",
    company: "Tech Startup",
    text: "We brought Talia in to help with a critical project that was falling behind schedule. Her problem-solving abilities and work ethic turned everything around. She's a true professional who delivers results.",
    rating: 5,
  },
  {
    id: 4,
    name: "Name 4",
    role: "Engineering Director",
    company: "Fortune 500 Company",
    text: "Talia's engineering skills are truly exceptional. She tackles complex challenges with creativity and precision. What sets her apart is her ability to translate technical concepts into clear, actionable insights.",
    rating: 5,
  },
  {
    id: 5,
    name: "Name 5",
    role: "Product Owner",
    company: "Software Solutions Inc.",
    text: "I was impressed by Talia's ability to understand our business needs and deliver technical solutions that exceeded our expectations. She's not just a talented engineer but also a strategic thinker.",
    rating: 5,
  },
  {
    id: 6,
    name: "Name 6",
    role: "VP of Engineering",
    company: "Innovation Labs",
    text: "Having worked with many engineers over the years, I can confidently say that Talia stands out. Her combination of technical expertise, creativity, and collaborative approach makes her an exceptional talent.",
    rating: 5,
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
                        src={avatarImage}
                        alt={testimonial.name}
                      />
                      <Box sx={{ width: '100%', textAlign: 'center' }}>
                        <Typography variant="subtitle2" className="testimonial-name">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="caption" color="textSecondary" className="testimonial-role">
                          {testimonial.role}, {testimonial.company}
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
