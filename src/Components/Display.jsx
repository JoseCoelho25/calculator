import React from "react";

function Display({firstNumber, result}) {
  return (
    <div className=" px-2 mt-2">
      <div className="container mx-auto h-16 w-1/2 bg-blue-900 text-end pt-1 pr-5 rounded-lg text-white text-xl">
        <div>{firstNumber}</div>
        <div>{result}</div>
        
      </div>
    </div>
  );
}

export default Display;