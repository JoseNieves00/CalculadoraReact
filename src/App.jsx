import { useState } from 'react';
import './App.css';

const App = () => {
  const [dsp, setResult] = useState('');

  const presionar = (e) => {
    setResult(dsp.concat(e.target.name));
  };

  const clean = () => {
    setResult('');
  };

  const borrar = () => {
    setResult(dsp.slice(0, dsp.length - 1));
  };

  const calculate = () => {
    try {
      setResult(eval(dsp).toString());
    } catch (err) {
      setResult('Error');
    }
  };

  return (
    <>
      <div className="container">
        <form>
          <input type="text" value={dsp}></input>
        </form>

        <div className="keypad">
          <button className="highlight" onClick={clean} id="clean">
            Clear
          </button>
          <button className="highlight" onClick={borrar} id="borrar">
            ←
          </button>
          <button className="highlight" name="/" onClick={presionar}>
            /
          </button>
          <button className="highlight" name="*" onClick={presionar}>
            *
          </button>
          <button name="7" onClick={presionar}>
            7
          </button>
          <button name="8" onClick={presionar}>
            8
          </button>
          <button name="9" onClick={presionar}>
            9
          </button>

          <button className="highlight" name="-" onClick={presionar}>
            -
          </button>
          <button name="4" onClick={presionar}>
            4
          </button>
          <button name="5" onClick={presionar}>
            5
          </button>
          <button name="6" onClick={presionar}>
            6
          </button>
          <button className="highlight" name="+" onClick={presionar}>
            +
          </button>

          <button name="1" onClick={presionar}>
            1
          </button>
          <button name="2" onClick={presionar}>
            2
          </button>
          <button name="3" onClick={presionar}>
            3
          </button>
          <button name="." onClick={presionar}>
            .
          </button>

          <button name="0" onClick={presionar}>
            0
          </button>

          <button className="highlight" onClick={calculate} id="result">
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
