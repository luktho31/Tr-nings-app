import { useState } from "react";

export default function BMI() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    const h = height / 100;
    setBmi((weight / (h * h)).toFixed(2));
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="number"
        placeholder="Height (cm)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={calculateBMI}>Calculate</button>
      {bmi && <p>Your BMI: {bmi}</p>}
    </div>
  );
}
