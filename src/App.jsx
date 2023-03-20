import './App.css';
import Atributos from './componets/Atributos';
import Pokedex from './componets/Pokedex';
import { GlobalProvaider } from './context/GlobalContext';

function App() {

  return (
   <GlobalProvaider>
    <Pokedex></Pokedex>
    <Atributos></Atributos>
   </GlobalProvaider>
  );
}

export default App;
