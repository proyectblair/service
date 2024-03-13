/*import { Navbar, NavLink, NavbarBrand } from "reactstrap";
import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, signOut, updateProfile} from 'firebase/auth';
import { FirebaseApp } from "../../Firebase/config";
import { Navigate } from 'react-router-dom';

const Example = (args) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(FirebaseApp);
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);

      if (user) {
        const displayName = user.displayName;
        if (!displayName && user.uid) {
          
          try {
            await updateProfile(user, { displayName }); 
          } catch (error) {
            console.error('Error al actualizar el nombre del usuario:', error.message);
          }
        }
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Navigate('/');
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };
  return (
    <div>
     /*<Navbar {...args}>
        <NavbarBrand href="/">PROYECTO DE SERVICIOS</NavbarBrand>
        {user ? (
          <>
            <span className="username">Bienvenido, {user ?.displayName} </span> 
            <NavLink onClick={handleLogout} href="#">Cerrar sesión</NavLink>
          </>
        ) : (
          <NavLink href="/login">Login</NavLink>
        )}
      </Navbar>
    </div>
  );
}

export default Example;
*/


