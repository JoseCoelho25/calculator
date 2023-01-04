import React, {useState} from "react";

function Buttons( {firstNumber, result}) {
  const [teste, setTeste]= useState("")

  function handleNumber(e){
    const element = e.currentTarget.value;
    firstNumber(op => op + element)
    setTeste(op => op + element)
  }
    
  function resetNumber(){
    firstNumber("");
    result("")
    setTeste("")
  }

  function handleResult(){
    result(eval(teste));
  }

 function clearLastComputation(){
    firstNumber(teste.slice(0, -1));
    let str = teste.slice(0,-1);
    setTeste(str)
 }
  return (
    <div className="container w-full mx-auto mt-4 ">
      <div className="">
        <div className=" mx-auto grid grid-cols-4 p-4 gap-x-6 gap-y-4 bg-gray-400  text-3xl xl:text-4xl rounded-lg shadow-2xl shadow-indigo-500/50 font-mono">
        <button
          value="C"
          className="rounded-lg text-center bg-blue-700 border-b-4 border-blue-900"
          onClick={clearLastComputation}
          >&#8592;</button>
          <button
          value="%"
          className="rounded-lg text-center bg-blue-700 border-b-4 border-blue-900 text-2xl xl:text-3xl"
          onClick={handleNumber}
          >%</button>
          <button
          value="/"
          className="rounded-lg text-center bg-blue-700 border-b-4 border-blue-900  text-2xl xl:text-3xl"
          onClick={handleNumber}
          >/</button>
          <button
          value="del"
          className="rounded-lg text-center bg-gray-500 text-xl md:text-2xl xl:text-3xl border-b-4 border-gray-700 "
          onClick={resetNumber}
          >DEL</button>
          <button
          value="7"
          className="rounded-lg text-center bg-blue-700 border-b-4 border-blue-900"
          onClick={handleNumber}
          >7</button>
          <button
          value="8"
          className="rounded-lg text-center bg-blue-700 border-b-4 border-blue-900"
          onClick={handleNumber}
          >8</button>
          <button
          value="9"
          className="rounded-lg text-center bg-blue-700 border-b-4 border-blue-900"
          onClick={handleNumber}
          >9</button>
          <button
          value="+"
          className="rounded-lg text-center bg-blue-700 border-b-4 border-blue-900 text-3xl"
          onClick={handleNumber}
          >+</button>
          <button
          value="4"
          className="rounded-lg text-center bg-blue-700 border-b-4 border-blue-900"
          onClick={handleNumber}
          >4</button>
          <button
          value="5"
          className="rounded-lg text-center bg-blue-700 border-b-4 border-blue-900"
          onClick={handleNumber}
          >5</button>
          <button
          value="6"
          className="rounded-lg text-center bg-blue-700 border-b-4 border-blue-900"
          onClick={handleNumber}
          >6</button>
          <button
          value="-"
          className="rounded-lg text-center bg-blue-700 border-b-4 border-blue-900"
          onClick={handleNumber}
          >-</button>
          <button
          value="1"
          className="rounded-lg text-center bg-blue-700 border-b-4 border-blue-900"
          onClick={handleNumber}
          >1</button>
          <button
          value="2"
          className="rounded-lg text-center bg-blue-700 border-b-4 border-blue-900"
          onClick={handleNumber}
          >2</button>
          <button
          value="3"
          className="rounded-lg text-center bg-blue-700 border-b-4 border-blue-900"
          onClick={handleNumber}
          >3</button>
          <button
          value="*"
          className="rounded-lg text-center bg-blue-700 border-b-4 border-blue-900 text-2xl"
          onClick={handleNumber}
          >X</button>
          <button
          value="."
          className="rounded-lg text-center bg-blue-700 border-b-4 border-blue-900 text-3xl"
          onClick={handleNumber}
          >.</button>
          <button
          value="0"
          className="rounded-lg text-center bg-blue-700 border-b-4 border-blue-900"
          onClick={handleNumber}
          >0</button>
          <button
          value="="
          className="rounded-lg text-center bg-red-600 col-span-2 border-b-4 border-red-800"
          onClick={handleResult}
          >=</button>
        </div>
      </div>
    </div>
  );
}

export default Buttons;