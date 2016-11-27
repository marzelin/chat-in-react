import * as React from 'react'
import Message from './message'

class Messages extends React.PureComponent<{
  messages: {author: string, message: string}[]
},{}> {
  render() {
    const {messages} = this.props
    return (
      <div>
        <h2>Messages</h2>
        {messages.map(m => <Message author={m.author} message={m.message}/>)}
      </div>
    )
  }
}

export default Messages