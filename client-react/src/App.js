import React from 'react'

function Message (props) {
  return <li>{props.message.text}</li>
}
function Chat (props) {
    console.log(props)
  return (
    <ul>
      {props.messages.map((msg, index) => <Message key={index} message={msg} />)}
    </ul>
  )
}
function AddRoom (props) {
  console.log(props)
  return (
    <div id="add-room">

       <select id="room-select">
         <option value="" >Select a value </option>
         {props.rooms.map(room => <option value={room} >{room} </option>)}
       </select>

    </div>
  )
}


class App extends React.Component { //being
  constructor (props) {
    super(props)
    this.state = {
      messages: [],
      user: "Pete",
      rooms: ["roomOne", "roomTwo"],
      addRoomText: "",
    }
    //console.log(this.state)
  }
  componentDidMount () {
    fetch('/messages') //change it to socket io
      .then(response => response.json())
      .then(messages => {
        //console.log(messages)
        this.setState({
            messages: messages
        }, () => console.log(this.state))
      })
  }
  handleAddRoom = (event) => { //react always looks for 'handle'
    this.setState({room: room.concat(event.target.value)})
    console.log("handleAddRoom is working")
  }
  render () {
    return (
      <div>
        <AddRoom rooms={this.state.rooms} addRoomText={this.state.addRoomText}/>
        <Chat messages={this.state.messages} />
      </div>
    )
  }
}
export default App

//now there is a diff btw props and this.state

//passing from child to parent(Chat)