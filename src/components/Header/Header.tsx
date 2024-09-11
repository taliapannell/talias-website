// import React from 'react';
// import './Header.scss'; 
// import viteLogo from '/vite.svg';
// import linkedinLogo from '../../assets/images/linkedin.svg'; 
// import { Link } from 'react-router-dom';


// const Header: React.FC = () => {
//   return (
//     <header className="header">
//       <div className="logo">
//         <a href="http://localhost:5173/" target="_blank" rel="noopener noreferrer">
//           <img src={viteLogo} alt="Vite Logo" className="logo-img" />
//         </a>
//       </div>
//       <nav>
//         <ul>
//           <li><Link to="/about">ABOUT</Link></li> {/* Use Link component for navigation */}
//           <li><a href="#projects">PROJECTS</a></li>
//           <li><a href="#demoes">DEMOES</a></li>
//           <li><a href="#resume">RESUME</a></li>
//           <li><a href="#whoiam">WHO I AM</a></li>
//           <li>
//             <a href="https://www.linkedin.com/in/talia-pannell/" target="_blank" rel="noopener noreferrer">
//               <img src={linkedinLogo} alt="LinkedIn Logo" className="linkedin-logo" />
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
import React from 'react';
import './Header.scss'; 
import viteLogo from '/vite.svg';
import linkedinLogo from '../../assets/images/linkedin.svg'; 
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/"> {/* Use Link component for navigation */}
          <img src={viteLogo} alt="Vite Logo" className="logo-img" />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/about">ABOUT</Link></li> {/* Use Link component for navigation */}
          <li><Link to="/projects">PROJECTS</Link></li> {/* Use Link component for navigation */}
          <li><Link to="/demoes">DEMOES</Link></li> {/* Use Link component for navigation */}
          <li><Link to="/resume">RESUME</Link></li> {/* Use Link component for navigation */}
          <li><Link to="/whoiam">WHO I AM</Link></li> {/* Use Link component for navigation */}

          {/* <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#demoes">DEMOES</a></li>
          <li><a href="#resume">RESUME</a></li>
          <li><a href="#whoiam">WHO I AM</a></li> */}
          <li>
            <a href="https://www.linkedin.com/in/talia-pannell/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn Logo" className="linkedin-logo" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;