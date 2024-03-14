import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';
import FormService from './components/FormService/FormService'; 

function App() {
  return (
    <Router>
    <ButtonAppBar/>
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