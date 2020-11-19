import './PotionCard.css';

function PotionCard() {
    return (
        <div className = "potion-card card mb-4 p-4">
            <div className="card-header d-flex flex-column align-items-center ">
                <h3>Love me tender</h3>
                <figure className="mt-4">
                    <img className="w-100 h-100" src="https://i.pinimg.com/564x/20/07/65/2007659e3bc27affa1df4d36823aa079.jpg"/>
                </figure>
            </div>
            <div className="card-body">
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde ex architecto tempora assumenda? Aperiam harum odit, consectetur quod adipisci consequatur? Neque ipsam, debitis illo praesentium architecto voluptate assumenda temporibus.</p>

            </div>
            <div className="card-footer d-flex justify-content-center">
                <button className="btn btn-outline-light">See Recipe</button>
            </div>
            
        </div>
    )
}

export default PotionCard
