import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AppContainer } from './components/AppContainer'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<span>...</span>}>
      <BrowserRouter>
        <AppContainer>
          <App />
        </AppContainer>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
