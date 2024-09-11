import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header.tsx';
import backgroundImage from '../../assets/background/backgroundimage.png';
import './MainPage.scss';

interface HelloProps {
  name: string;
}

const Hello: React.FC<HelloProps> = ({ }) => {
  const mainPageStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', 
    height: '96vh', 
    width: '100vw',
    padding: '20px' 
  };

  const words = ["an Engineer...", "a Developer...", "an Innovator...", "an Artist...", "Talia!"];
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      } else {
        if (charIndex < currentWord.length) {
          setDisplayedText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      }
    };

    const typingInterval = setInterval(handleTyping, 150);
    return () => clearInterval(typingInterval);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <div style={mainPageStyle}>
      <Header />
      <h1>Hello!</h1>
      <h2>I am</h2>
      <h3 className="typewriter">{displayedText}</h3>
    </div>
  );
};

export default Hello;