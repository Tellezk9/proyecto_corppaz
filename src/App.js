import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SocialProgramPage from './pages/SocialProgramPage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/programa-social' element={<SocialProgramPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
