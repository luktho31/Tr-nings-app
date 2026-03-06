export default function ExerciseCard({ name, image, description }) {
  return (
    <div className="exercise-card">
      <img src={image} alt={name} style={{ width: "200px" }} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}
