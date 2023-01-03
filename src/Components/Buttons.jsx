import React, {useState} from "react";

function Buttons( {firstNumber, result}) {
  const [teste, setTeste]= useState("")

  function handleNumber(e){
    const element = e.currentTarget.value;
    firstNumber(op => op + element)
    setTeste(op => op + element)
  }
    
  function resetNumber(e){
    firstNumber("0");
    result("")
  }

  function handleResult(){
    result(eval(teste));
  }

 
  return (
    <div className="container w-screen mx-auto">
      <div className="m-2">
        <div className="w-1/2 mx-auto grid grid-cols-4 p-4 gap-x-2 gap-y-2 bg-gray-400 text-4xl">
          <button
          value="7"
          className="rounded-lg text-center bg-blue-700"
          onClick={handleNumber}
          >7</button>
          <button
          value="8"
          className="rounded-lg text-center bg-blue-700"
          onClick={handleNumber}
          >8</button>
          <button
          value="9"
          className="rounded-lg text-center bg-blue-700"
          onClick={handleNumber}
          >9</button>
          <button
          value="del"
          className="rounded-lg text-center bg-blue-700"
          onClick={resetNumber}
          >DEL</button>
          <button
          value="4"
          className="rounded-lg text-center bg-blue-700"
          onClick={handleNumber}
          >4</button>
          <button
          value="5"
          className="rounded-lg text-center bg-blue-700"
          onClick={handleNumber}
          >5</button>
          <button
          value="6"
          className="rounded-lg text-center bg-blue-700"
          onClick={handleNumber}
          >6</button>
          <button
          value="+"
          className="rounded-lg text-center bg-blue-700"
          onClick={handleNumber}
          >+</button>
          <button
          value="1"
          className="rounded-lg text-center bg-blue-700"
          onClick={handleNumber}
          >1</button>
          <button
          value="2"
          className="rounded-lg text-center bg-blue-700"
          onClick={handleNumber}
          >2</button>
          <button
          value="3"
          className="rounded-lg text-center bg-blue-700"
          onClick={handleNumber}
          >3</button>
          <button
          value="-"
          className="rounded-lg text-center bg-blue-700"
          onClick={handleNumber}
          >-</button>
          <button
          value="."
          className="rounded-lg text-center bg-blue-700"
          onClick={handleNumber}
          >.</button>
          <button
          value="0"
          className="rounded-lg text-center bg-blue-700"
          onClick={handleNumber}
          >0</button>
          <button
          value="*"
          className="rounded-lg text-center bg-blue-700"
          onClick={handleNumber}
          >*</button>
          <button
          value="/"
          className="rounded-lg text-center bg-blue-700"
          onClick={handleNumber}
          >/</button>
          <button
          value="="
          className="rounded-lg text-center bg-blue-700"
          onClick={handleResult}
          >=</button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;