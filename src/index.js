import React from 'react'
import ReactDOM from 'react-dom'
import { hydrate } from 'react-emotion'
import App from './App'

export default App

if (typeof window !== 'undefined' && window.hydrateStyleIds != null) {
  hydrate(window.hydrateStyleIds)
}

if (typeof document !== 'undefined') {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = (Comp) => {
    renderMethod(<Comp />, document.getElementById('root'))
  }
  render(App)
}
