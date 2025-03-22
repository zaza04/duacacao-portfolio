import './App.scss';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Journey from './components/Journey/Journey';
import Skills from "./components/Skills/Skills";
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
        <Skills />
        <Projects />
        <Footer />
      </div>

    </>
  );
}

export default App;
