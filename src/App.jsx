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
          <Route path="/" element={<Home />} /> 
          <Route path="/form-service" element={<FormService />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Slider />
      <Header />
      <FormMain/>
      <Footer />
    </div>
  );
}

export default App;
