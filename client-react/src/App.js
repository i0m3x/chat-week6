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
class App extends React.Component { //being
  constructor (props) {
    super(props)
    this.state = {
      messages: [],
      user: "Pete",
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
  render () {
    return (
      <div>
        <Chat messages={this.state.messages} />
      </div>
    )
  }
}
export default App

//now there is a diff btw props and this.state

//passing from child to parent(Chat)