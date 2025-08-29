import React from 'react'

const Card = (props) => {
  return (
    <>
      <input type="text" onChange={(e) => props.setName(e.target.value)} />
      <p>Name state variable ki value isside card {props.title} : {props.name}</p>
    </>
  )
}

export default Card