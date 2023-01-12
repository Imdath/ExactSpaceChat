import {useState} from 'react'

import './index.css'

const Messages = props => {
  const [likeCount, setLikeCount] = useState(0)

  const {messageDetails} = props
  const {message, name, color} = messageDetails
  const firstLetter = name.slice(0, 1)
  const now = new Date().toLocaleTimeString()

  const onIncrement = () => {
    setLikeCount(prev => prev + 1)
  }

  return (
    <li className="list-container">
      <div className={`${color} letter-container`}>
        <p className="letter">{firstLetter}</p>
      </div>
      <div className="name-and-message-container">
        <div className="name-container">
          <p className="name">{name}</p>
          <p className="time">{now}</p>
        </div>
        <div className="individual-message-container">
          <p className="individual-messages">{message}</p>
        </div>
      </div>
      <div className="button-container">
        <button type="button" className="like" onClick={onIncrement}>
          Like
        </button>
        <p className="like-count">{likeCount}</p>
      </div>
    </li>
  )
}

export default Messages
