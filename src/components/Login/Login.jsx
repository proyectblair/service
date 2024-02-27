import './Login.css';
// eslint-disable-next-line no-unused-vars
import {React, useState} from 'react'
import imgProfile from '../../assets/perfil.png'
import {FirebaseApp} from '../../Firebase/config'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth (FirebaseApp)


const Login = () => {
  
  
const [registrando, setRegistrando] = useState(false)
const functAuthentication = async(e)=>{

  e.preventDefault();
  const correo = e.target.email.value;
  const contraseña = e.target.password.value;
  
  if (registrando) {
    await createUserWithEmailAndPassword(auth, correo, contraseña);
  }
     else{
      await signInWithEmailAndPassword(auth, correo, contraseña);
     }
  }

  return (
    <div className='container'>
      <div className="row">
      <div className="col">
        <div className="father">
          <h2 className='title-login'>¡Bienvenido a Blair Witch!</h2>
          <div className="card card-body shadow-1g">
            <img src={imgProfile} alt="" className="img-profile" />
            <form className='form-login' onSubmit={functAuthentication}>
            {registrando && (
                  <>
                    <input type="text" placeholder="Nombre" className="form-control" id="name" />
                    <input type="text" placeholder="Apellido" className="form-control" id="lastname" />
                  </>
                )} 
              <input 
              type="email" 
              placeholder='Ingresar email' className='form-control' id='email'/>
              <input 
              type="password" 
              placeholder='Ingresar contraseña' className='form-control' id='password'/>
              <button className='btn-form-login'> {registrando ? "Registrate" : "Inicia sesión" }</button>
            </form>
            <h4 className='text-btn'> {registrando ? "¿Ya tiene una cuenta?" : "¿No tienes cuenta?"}
              <button className='btn-switch' 
              onClick={()=>setRegistrando(!registrando)}> {registrando ? "Inicia sesión" : "Registrate"} </button>
            </h4>
          </div>
        </div>
        </div>
      </div>
     </div>
  )
}

export default Login;