import { useState } from 'react'

import './App.css'

//******************EVENT HANDLING*******************

function App() {

  function handleClick() {
    alert('I am clicked')
  }

  function handleMouseOver() {
    alert('You are over on the Mouse Over')
  }

  function handleInputChange(e) {
    // console.log('Input value changed');
    console.log("Value till now: ", e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form submitted");
  }
  return (
    <>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>

      {/* <p onMouseOver={handleMouseOver} style={{ border: "1px solid black", width: "7rem" }}>Mouse Over</p>
      <button onClick={handleClick}>Click Me</button> */}
    </>
  )
}

export default App
