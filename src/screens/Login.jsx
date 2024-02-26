/* eslint-disable no-unused-vars */
import {React} from 'react'
import imgLogin from '../assets/login.jpg'
import imgProfile from '../assets/perfil.png'

const Login = () => {
  
  return (
    <div className='container'>
      <div className="row">
      <div className="col-md.4">
        <div className="father">
          <div className="card card-body shadow-1g">
            <img src={imgProfile} alt="" className="img-profile" />
            <form>
              <input type="email" placeholder='Ingresar email' className='form-control'/>
              <input type="password" placeholder='Ingresar contraseña' className='form-control'/>
              <button className='btn-form-login'>Registrarse</button>
            </form>
            <h4><button>iniciar sesion</button></h4>
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