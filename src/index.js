/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import About from './components/About'
import LightboxExample from './components/Proyects'
import Contact from './components/Contact'

const App = () => (
  <div>
    <Header />
    <About />
    <LightboxExample />
    <Contact />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
