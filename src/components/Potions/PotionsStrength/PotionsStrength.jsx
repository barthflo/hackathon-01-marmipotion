import PotionCard from '../PotionCard/PotionCard';
import {potions} from '../../../App';
import {Fade} from 'react-reveal';

function PotionsStrength() {
    const potionsHealness = potions.filter(potion => potion.categorie === "Healness")
    return (
        <div className="d-flex flex-column align-items-center col-12 col-sm-11">
            <h3 className="font-italic text-center mt-3 mb-5">Our Healness Potions</h3>
            <div className="d-flex justify-content-around flex-column flex-md-row flex-md-wrap w-100">
                {potionsHealness.map(potion => <Fade left duration={1000}><PotionCard {...potion} key={potion.id}/></Fade>)}
            </div>
        </div>
    )
}

export default PotionsStrength
