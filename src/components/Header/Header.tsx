import './Header.scss'; 
import viteLogo from '/vite.svg';
import linkedinLogo from '../../assets/images/linkedin.svg'; 
import githubLogo from '../../assets/images/github-logo.svg';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={viteLogo} alt="Vite Logo" className="logo-img" />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/projects">PROJECTS</Link></li>
          <li><Link to="/demoes">DEMOES</Link></li> 
          <li><Link to="/resume">RESUME</Link></li> 
          <li><Link to="/whoiam">WHO I AM</Link></li>
          <li>
            <a href="https://www.linkedin.com/in/talia-pannell/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn Logo" className="linkedin-logo" />
            </a>
          </li>          
          <li>
            <a href="https://github.com/taliapannell" target="_blank" rel="noopener noreferrer">
              <img src={githubLogo} alt="Github Logo" className="github-logo" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;