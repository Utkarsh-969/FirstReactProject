import React, { useEffect, useRef, useState } from "react";
import "./styles.css";
import { FormValue } from "./useForms";
import { useFetch } from "./useFetch";

export default function App() {
  const [values, handleChnge] = FormValue({ email: "", password: "" });
  const [counter, setCounter] = useState(0);

  let dataValue = useFetch(`http://numbersapi.com/${counter}/trivia`);

  let focusValue = useRef();

 let useFocus = ()=> {
  focusValue.current.focus();
}

  useEffect(() => {
    /*
    const mouseChange = (e) => {
      console.log("Hello");
    };
    window.addEventListener("mousemove", mouseChange);
    return () => {
      window.removeEventListener("mousemove", mouseChange);
    };
    */
  }, [values]);

  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Click Me
        </button>
      </div>
      <div>{counter}</div>
      <div>
        <input type="text" name="email" ref = {focusValue} onChange={handleChnge}></input>
      </div>
      <div>
        <input type="password" name="password" onChange={handleChnge}></input>
      </div>
      <p>{JSON.stringify(values)}</p>
      <div>
        <p>{dataValue === undefined ? "loading !!" : dataValue.data}</p>
      </div>
          <button onClick={useFocus}>
            Focus
            </button>

    </div>

    

  );
}
