
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import Navbar  from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Form from './components/Form/Form';
=======
import './App.css';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
>>>>>>> test
import Footer from './components/Footer/Footer';
import FormService from './components/FormService/FormService'; 
import ButtonAppBar from "./components/Navbar/Navbar";
import FormMain from './components/Form/Form';



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
      <ButtonAppBar/>
      <Slider />
      <Header />
      <FormMain/>
      <Footer />
    </div>
  );
}

export default App;
