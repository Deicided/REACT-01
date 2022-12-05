import './App.css';
import logocontato from "./imagenes/logo-contato.png";
import ListaDeTareas from './componentes/ListaDeTareas';



function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'>
        <img src={logocontato}  className="logo-contenedor2" /> 
         </div>

          <div className='tareas-lista-principal'>    
              <h1> Contatos </h1>
              <ListaDeTareas />
              
              </div>


    </div>
  );
}

export default App;
