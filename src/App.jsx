import './App.css';
import Pokedex from './componets/Pokedex';
import { GlobalProvaider } from './context/GlobalContext';

function App() {

  return (
   <GlobalProvaider>
    <Pokedex></Pokedex>
   </GlobalProvaider>
  );
}

export default App;
