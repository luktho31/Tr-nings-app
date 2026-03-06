import ExerciseCard from "../components/ExerciseCard";
import exercises from "../data/exercises";

export default function Exercises() {
  return (
    <div>
      <h1>Exercises</h1>
      {exercises.map((ex) => (
        <ExerciseCard
          key={ex.id}
          name={ex.name}
          image={ex.image}
          description={ex.description}
        />
      ))}
    </div>
  );
}
