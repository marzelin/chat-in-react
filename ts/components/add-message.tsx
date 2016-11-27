import * as React from 'react'

interface Props {
  onClick: Function
}
interface State {
  author: string
  message: string
  [x: string]: string
}

class AddMessage extends React.PureComponent<Props, State> {
  constructor() {
    super()
    this.handleInput = this.handleInput.bind(this)
    this.onClick = this.onClick.bind(this)
    this.state = {
      author: 'auhtor',
      message: 'message'
    }
  }
  handleInput(e: React.FormEvent<HTMLInputElement>, name: 'author' | 'message') {
    this.setState({
      [name]: e.currentTarget.value
    } as State)
  }
  onClick() {
    this.props.onClick(this.state.author, this.state.message)
    this.setState({
      message: ''
    } as State)
  }
  render() {
    return (
      <div>
        <input type="text" onChange={(e) => this.handleInput(e, 'author')} value={this.state.author}/>
        <input type="text" onChange={(e) => this.handleInput(e, 'message')} value={this.state.message}/>
        <button onClick={this.onClick}>Add Message</button>
      </div>
    )
  }
}

export default AddMessage