import './CardPlant.css';
import {Fade} from 'react-reveal';

export default function CardPlant({ image, name, family }) {
  return (
    <figure className="card-plant">
      <Fade bottom cascade duration={1000}>
      <img src={image} alt={name} />
      <figcaption>
        <blockquote className="card-name">{name}</blockquote>
        <p className="card-family">{family}</p>
      </figcaption>
      </Fade>
    </figure>
  );
}