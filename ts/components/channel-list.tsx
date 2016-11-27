import * as React from 'react'
import Channel from './channel'

class ChannelList extends React.PureComponent<{
  channels: string[],
  changeChannel: Function
  activeChannel: number
},{}>{
  render() {
    return ( 
      <div className="channel-list">
      <h2>Channels</h2>
        {this.props.channels.map((name, i) => <Channel 
          name={name}
          isActive={i === this.props.activeChannel}
          onClick={this.props.changeChannel(i)}
        />)}
      </div>
    )
  }
}

export default ChannelList