
import { useEffect, useState } from 'react'
import './App.css'

//****************************************UseEffect hooks************************************** */

function App() {

  const [count, setCount] = useState(0);
  const [Total, setTotal] = useState(0);
  // first => side-effect function
  // second => cleanup function
  // third => comma seperated dependency list

  // variation: 1
  // runs on every render
  // useEffect(() => {
  //   alert("I will run on each render");
  // });

  //variaton: 2
  // that runs on only first render\
  // useEffect(() => {
  //   alert("I will run only first render");
  // }, [])

  //variation: 3
  // useEffect(() => {
  //   alert("I will run every time when count is updated ");
  // }, [count])

  //variation: 4
  // useEffect(() => {
  //   alert("I will run every time when count/total is updated");
  // }, [count, Total]);

  // variation: 5
  //iss baar let's add a cleanup function
  useEffect(() => {
    alert("Count is updated")
    return () => {
      alert("count is unmounted form UI"); z
    }
  }, [count])

  function handleClick() {
    setCount(count + 1);
  }

  function handleClickTotal() {
    setTotal(Total + 1);
  }

  return (
    <>
      <button onClick={handleClick}>
        Count updated
      </button>
      <br />
      count is: {count}
      <br />
      <button onClick={handleClickTotal}>
        Total updated
      </button>
      <br />
      Total is: {Total}
    </>
  )
}

export default App
