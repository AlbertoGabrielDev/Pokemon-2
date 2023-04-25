import './App.css';
import Atributos from './componets/Atributos';
import Pokedex from './componets/Pokedex';
import { GlobalProvider } from './context/GlobalContext';

function App() {

  return (
   <GlobalProvider>
    <div className='columns'>

   <div className='poke'><Pokedex></Pokedex></div>

    <div className='habi'><Atributos></Atributos></div>
    </div>
    
   

   </GlobalProvider>
  );
}

export default App;
