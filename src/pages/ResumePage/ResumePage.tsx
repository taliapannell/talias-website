import { useEffect } from 'react';

const ResumePage = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: '20px', overflow: 'hidden' }}>
      <embed src="/Talia Pannell's Resume.pdf" type="application/pdf" width="80%" height="90%" />
    </div>
  );
};

export default ResumePage;