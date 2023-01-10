import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);

  const covertToRoman = (number) => {
    let result = "";

    const roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };

    for (let key in roman) {
      while (number >= roman[key]) {
        result += key;
        number -= roman[key];
      }
    }

    setResult(result);
  };

  useEffect(() => {
    if (isNaN(value) || value > 3000 || value < 0) {
      setIsError(true);
    } else {
      setIsError(false);
    }

    covertToRoman(value);
  }, [value]);

  console.log(value);
  return (
    <div className="App">
      <section className="container">
        <h1>Decimal to ROMAN</h1>
        <p>Enter your decimal number and magic will happens</p>
        <form>
          <input
            type="text"
            placeholder="Enter your decimal number"
            onChange={(e) => setValue(e.target.value)}
            className={isError && "input-error"}
          />
          <div className={isError && "error"}>
            {isError ? "Your number must be integer and lower than 3000." : ""}
          </div>
        </form>
        <h2 className="result">{isError ? "Fail" : result}</h2>
      </section>
    </div>
  );
}

export default App;
