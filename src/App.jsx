import './App.css';

import Amortentia from './assets/Amortentia.jpeg';
import LuxBrumalis from './assets/LuxBrumalis.jpeg';
import AmorVincitOmnia from './assets/AmorVincitOmnia.jpeg';
import Wiggenweld from './assets/Wiggenweld.jpeg';
import SkeleGro from './assets/SkeleGro.jpeg';
import Sanitatem from './assets/Sanitatem.jpeg';
import DraughtOfPeace from './assets/DraughtOfPeace.jpeg';
import MagnaMusculi from './assets/MagnaMusculi.jpeg';
import LaborumRemedium from './assets/LaborumRemedium.jpeg';
import ConfusingConcoction from './assets/ConfusingConcoction.jpeg';
import FelixFelicis from './assets/FelixFelicis.jpeg';
import Polyjuice from './assets/PolyjuicePotion.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Potions from './components/Potions/Potions';
import {useState, useEffect, createContext} from 'react';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import SelectionPlants from './components/SelectionPlants/SelectionPlants';

export const potions = [
  {
    id: 0,
    potionName: "Amortentia",
    potionImg: Amortentia,
    categorie: "Love",
    description: "Amortentia is a love potion that does not create actual love, but gives the drinker a powerful obsession and infatuation with the giver of the potion. ",
    recipe: [
      "2 pinches of: ",
      "6 pinches of: ",
      "3 pieces of: ",
      "10 cup of: ",
      "4 teaspoons of: ",
      "0.5 spoon of: ",
    ],
  },
  {
    id: 1,
    potionName: "Lux Brumalis",
    potionImg: LuxBrumalis,
    categorie: "Love",
    description: "Lux Brumalis means 'the light of winter', this love potion will only have effect in winter.",
    recipe: [
      "45 leaves of: ",
      "2 pinches of: ",
      "7 pieces of: ",
    ],
  },
  {
    id: 2,
    potionName: "Amor Vincit Omnia",
    potionImg: AmorVincitOmnia,
    categorie: "Love",
    description: "Like its meaning, this potion will conquer all the people's heart you want.",
    recipe: [
      "100 teaspoon of: ",
      "4 pieces of: ",
      "45 inches of: ",
      "10 spoons of: ",
    ],
  },
  {
    id: 3,
    potionName: "Wiggenweld Potion",
    potionImg: Wiggenweld,
    categorie: "Healness",
    description: "The Wiggenweld Potion is a powerful healing potion that can be used to heal injuries, or to reverse effects of a Sleeping Draught.",
    recipe: [
      "50 cauldrons of: ",
      "1 teaspoon of: ",
      "12 teaspoons of: ",
      "30 pieces of: ",
      "0.0000000001 piece of: ",
    ],
  },
  {
    id: 4,
    potionName: "Skele-Gro",
    potionImg: SkeleGro,
    categorie: "Healness",
    description: "Skele-Gro is a medicinal potion that can regrow missing or removed bones, though it tastes terrible and the process is very slow and extremely painful.",
    recipe: [
      "1 cup of: ",
      "12 spoons of: ",
      "3 pinches of: ",
    ],
  },
  {
    id: 5,
    potionName: "Sanitatem",
    potionImg: Sanitatem,
    categorie: "Healness",
    description: "It cures ailments, such as headaches, stomach aches, foot aches or even nose aches !",
    recipe: [
      "33 teaspoons of: ",
      "4 cauldrons of: ",
      "12 inches of: ",
      "2020 leaves of: ",
    ],
  },
  {
    id: 6,
    potionName: "Draught of Peace",
    potionImg: DraughtOfPeace,
    categorie: "Essential",
    description: "! WARNING ! It is a very difficult potion to make. The Draught of Peace provides personal comfort, calms anxiety and soothes agitation.",
    recipe: [
      "2 cauldron of: ",
      "5.001 spoon of: ",
      "10 leaves of: ",
      "0.00000000000123 inches of: ",
    ],
  },
  {
    id: 7,
    potionName: "Magna Musculi",
    potionImg: MagnaMusculi,
    categorie: "Essential",
    description: "It increases your strength for a day. Useful if you work in the fields.",
    recipe: [
      "6 pinches of: ",
      "4 cups of: ",
      "300 spoons of: ",
      "8 cauldrons of: ",
      "3 cauldrons of: ",
    ],
  },
  {
    id: 8,
    potionName: "Laborum Remedium",
    potionImg: LaborumRemedium,
    categorie: "Essential",
    description: "This potion will take away your sleep but be careful not to drink too much (you might never be able to sleep again).",
    recipe: [
      "10 spoons of: ",
      "10 inches of: ",
    ],
  },
  {
    id: 9,
    potionName: "Confusing Concoction",
    potionImg: ConfusingConcoction,
    categorie: "Cheating",
    description: "A Confusing Concoction causes the drinker to become confused, distracted and sick.",
    recipe: [
      "44 leaves of: ",
      "6 cauldrons of: ",
      "15 cups of: ",
    ],
  },
  {
    id: 10,
    potionName: "Felix Felicis / Liquid Luck",
    potionImg: FelixFelicis,
    categorie: "Cheating",
    description: "Felix Felicis, more commonly known as Liquid Luck, grants whoever drinks it unusually good luck. Promises success to whoever drinks it !",
    recipe: [
      "20 pinches of: ",
      "1 teaspoon of: ",
      "45 wood cups of: ",
      "12 pieces of: ",
    ],
  },
  {
    id: 11,
    potionName: "Polyjuice Potion",
    potionImg: Polyjuice,
    categorie: "Cheating",
    description: "The Polyjuice Potion allows the drinker to assume the appearance of someone else for an hour or more depending on the quantity.",
    recipe: [
      "4 inches of: ",
      "605 cauldrons of: ",
      "18 pinches of: ",
    ],
  },
]
export const PlantsContext = createContext(null);
function App() {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch(`https://plantsapi.herokuapp.com/plants`)
    .then(res => res.json())
    .then(res => {
      setPlants(res.data);
      });
  }, [])
  
  const [activePotions, setActivePotions] = useState("Love");
    const toggleActive = (potions) =>{
        activePotions!== potions && setActivePotions(potions);
    };
  return (
    <div className="App">
      <Home />
      <Header activePotions = {activePotions} toggleActive={toggleActive}/>
      <Intro />
      <PlantsContext.Provider value={{plants}}>
        <Potions activePotions = {activePotions} />
      </PlantsContext.Provider>
      <SelectionPlants plants = {plants} />
      <Footer />
    </div>
  );
}

export default App;
