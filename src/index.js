/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import Preview from './components/Cover'
import Header from './components/Header'

const App = () => (
  <div>
    <Header />
    <Preview />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
