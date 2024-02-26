import './App.css'
import { useState } from 'react';
//Modulos de firebase

import {FirebaseApp} from './Firebase/config'
import {getAuth, onAuthStateChanged} from 'firebase/auth';


//importación de componentes


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
    

      
       
      </div>
      
  )

  }
export default App;
