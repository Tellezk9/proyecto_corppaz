import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SocialProgramPage from './pages/SocialProgramPage';
import VacantesPage from './pages/VacantesPage';
import VacanteDetailPage from './pages/VacanteDetailPage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/programa-social' element={<SocialProgramPage />} />
        <Route path='/vacantes' element={<VacantesPage />} />
        <Route path='/vacantes/:id' element={<VacanteDetailPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
