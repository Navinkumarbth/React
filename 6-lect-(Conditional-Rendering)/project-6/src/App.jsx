
import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';


//**********Topic => conditional rendering *****************

function App() {

  const [isLoggedIn, setLoggedIn] = useState(true);

  if (!isLoggedIn) {
    return (
      <LoginBtn />
    )
  }

  return (
    <div>
      <h2>Hello Guys </h2>
      <div>
        {isLoggedIn && <LogoutBtn />}
      </div>
    </div>
  )



  //Using ternary operator =>

  // return (
  //   <div>
  //     {isLoggedin ? <LogoutBtn /> : <LoginBtn />}
  //   </div>
  // )


  //Using if-else =>

  // if (isLoggedin) {
  //   return (
  //     <LogoutBtn></LogoutBtn>
  //   )
  // }
  // else {
  //   return (
  //     <LoginBtn />
  //   )
  // }

}

export default App
