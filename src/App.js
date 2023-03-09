/** asignando estilos propios */
import './style.css'
import Header from './Components/Header';
import { createContext, useState } from 'react';
import Hijo from './Components/Hijo';
import ListEvents from './Components/ListEvents';

/**
 * 
 * creamos un contexto
 */
export const usuarioContext = createContext();


function App() {
  const [user, setUser] = useState(null);

  const login = () => {
    if(user){
      setUser(null);
    }else{
      setUser({
        nombre: "Kenia",
        correo: "kenia@gmail.com"
      })
    }
  }
  
  return (
    <usuarioContext.Provider value={user}>
      <div>
        <h1>Componente Context</h1>
        <button onClick={login}>Login</button>
        {/* Haciendo prueba si la variable de entorno funciona
          process.env.REACT_APP_URL_BASE 
        <Header />*/}
        <Hijo />
      </div>
    </usuarioContext.Provider>
  );
}

export default App;
