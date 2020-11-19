import './Potions.css';
import PotionsLove from './PotionsLove/PotionsLove';
import PotionsStrength from './PotionsStrength/PotionsStrength';
import {GiCauldron} from 'react-icons/gi';
import VideoPotion from '../Home/video/background-video.mp4';

function Potions({activePotions}) {
    return (
        <section className = "potions container-fluid d-flex flex-column align-items-center pt-5">
            <video autoPlay loop muted>
                <source src={VideoPotion} type="video/mp4" />
            </video>
            <h2><span>P</span>otions <span>R</span>ecipes</h2>
            <GiCauldron size={"1.5em"} className="my-3 potions-icons"/>
            
            {activePotions === "Love" &&
                <PotionsLove />
            }
            {activePotions ==="Strength" &&
                <PotionsStrength />
            } 
        </section>
    )
}

export default Potions
