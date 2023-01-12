import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import {BsPeople, BsEmojiSmile} from 'react-icons/bs'

import './index.css'

import Messages from '../Messages'

const Chat = () => {
  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState('')

  const userList = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin']
  const randomName = userList[Math.ceil(Math.random() * userList.length) - 1]

  const userColor = ['green', 'red', 'blue', 'yellow', 'orange']
  const randomColor = userColor[Math.ceil(Math.random() * userColor.length) - 1]

  const onPressingKeyDown = event => {
    if (event.key === 'Enter') {
      setMessage(event.target.value)
      const newMessage = {
        id: uuidv4(),
        message,
        color: randomColor,
        name: randomName,
      }
      setMessages(prev => [...prev, newMessage])
    }
  }

  return (
    <div className="app-container">
      <div className="chat-container">
        <div className="chat-header-container">
          <div className="introduction-container">
            <h1 className="introduction-heading">Indroductions</h1>
            <p className="introduction-description">
              This Channel Is For Company Wide Chatter
            </p>
          </div>
          <div className="icon-container">
            <p className="people-count">
              <span className="people-online">3</span> | 100
            </p>
            <BsPeople className="people-icon" />
          </div>
        </div>
        <hr className="line" />
        <ul className="messages-container">
          {messages.map(eachMessage => (
            <Messages key={eachMessage.id} messageDetails={eachMessage} />
          ))}
        </ul>
      </div>
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          onKeyDown={onPressingKeyDown}
        />
        <BsEmojiSmile className="smiley-icon" />
      </div>
    </div>
  )
}

export default Chat
