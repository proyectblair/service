import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';
import FormService from './components/FormService/FormService'; 
import FormMain from './components/Form/Form';
import { Message } from '@mui/icons-material';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home handleSubmit={handleSubmit} />} /> {/* Pasa handleSubmit como una prop a Home */}
          <Route path="/form-service" element={<FormService />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home({ handleSubmit }) { // Recibe handleSubmit como una prop
  return (
    <div>
      <Slider />
      <Header />
      {/* Pasa la función handleSubmit como una prop al componente FormMain */}
      <FormMain handleSubmit={handleSubmit}/>
      <Footer />
    </div>
  );
}

export default App;
