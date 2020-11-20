import './Potions.css';
import PotionsLove from './PotionsLove/PotionsLove';
import PotionsStrength from './PotionsStrength/PotionsStrength';
import PotionsEssential from './PotionsEssential/PotionsEssential';
import PotionsCheating from './PotionsCheating/PotionsCheating';
import {GiCauldron} from 'react-icons/gi';
import VideoPotion from '../Home/video/background-video.mp4';


function Potions({activePotions}) {
    return (
        <section id="potions" className = "potions container-fluid d-flex flex-column align-items-center pt-5 pb-5">
            <video autoPlay loop muted>
                <source src={VideoPotion} type="video/mp4" />
            </video>
            <h2 className="text-center"><span>P</span>otions <span>R</span>ecipes</h2>
            <GiCauldron size={"1.5em"} className="my-3 potions-icons"/>
            
            {activePotions === "Love" &&
                <PotionsLove />
            }
            {activePotions ==="Healness" &&
                <PotionsStrength />
            }
            {activePotions ==="Essential" &&
                <PotionsEssential />
            }
            {activePotions ==="Cheating" &&
                <PotionsCheating />
            }
        </section>
    )
}

export default Potions
