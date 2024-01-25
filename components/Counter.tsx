"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(false); // Set the initial value of 'message' to true

  function resetCounter() {
    setCount(0);
  }

  function toggleMessage() {
    setMessage(!message);
  }

  return (
    <div style={{ display: "flex", left: "90px", top: "20px" }}>
      <div style={{ display: "flex", left: "90px", top: "20px" }}>
        <p>Has hecho click {count} veces</p>
        <button onClick={() => setCount(count + 10)}>👆</button>
      </div>
      <div style={{ display: "flex", left: "90px", top: "20px" }}>
        <button onClick={resetCounter}>Reset</button>
      </div>
      <div style={{ display: "flex", left: "90px", top: "20px" }}>
        <button onClick={toggleMessage}>{!message ? "Mostar mensaje " : "Ocultar Mensaje "}</button>
      </div>
      {
        message && <p>  ¡Hola! Soy un mensaje</p>
      }
    </div>
  );
};

export default Counter;
