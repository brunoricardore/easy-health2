import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AppContainer } from './components/AppContainer'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContainer>
        <App />
      </AppContainer>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
