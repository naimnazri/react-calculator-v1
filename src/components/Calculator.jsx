import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState(""); // Stores user input
  const [result, setResult] = useState(""); // Stores result

  // Handle button clicks
  const handleClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input)); // Evaluate the expression
      // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80">
        {/* Display Section */}
        <div className="mb-4 p-4 bg-gray-100 rounded text-right text-2xl">
          <div className="text-gray-500">{input || "0"}</div>
          <div className="text-black font-bold">{result}</div>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "C", "0", "=", "+"].map((btn) => (
            <button
              key={btn}
              className="p-4 bg-blue-500 text-white text-xl font-bold rounded hover:bg-blue-600"
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
