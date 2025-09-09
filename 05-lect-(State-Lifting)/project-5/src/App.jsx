import Card from './components/Card'
import './App.css'
import { useState } from 'react'


// **************Topic => state lifting ********************

function App() {

  // create state
  // manage state 
  // change state
  //  Sabhi child me state sync karayenge

  const [name, setName] = useState('');
  return (
    <>
      <Card title="card1" name={name} setName={setName}></Card>
      <Card title="card2" name={name} setName={setName}></Card>
      {/* <p>I am inside parent component and change value of name is {name}</p> */}
    </>
  )
}

export default App
