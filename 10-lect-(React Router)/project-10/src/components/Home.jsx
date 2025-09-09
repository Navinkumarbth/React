import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate('/About')
  }
  return (
    <div>
      Home page
      <button onClick={handleClick}>
        Move to abour page
      </button>
    </div>

  )
}

export default Home