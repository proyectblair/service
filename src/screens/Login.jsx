/* eslint-disable no-unused-vars */
import {React, useState} from 'react'
import imgLogin from '../assets/login.jpg'
import imgProfile from '../assets/perfil.png'
import {FirebaseApp} from '../Firebase/config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth (FirebaseApp)

const Login = () => {
  
const [registrando, setRegistrando] = useState(false)
const functAuthentication = async(e)=>{

  e.preventDefault();
  const correo = e.target.email.value;
  const contraseña = e.target.password.value;
  
  if (registrando) {
    try {
      await createUserWithEmailAndPassword(auth, correo, contraseña);
        } catch (error) {
      alert('Error al registrar usuario:', error.message);
    }
  } else {
    try {
      await signInWithEmailAndPassword(auth, correo, contraseña);
    
    } catch (error) {
      alert('Error al iniciar sesión:', error.message);
    }
  }
};



  return (
    <div className='container'>
      <div className="row">
      <div className="col-md-4">
        <div className="father">
          <div className="card card-body shadow-1g">
            <img src={imgProfile} alt="" className="img-profile" />
            <form onSubmit={functAuthentication}>
              <input type="email" placeholder='Ingresar email' className='form-control' id='email'/>
              <input type="password" placeholder='Ingresar contraseña' className='form-control' id='password'/>
              <button className='btn-form-login'> {registrando ? "Registrate" : "Inicia sesión" }</button>
            </form>
            <h4 className='text-btn'> {registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}
              <button className='btn-switch' onClick={()=>setRegistrando(!registrando)}> {registrando ? "Inicia sesión" : "Registrate"} </button></h4>
          </div>
        </div>
        </div>
      </div>
      <div className='col-md-8'>
        <img src={imgLogin} alt="" className='img-login' />
      </div>
      
     </div>
  )
}

export default Login;