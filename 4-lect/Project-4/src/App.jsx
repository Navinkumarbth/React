
import './App.css'
import Card from './components/card.jsx'
import Button from './components/Button.jsx'
import React, { useState } from 'react'



function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <Button handleClick={handleClick} text="Click me">
        <h1>{count}</h1>
      </Button>

      {/* <Card name="User password">
        <h1>Best course web development</h1>
        <p>I am learn fast and i will always consistency in thi course.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, assumenda?</p>
      </Card>
      <Card >
        <h1>Hello</h1>
      </Card> */}
    </>
  )
}

export default App
