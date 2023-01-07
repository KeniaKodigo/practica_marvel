/** asignando estilos propios */
import './style.css'
import Header from './Components/Header';

function App() {
  return (
      <div>
        {/* Haciendo prueba si la variable de entorno funciona
          process.env.REACT_APP_URL_BASE */}
        <Header />
        
      </div>
  );
}

export default App;
