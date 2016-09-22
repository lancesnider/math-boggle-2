import React, {Component} from 'react'
import T from 'i18n-react'

class MainMenu extends Component {
  render() {
    return (
      <T.button
        text="menu.play"
        onClick={() => this.props.clickPlay()}
        className="button play green"
        disabled={this.props.isPlaying}
      />
    )
  }
}

export default MainMenu
