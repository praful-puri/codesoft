import "./App.css";
import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, result.length-1)); // or you can use directly -1 instead of result.length-1
  };
  
  const calculate = () => {
    try{
      setResult(eval(result));
    }catch(err) {
      setResult("Error")
    }

    
  }
  return (
    <div>
      <div className="container">
        <div>
          <form>
            <input type="text" value={result} />
          </form>
        </div>

        <div className="keypad">
          <button className="highlight" onClick={clear} id="clear">
            Clear
          </button>
          <button className="highlight" onClick={backspace} id="backspace">
            C
          </button>
          <button className="highlight" value="/" onClick={handleClick}>
            &divide;
          </button>
          <button value="7" onClick={handleClick}>
            7
          </button>
          <button value="8" onClick={handleClick}>
            8
          </button>
          <button value="9" onClick={handleClick}>
            9
          </button>
          <button className="highlight" value="*" onClick={handleClick}>
            &times;
          </button>
          <button value="4" onClick={handleClick}>
            4
          </button>
          <button value="5" onClick={handleClick}>
            5
          </button>
          <button value="6" onClick={handleClick}>
            6
          </button>
          <button className="highlight" value="-" onClick={handleClick}>
            &ndash;
          </button>
          <button value="1" onClick={handleClick}>
            1
          </button>
          <button value="2" onClick={handleClick}>
            2
          </button>
          <button value="3" onClick={handleClick}>
            3
          </button>
          <button className="highlight" value="+" onClick={handleClick}>
            +
          </button>
          <button value="0" onClick={handleClick}>
            0
          </button>
          <button className="highlight" value="." onClick={handleClick}>
            .
          </button>
          <button className="highlight" onClick={calculate} id="result">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
