import React, { useEffect, useState } from 'react';
import { BsChevronUp } from 'react-icons/bs';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 100 ? setIsVisible(true) : setIsVisible(false);
    });
  };

  handleScroll();

  useEffect(() => {
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <div className={`scrollToTop ${isVisible ? 'visible' : ''}`}>
      <a href='#'>
        <BsChevronUp />
      </a>
    </div>
  );
}

export default ScrollToTop;
