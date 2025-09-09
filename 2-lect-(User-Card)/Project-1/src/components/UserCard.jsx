import img from './img.jpg'
import "./UserCard.css"


const UserCard = () => {
  return (
    <div className='user-container'>
      <p id='user-id'>Hello Navin </p>
      <img id='user-img' src={img} alt='pick' />
      <p id='user-desc'>Description</p>
    </div>
  )
}

export default UserCard