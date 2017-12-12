import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import timerStore from 'Reducers/'

import App from 'Containers/App'
import style from './style/style.scss'

const store = createStore(timerStore)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app-container')
)
