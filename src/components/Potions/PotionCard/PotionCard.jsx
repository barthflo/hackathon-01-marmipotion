import './PotionCard.css';
import {useState} from 'react';
import {Collapse} from 'reactstrap';

function PotionCard(props) {
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
            <div className="card-body">
                <p className="text-center">{props.description}</p>

            </div>
            <div className="card-footer d-flex justify-content-center flex-column">
                <button onClick={toggle}className="btn btn-outline-light">See Recipe</button>
                <Collapse isOpen={isOpen}>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus illum mollitia nemo quam incidunt amet beatae. Reprehenderit et ad fugiat, quos aspernatur, nostrum dolorum tenetur deleniti dolorem voluptatibus, eius iure.</p>
                </div>
                </Collapse>
            </div>
            
        </div>
    )
}

export default PotionCard
