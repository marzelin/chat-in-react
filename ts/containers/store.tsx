import * as React from 'react'
import ChannelList from '../components/channel-list'
import Messages from '../components/messages'
import AddMessage from '../components/add-message'


interface State {
  channels: [
    {name: string, messages: {author: string, message: string}[]}
  ],
  activeChannel: number
}

class Store extends React.PureComponent<{},State>{
  constructor() {
    super()
    this.changeChannel = this.changeChannel.bind(this)
    this.addMessage = this.addMessage.bind(this)
    this.state = {
      channels: [
        {
          name: 'default',
          messages: [
            {author: 'me', message: 'hello world'}
          ]
        },
        {
          name: 'auxilary',
          messages: [
            {author: 'someone', message: 'hi'}
          ]
        }
      ],
      activeChannel: 0
    }
  }
  changeChannel(index: number) {
    return () => this.setState({
      activeChannel: index
    } as State)
  }
  addMessage(author: string, message: string) {
      const newMessage = {author, message}
      const oldChannels = this.state.channels
      const oldMessages = oldChannels[this.state.activeChannel].messages
      const newMessages = [...oldMessages, newMessage]
      const newChannels = oldChannels.map((ch, i) => i === this.state.activeChannel?
        Object.assign({}, ch, {messages: newMessages}):
        ch
      )
      this.setState({
        channels: newChannels
      } as State)
  }
  render() {
    return (
      <div>
        <ChannelList
          activeChannel={this.state.activeChannel}
          changeChannel={this.changeChannel}
          channels={this.state.channels.map(c => c.name)}
        />
        <div className="messageBox">
          <Messages messages={this.state.channels[this.state.activeChannel].messages}/>
          <AddMessage onClick={this.addMessage}/>
        </div>
      </div>
    )
  }
}

export default Store