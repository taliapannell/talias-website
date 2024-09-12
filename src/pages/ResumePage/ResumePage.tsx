// import React from 'react';

// const ResumePage = () => {
//   return (
//     <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: '20px' }}>
//       <embed src="/Talia'sResume9.10.24.pdf" type="application/pdf" width="80%" height="90%" />
//     </div>
//   );
// };

// export default ResumePage;
import React, { useEffect } from 'react';

const ResumePage = () => {
  useEffect(() => {
    // Disable scrolling on the body
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', paddingBottom: '20px', overflow: 'hidden' }}>
      <embed src="/Talia'sResume9.10.24.pdf" type="application/pdf" width="80%" height="90%" />
    </div>
  );
};

export default ResumePage;