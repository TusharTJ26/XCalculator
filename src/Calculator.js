import { useState } from "react";
import "./Calculator.css";
export default function Calculator() {
  const buttons = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "C",
    "0",
    "=",
    "/",
  ];
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const calculateExpression = () => {
    try {
      const result = eval(input);
      setResult(result);
      //   return eval(input); // e.g., "4 + 5 * (6 - 2)"
    } catch (error) {
      return "Invalid expression";
    }
  };

  //   const handleInput = (value)=>{
  //     if(value == "="){

  //     }
  //   }
  const handleClick = (value) => {
    if (value == "=") {
      calculateExpression();
    } else if (value == "C") {
      setInput("");
      setResult(0);
    } else {
      setInput((prev) => prev + value);
    }
  };
  return (
    <>
      <h1>React Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {result != "0" ? <div>{result}</div> : null}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "1.25rem 37.5rem",
          gap: "0.625rem",
          justifyContent: "center",
        }}
      >
        {buttons.map((btn) => {
          return (
            <button
              key={btn}
              className="calculatorButton"
              onClick={() => handleClick(btn)}
              //   {btn=="="? type="submit"}
              //   type={btn === "=" ? "submit" : "button"}
            >
              {btn}
            </button>
          );
        })}
        {/* <button className="calculatorButton" onClick={() => handleClick(7)}>
          7
        </button>
        <button className="calculatorButton">8</button>
        <button className="calculatorButton">9</button>
        <button className="calculatorButton">+</button> */}
      </div>
    </>
  );
}
