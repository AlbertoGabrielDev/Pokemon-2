import './App.css';
import Atributos from './componets/Atributos';
import Pokedex from './componets/Pokedex';
import { GlobalProvaider } from './context/GlobalContext';

function App() {

  return (
   <GlobalProvaider>
    <div className='columns'>

   <div className='poke'><Pokedex></Pokedex></div>

    <div className='habi'><Atributos></Atributos></div>
    </div>
    
   

   </GlobalProvaider>
  );
}

export default App;
