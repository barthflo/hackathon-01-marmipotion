import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Potions from './components/Potions/Potions';
import {useState} from 'react';
import Home from './components/Home/Home';


function App() {
  const [activePotions, setActivePotions] = useState("Love");
    const toggleActive = (potions) =>{
        activePotions!== potions && setActivePotions(potions);
    };
  return (
    <div className="App">
      <Home />
      <ul className="list-unstyled">
          <li className="text-light"><button onClick={() => toggleActive("Love") }className="btn btn-outline-dark">Love Potions</button></li>
          <li className="text-light"><button onClick={()=> toggleActive("Strength") }className="btn btn-outline-dark">Strength Potions</button></li>
      </ul>
      <Potions activePotions = {activePotions} />
      
    </div>
  );
}

export default App;
