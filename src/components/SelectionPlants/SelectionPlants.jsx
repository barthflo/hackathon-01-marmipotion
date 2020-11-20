import React from 'react';
import CardPlant from './CardPlant';
import './SelectionPlants.css';
import {GiCauldron} from 'react-icons/gi';

export default function SelectionPlants({ plants }) {
    return(
        <div className="selection-plants">
            <h2><span>P</span>lants <span>O</span>f <span>T</span>he <span>M</span>oment</h2>
            <GiCauldron size={"1.5em"} className="my-3 potions-icons"/>
            <div className="container-plants">
                {plants.sort((a, b) => 0.5 - Math.random()).slice(0,6).map((plant) => (
                    <CardPlant 
                        key={plant.common_name}
                        image={plant.image_url}
                        name={plant.scientific_name}
                        family={plant.family}
                    />
                ))}
            </div>
        </div>
    );
}