import React, { useState, useEffect } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  // Caso 1: useEffect sin segundo parámetro
  useEffect(() => {
    console.log("Effect runs after every render");
  });

  // Caso 2: useEffect con array vacío
  useEffect(() => {
    console.log("Effect runs only once after the first render");
  }, []); // Se ejecuta 1 sola vez

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default MyComponent;