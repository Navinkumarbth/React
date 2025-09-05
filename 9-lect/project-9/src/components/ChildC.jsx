import React, { useContext } from 'react'
// import { UserContext } from '../App'
import { ThemeContext } from '../App'

const ChildC = () => {
  // const user = useContext(UserContext);


  const { theme, setTheme } = useContext(ThemeContext);
  function toggleTheme() {
    if (theme == 'light')
      setTheme('dark')
    else
      setTheme('light')
  }
  return (
    <div>
      {/* data: {user.name} */}

      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  )
}

export default ChildC