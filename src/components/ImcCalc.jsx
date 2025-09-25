import "./ImcCalc.css";
import { useState } from "react";
import Button from "./Button.jsx";
import React from "react";

const ImcCalc = ({ calcImc }) => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const clearForm = (e) => {
    e.preventDefault();
    setWeight("");
    setHeight("");
  };

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "");
  };

  const handleHeightChange = (e) => {
    const updateValue = validDigits(e.target.value);
    setHeight(updateValue);
  };

  const handleWeightChange = (e) => {
    const updateValue = validDigits(e.target.value);
    setWeight(updateValue);
  };

  return (
    <div>
      <div>
        <form id="imc-form">
          <h1>Calculadora React IMC</h1>

          <div className="form-inputs">
            <div className="form-control">
              <label htmlFor="height">Altura:</label>
              <input
                type="text"
                name="height"
                id="height"
                placeholder="1,70"
                onChange={handleHeightChange}
                value={height}
              />

              <label htmlFor="weight">Peso:</label>
              <input
                type="text"
                name="weight"
                id="weight"
                placeholder="70.5"
                onChange={handleWeightChange}
                value={weight}
              />
            </div>
          </div>

          <div className="action-control">
            <Button
              id="calc-btn"
              text="calcular"
              action={(e) => calcImc(e, height, weight)}
            />
            <Button id="clear-btn" text="limpar" action={clearForm} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImcCalc;
