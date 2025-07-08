import { useEffect } from 'react';
import backgroundImage from '../../assets/background/whoiam-background.jpeg';

const ResumePage = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div 
      style={{ 
        width: '100vw', 
        height: '100vh', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'flex-end', 
        paddingBottom: '20px', 
        overflow: 'hidden',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <iframe 
        src="/Talia Pannell Short Resume.pdf" 
        width="80%" 
        height="90%" 
        style={{
          border: 'none',
          backgroundColor: 'transparent'
        }} 
      />
    </div>
  );
};

export default ResumePage;