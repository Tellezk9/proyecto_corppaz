import './App.css';

import Header from './components/header/Header';
import Hero from './components/hero/Hero'
import Clients from './components/clients/Clients';
import Programs from './components/programs/Programs';
import AboutUs from './components/aboutUs/AboutUs';
import Projects from './components/projects/Projects';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Clients></Clients>
      <Programs></Programs>
      <AboutUs></AboutUs>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
      {/* <header className="App-header">
        <div className="Div-image">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <h1>
          Sitio web en construcción... :)
        </h1>
      </header> */}
    </div>
  );
}

export default App;
