import { useState } from 'react';
import { FirebaseApp } from './config';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import Login from '../components/Login/Login';
import Home from '../components/Home/Home';


const auth = getAuth (FirebaseApp);

function AuthComponent() {


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
        {User ? <Home correoUser={User.email} /> : <Login />}
      </div>
  )


  }
export default AuthComponent;


