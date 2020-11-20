import PotionCard from '../PotionCard/PotionCard';
import {potions} from '../../../App';
import {Fade} from 'react-reveal';

function PotionsLove() {
    const potionsLove = potions.filter(potion => potion.categorie === "Love")
    return (
        <div className= "d-flex flex-column align-items-center col-12 col-sm-11">
            <h3 className="font-italic text-center mt-3 mb-5">Our Love Potions</h3>
            <div className="d-flex justify-content-around flex-column flex-md-row flex-md-wrap w-100">
                {potionsLove.map(potion => <Fade right duration={1000}><PotionCard {...potion} key={potion.id}/></Fade>)}
            </div>
        </div>
    )
}

export default PotionsLove
