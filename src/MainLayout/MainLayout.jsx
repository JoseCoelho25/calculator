import React, { useState } from "react"; 
import Display from "../Components/Display";
import Buttons from "../Components/Buttons";

function MainLayout() {
  const [firstNumber, setFirstNumber] = useState("");
  const [result, setResult] = useState("");

  console.log(result)
  
  
  const [value, setValue] = useState("Light-mode");
  const [color, setColor] = useState ("bg-blue-400");
  const [bgColor, setBgColor] = useState ("bg-indigo-500");
  const [text, setText] = useState("text-black");

  function toggle(event) {
    const element = document.getElementById("bg"); 
    element.classList.toggle("text-white");
    valueChange(event);
  }
  function valueChange(event) {
    if (event.currentTarget.value === "Light-mode") {
      setValue("Dark-mode");
      setColor("bg-red-400")
      setBgColor("bg-purple-900")
      setText("text-white")
    } else {
      setValue("Light-mode");
      setColor("bg-blue-400")
      setBgColor("bg-indigo-500")
      setText("text-black")
    }
  }

  
  return (
    <div>
      <div className={`container ${bgColor} ${text} mx-auto w-screen h-screen`} id="bg">
        <div className="w-1/2 mx-auto justify-center flex h-10 mt-24 px-2">
          <div className="w-full pt-3 font-bold text-2xl">Calc</div>
          <input
            type="button"
            value={value}
            className={`${color} w-24 h-full rounded-full px-2`}
            onClick={toggle}
          />
        </div>
        <Display 
        firstNumber={firstNumber}
        result={result}
        />
        <Buttons 
        firstNumber={setFirstNumber}
        result={setResult}
        />
      </div>
    </div>
  );
}

export default MainLayout;