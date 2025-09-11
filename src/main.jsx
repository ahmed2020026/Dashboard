import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/roboto/400.css';

import { App } from './App'
import { Provider } from 'react-redux'
import { Store } from './redux/Store'
import { BrowserRouter } from 'react-router-dom'
import { ContextOpen } from './hooks/openSideBar'


createRoot(document.getElementById('root')).render(
  <ContextOpen>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ContextOpen>
)
