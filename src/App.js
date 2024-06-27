import './App.css';

import Hero from './components/hero/Hero'
import Clients from './components/clients/Clients';
import Services from './components/services/Services';
import AboutUs from './components/aboutUs/AboutUs';
import Projects from './components/projects/Projects';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Clients></Clients>
      <Services></Services>
      <AboutUs></AboutUs>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
