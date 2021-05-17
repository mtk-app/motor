import { useState } from "react";
import { customeValidator } from "./utils/validator";
import { sp, dp, generateMotor } from "./utils/helpers";
import "./App.css";

export default function App() {
  const [motor, updateMotor] = useState("");
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [panas, setPanas] = useState([]);
  const onSubmit = (type) => {
    const newMotor = motor.split("");
    const check = customeValidator(newMotor);
    if (!check) {
      setError(true);
      setMessage("Invalid motor");
      setPanas([]);
    } else {
      setError(false);
      setMessage("");
      setPanas(generateMotor(motor, type));
    }
  };
  const displayPanas = panas.sort().map((p, i) => (
    <div key={p} className="pana-inner">
      <p className="pana">{p}</p>
    </div>
  ));
  return (
    <div className="App">
      <div>
        <label htmlFor="">Enter Motor</label>
        <input
          value={motor}
          onChange={(e) => updateMotor(e.target.value)}
          type="number"
          autoFocus
        />
      </div>
      {error ? (
        <p style={{ color: "red" }}>
          <small>{message}</small>
        </p>
      ) : (
        <span></span>
      )}
      <div className="btn-container">
        <button className="btn" onClick={() => onSubmit(sp)}>
          Generate SP Panas
        </button>
      </div>
      <div className="btn-container">
        <button className="btn" onClick={() => onSubmit(dp)}>
          Generate DP Panas
        </button>
      </div>
      {panas.length > 0 ? (
        <div className="result-text">Result</div>
      ) : (
        <span></span>
      )}
      <div className="pana-container">{displayPanas}</div>
    </div>
  );
}
