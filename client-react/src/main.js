/* globals prompt fetch */
const { Chat } = require('./components')
const yo = require('yo-yo')
const io = require('socket.io-client')
const socket = io()

const nickname = prompt('Enter your nickname:')

socket.on('chat message', msg => { //set up in constructor or reactmethod did mount-best practice
  console.log('Got a message:', msg)
  updateState('messages', state.messages.concat(msg))
})

const sendForm = document.getElementById('send-message')
const messageTextField = document.getElementById('message-text')
sendForm.onsubmit = evt => {
  evt.preventDefault()
  const message = { text: messageTextField.value, nick: nickname, room: state.room, date: new Date() } //this one is diff b/c the way we get it
  socket.emit('chat message', message)
}

//when do you fetch the initial messages? componentdidMount
const state = {
  room: '',
  messages: []
}

function updateState (key, value) {
  state[key] = value
  yo.update(el, Chat(state.messages, state.room, updateState)) //constructor
}

const el = Chat(state.messages, state.room, updateState)
const chatContainer = document.getElementById('chat-container')
chatContainer.appendChild(el) //render

// Get initial list of messages
fetch('/messages')
  .then(response => response.json())
  .then(data => {
    console.log('fetched data from server')
    updateState('messages', data)
  })

  //submitForm is a handler

//JSX have a form - with a submit event handler

//putting into a object

//nickname is a prop

//make  a message obj

//setting up submit handler look up how to make a form in react

//