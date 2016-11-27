import * as React from 'react'

class Channel extends React.PureComponent<{
  name: string
  isActive: boolean,
  onClick: () => void
}, {}> {
  render() {
    const {name, onClick} = this.props
    return (
      <p onClick={onClick}>
        {name}
      </p>
    )
  }
}

export default Channel