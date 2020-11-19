import './PotionCard.css';

function PotionCard(props) {
    return (
        <div className = "potion-card card mb-4 p-4">
            <div className="card-header d-flex flex-column align-items-center ">
                <h3 className="text-center">{props.potionName}</h3>
                <figure className="mt-4">
                    <img className="w-100 h-100" src={props.potionImg}/>
                </figure>
            </div>
            <div className="card-body">
                <p className="text-center">{props.description}</p>

            </div>
            <div className="card-footer d-flex justify-content-center">
                <button className="btn btn-outline-light">See Recipe</button>
            </div>
            
        </div>
    )
}

export default PotionCard
