import React from 'react';
import './MessageInput.css';
import store from '../store';
import {setTypingValue} from '../actions';

const MessageInput = ({value}) => {
  const handleChange = (e) =>{
    store.dispatch(setTypingValue(e.target.value))
  }
  return (
    <form className="Message">
      <input
      className="Message__input"
      onChange={handleChange}
      value={value}
      placeholder="write a message"/>
    </form>
  )
}

export default MessageInput;
