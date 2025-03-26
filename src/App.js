import './App.scss';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Journey from './components/Journey/Journey';
import Skill from "./components/Skill/Skill";
import Projects from "./components/Projects/Projects";
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
        <Projects />
        <Footer />
      </div>

    </>
  );
}

export default App;
