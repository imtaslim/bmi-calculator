import { useMemo, useState } from "react";
import "./App.css";

const DEFAULT_WEIGHT = 75;
const DEFAULT_HEIGHT = 182;

export default function BMI() {
  const [height, setHeight] = useState(DEFAULT_HEIGHT);
  const [weight, setWeight] = useState(DEFAULT_WEIGHT);

  function onHeightChange(event) {
    const inputHeight = event.target.value;
    setHeight(inputHeight);
  }

  function onWeightChange(event) {
    const inputWeight = event.target.value;
    setWeight(inputWeight);
  }
  
  const output = useMemo(() => {
    const calculatedHeight = height / 100;
    return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
  }, [weight, height]);
  
  const comment = useMemo(() => {
    if (output < 18.5) {
      return "You are underweight, please consume nutritious food."
    } else if (output >= 18.5 && output <= 24.9) {
      return "Congratulations, you are healthy."
    } else if (output >= 25 && output <= 29.9) {
      return "You are overweight, don't consume junk food, start a diet."
    } else if (output > 29.9) {
      return "You are obese, you have a high chance of dibetis or high BP, consult a dietician fast."
    }
  }, [output]);
 
  
  return (
    <main>
      <h1>BMI CALCULATOR</h1>
      <div className="input-section">
        <p class="slider-output">Weight: {weight} kg</p>
        <input
          className="input-slider"
          onChange={onWeightChange}
          type="range"
          value={weight}
          step="1"
          min="20"
          max="220"
        />
        <p class="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          onChange={onHeightChange}
          type="range"
          value={height}
          step="1"
          min="100"
          max="220"
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
        <p>{comment}</p>
      </div>
    </main>
  );
}
