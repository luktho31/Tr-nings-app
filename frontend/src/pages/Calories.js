import { useState } from "react";

export default function Calories() {
  const [calories, setCalories] = useState("");

  const handleInput = (e) => setCalories(e.target.value);

  return (
    <div>
      <h1>Calorie Tracker</h1>
      <input
        type="number"
        placeholder="Calories eaten"
        value={calories}
        onChange={handleInput}
      />
      {calories && <p>Calories today: {calories}</p>}
    </div>
  );
}
