import React from "react";

function Buttons() {
    function getValue(event){
        const element = event.currentTarget.value;
        console.log(element);
    }

  return (
    <div className="container w-screen mx-auto">
      <div className="m-2">
        <div className="w-1/2 mx-auto grid grid-cols-4 p-4 gap-x-2 gap-y-2 bg-gray-400 text-4xl">
          <input
            type="text"
            value="7"
            className="rounded-lg text-center bg-blue-700 h-20 "
            onClick={getValue}
          />
          <input
            type="text"
            value="8"
            className="rounded-lg text-center bg-blue-700"
            onClick={getValue}
          />
          <input
            type="text"
            value="9"
            className="rounded-lg text-center bg-blue-700"
            onClick={getValue}
          />
          <input
            type="text"
            value="DEL"
            className="rounded-lg text-center bg-gray-700 text-2xl"
            onClick={getValue}
          />
          <input
            type="text"
            value="4"
            className="rounded-lg text-center bg-blue-700 h-20"
            onClick={getValue}
          />
          <input
            type="text"
            value="5"
            className="rounded-lg text-center bg-blue-700"
            onClick={getValue}
          />
          <input
            type="text"
            value="6"
            className="rounded-lg text-center bg-blue-700"
            onClick={getValue}
          />
          <input
            type="text"
            value="+"
            className="rounded-lg text-center bg-blue-700"
            onClick={getValue}
          />
          <input
            type="text"
            value="1"
            className="rounded-lg text-center bg-blue-700 h-20"
            onClick={getValue}
          />
          <input
            type="text"
            value="2"
            className="rounded-lg text-center bg-blue-700"
            onClick={getValue}
          />
          <input
            type="text"
            value="3"
            className="rounded-lg text-center bg-blue-700"
            onClick={getValue}
          />
          <input
            type="text"
            value="-"
            className="rounded-lg text-center bg-blue-700"
            onClick={getValue}
          />
          <input
            type="text"
            value="."
            className="rounded-lg text-center bg-blue-700 h-20"
            onClick={getValue}
          />
          <input
            type="text"
            value="0"
            className="rounded-lg text-center bg-blue-700"
            onClick={getValue}
          />
          <input
            type="text"
            value="/"
            className="rounded-lg text-center bg-blue-700"
            onClick={getValue}
          />
          <input
            type="text"
            value="*"
            className="rounded-lg text-center bg-blue-700"
            onClick={getValue}
          />
        </div>
      </div>
    </div>
  );
}

export default Buttons;