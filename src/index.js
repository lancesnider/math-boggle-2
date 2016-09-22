import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import App from './components/App'
import allReducers from './reducers'
import './index.css'
import T from 'i18n-react'
import Texts from './texts'

const store = createStore(allReducers)

ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>
  ,document.getElementById('root')
)
