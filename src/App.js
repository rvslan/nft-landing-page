import { useEffect, useState } from 'react';
import {
  ScrollToTop,
  Clients,
  Footer,
  Home,
  Like,
  Navbar,
  Release,
  Signup,
  SuperRare,
  Free,
} from './components';
import './scss/index.scss';
import scrollreveal from 'scrollreveal';

function App() {
  const [isDark, setIsDark] = useState(false);

  const changeTheme = () => {
    isDark ? setIsDark(false) : setIsDark(true);
  };

  const theme = isDark ? 'dark' : 'light';

  useEffect(() => {
    const sr = scrollreveal({
      origin: 'bottom',
      distance: '80px',
      duration: 2000,
      reset: false,
    });

    sr.reveal(
      `nav,
        .home,
        .free,
        .clients,
        .super-rare,
        .releases,
        .like,
        .signup,
        footer`,
      {
        interval: 500,
      }
    );
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName('home');
    home[0].style.transform = 'none';
    const nav = document.getElementsByTagName('nav');
    nav[0].style.transform = 'none';
  }, 1500);

  return (
    <div className='app-container' data-theme={theme}>
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} isDark={isDark} />
      <Home />
      <Free />
      <Clients />
      <SuperRare />
      <Release />
      <Like />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
