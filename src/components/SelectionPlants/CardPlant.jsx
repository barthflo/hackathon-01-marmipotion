import './CardPlant.css';

export default function CardPlant({ image, name, family }) {
  return (
    <figure className="card-plant">
      <img src={image} alt={name} />
      <figcaption>
        <blockquote className="card-name">{name}</blockquote>
        <p className="card-family">{family}</p>
      </figcaption>
    </figure>
  );
}