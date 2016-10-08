import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import App from './components/App'
import allReducers from './reducers'
import './index.css'
import initialHighScore from './utils/initial-high-score'
// eslint-disable-next-line
import Texts from './texts'

const initialState = {
  gameData: {
    isPlaying: false,
    score: 0,
    clickedTiles: [],
    tileNumbers: [],
    equation: [],
    usedPatterns: [],
    feedback: "",
    highScore: initialHighScore()
  }
}

const store = createStore(allReducers, initialState)

store.subscribe(() => {
  localStorage.setItem('mathBoggleHighScore', store.getState().gameData.highScore)
})

ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>,
  document.getElementById('root')
)
