import React from "react";

function Display({firstNumber, result}) {
  return (
    <div className="  mt-2">
      <div className="container mx-auto h-16  bg-blue-900 text-end pt-1 pr-5 rounded-lg text-white text-xl shadow-lg">
        <div>
        {firstNumber === "" ? "0" : firstNumber}
        </div>
        <div>{result}</div>
        
      </div>
    </div>
  );
}

export default Display;