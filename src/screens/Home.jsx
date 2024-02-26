/* eslint-disable no-unused-vars */
import React from 'react';
import { FirebaseApp } from '../Firebase/config';
import { getAuth,signOut } from 'firebase/auth';

const auth = getAuth(FirebaseApp); 

// eslint-disable-next-line react/prop-types
function Home({correousuario}) {
    return (
    <div>
       <h2 className='text-center'>HOLA USUARIO {correousuario} <button className='btn btn-primary' onClick={()=>signOut(auth)}>Cerrar sesión</button></h2>
    </div>
    );
}

export default Home;