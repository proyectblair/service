import './App.css'
import { useState } from 'react';
//Modulos de firebase

import {FirebaseApp} from './Firebase/config'
import {getAuth, onAuthStateChanged} from 'firebase/auth';


//importación de componentes

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import CustomNavbar from './components/Navbar/Navbar';
import Login from './screens/Login';
import Home from './screens/Home';


//Funciones y variables 

const auth = getAuth (FirebaseApp);



function App() {

 const [User,setUser] = useState(null)
  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase)
    }
    else
    {
      setUser(null)
    }
  })

  return (
      <div>
        {User ? <Home correoUser = {User.email}/> : <Login/> };
    

       <CustomNavbar/>
       <Header/>
       <Form/>
       <Footer/>
       
      </div>
      
  )

  }
export default App;
