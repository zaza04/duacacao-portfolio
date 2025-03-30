import './App.scss';
import { useState } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Journey from './components/Journey/Journey';
import Skill from "./components/Skill/Skill";
import Project from "./components/Project/Project";
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const setTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  }
  return (
    <> 
      
      <div data-theme={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <Header setTheme={setTheme}/>
        <div className='main'>
          <Home />
          <About />
          <Journey />
          <Skill />
          <Project />
          <Contact />
          <Footer />
        </div>
      </div>

    </>
  );
}

export default App;
