import { render } from 'preact'
import './index.css'

import { Provider } from 'react-redux'
import { store } from './store.js'
import App from './app.jsx'

render(
<Provider store={store}><App/></Provider>
    , document.getElementById('app'))
