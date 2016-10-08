import {connect} from 'react-redux'
import HighScore from '../components/HighScore'

function mapStateToProps(state) {
  return {
    highScore: state.gameData.highScore
  }
}

export default connect(mapStateToProps)(HighScore)
