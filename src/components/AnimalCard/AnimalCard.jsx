import "./styles.css";

function AnimalCard({ animalData }) {
  return (
    <div className="animal-card-wrapper">
      <h2>{animalData.name}</h2>
      <p>{animalData.species}</p>
      <p>{animalData.role}</p>
      <img src={animalData.image} />
    </div>
  );
}

export default AnimalCard;

// const props = {
//   animalName:
//   species:
//   role:
//   animalImg:
// }