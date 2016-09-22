import React, {Component} from 'react'

class MainMenu extends Component {
  render() {
    return (
      <button
        onClick={() => this.props.clickPlay()}
        className="button play green"
        disabled={this.props.isPlaying}
      >Play</button>
    )
  }
}

export default MainMenu