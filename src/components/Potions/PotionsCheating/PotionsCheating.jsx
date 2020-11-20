import React from 'react';
import {potions} from '../../../App';
import PotionCard from '../PotionCard/PotionCard';
import {Fade} from 'react-reveal';

function PotionsCheating() {
    const potionsLove = potions.filter(potion => potion.categorie === "Cheating")
    return (
        <div className= "d-flex flex-column align-items-center col-12 col-sm-11">
            <h3 className="font-italic text-center mt-3 mb-5">Our Cheating Potions</h3>
            <div className="d-flex justify-content-around flex-column flex-md-row flex-md-wrap w-100">
                {potionsLove.map(potion => <Fade left duration={1000}><PotionCard {...potion} key={potion.id}/></Fade>)}
            </div>
        </div>
    )
}

export default PotionsCheating
