
import { useEffect, useState, useRef } from 'react'
import './App.css'

//**************************useRef Hook********************************

function App() {
  // const [count, setCount] = useState(0);
  // let val = useRef(0);

  // let btnRef = useRef();

  // function handleClick() {
  //   val.current = val.current + 1;
  //   console.log("Value of val is: ", val.current);
  //   setCount(count + 1)
  // }

  // function changeColor() {
  //   btnRef.current.style.background = "red";
  // }

  // useEffect(() => {
  //   console.log("I am render again");
  // })



  const [time, setTime] = useState(0);

  let timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
  }
  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function resetTimer() {
    stopTimer();
    setTime(0);

  }

  return (
    <div>

      <h1>StopWatch:{time} seconds</h1>
      <button onClick={startTimer}>
        Start
      </button>
      <br /><br />
      <button onClick={stopTimer}>
        Stop
      </button>
      <br /> <br />
      <button onClick={resetTimer}>
        Reset
      </button>



      {/* <button
        ref={btnRef}
        onClick={handleClick}>Increment</button>
      <br />
      <br />

      <button onClick={changeColor}>
        Change color of f1st button
      </button>
      <div>
        Count: {count}
      </div> */}
    </div>
  )
}

export default App
