import './PotionCard.css';
import {useState, useContext} from 'react';
import {Collapse} from 'reactstrap';
import {PlantsContext} from '../../../App';


function PotionCard(props) {
    const {plants} = useContext(PlantsContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggle =() => setIsOpen(!isOpen);

    return (
        <div className = "potion-card card mb-4 p-4">
            <div className="card-header d-flex flex-column align-items-center ">
                <h3 className="text-center">{props.potionName}</h3>
                <figure className="mt-4 p-3 p-sm-0">
                    <img className="w-100 h-100" src={props.potionImg}/>
                </figure>
            </div>
            <div className="card-body d-flex justify-content-center align-items-sm-center">
                <p className="text-center">{props.description}</p>

            </div>
            <div className="card-footer d-flex justify-content-center flex-column px-0">
                <button onClick={toggle}className="btn btn-outline-light">See Recipe</button>
                <Collapse isOpen={isOpen}>
                
                    {plants.length !== 0 && 
                        props.recipe.map(item => 
                        <div className="mt-4 recipe-container">
                            <p className="text-center mb-0 text-capitalize">{item}</p> 
                            <p className="text-center text-capitalize"> {plants[Math.floor(Math.random()*plants.length)].common_name}</p> 
                        </div>
                    )}
        
                </Collapse>
            </div>
            
        </div>
    )
}

export default PotionCard
