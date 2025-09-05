import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

//Step1: Create context
// const UserContext = createContext();
//Step2: wrap all the child inside a provider
//Step3: Pass value

const ThemeContext = createContext();

function App() {

  const [theme, setTheme] = useState('light');
  // const [user, setUser] = useState({ name: "You are hiring" });
  return (
    <>

      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div id='container' style={{ backgroundColor: theme === 'light' ? "beige" : "black" }}>
          <ChildA />
        </div>
      </ThemeContext.Provider>




      {/* <UserContext.Provider value={user}>
        <ChildA />
      </UserContext.Provider> */}
    </>
  )
}

export default App
// export { UserContext }
export { ThemeContext }
