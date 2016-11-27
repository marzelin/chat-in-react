import * as React from 'react'

class Message extends React.PureComponent<{
  author: string
  message: string
}, {}> {
  render() {
    const {author, message} = this.props
    return (
      <p>
        {author}: {message}
      </p>
    )
  }
}

export default Message