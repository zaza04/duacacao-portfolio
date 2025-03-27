import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Journey from './components/Journey/Journey';
import Skill from "./components/Skill/Skill";
import Project from "./components/Project/Project";
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <> 
      
      <div data-theme="dark-mode" className="mode light-mode">
        <Header />
        <Home />
        <About />
        <Journey />
        <Skill />
        <Project />
        <Contact />
        <Footer />
      </div>

    </>
  );
}

export default App;
