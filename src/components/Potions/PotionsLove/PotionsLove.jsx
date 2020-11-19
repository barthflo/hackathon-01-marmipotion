import PotionCard from '../PotionCard/PotionCard';

function PotionsLove() {
    return (
        <div className= "d-flex flex-column align-items-center col-11">
            <h3 className="font-italic text-center mt-3 mb-5">Our Love Potions</h3>
            <div className="d-flex justify-content-around flex-column flex-md-row flex-md-wrap w-100">
                <PotionCard />
                <PotionCard />
                <PotionCard />
            </div>
        </div>
    )
}

export default PotionsLove
