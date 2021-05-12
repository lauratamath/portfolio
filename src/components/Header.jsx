import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../css/Header.css'

const Options = ({ actualBackground }) => {
  let gradient = ''
  if (actualBackground === 'black') {
    gradient = 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(20,20,20,1) 100%)'
  }

  const background = {
    backgroundColor: actualBackground,
    backgroundImage: gradient,
  }

  return (
    <div className="header" style={background}>
      <div className="horizontalList">
        <a href="#About" className="button">about me</a>
        <a href="#Proyect" className="button">proyects</a>
        <a href="#Contact" className="button">contact</a>
      </div>
    </div>
  )
}

Options.propTypes = {
  actualBackground: PropTypes.string.isRequired,
}

const Header = () => {
  const [actualBackground, setActualBackground] = useState('transparent')

  const handleScroll = () => {
    if (!(window.pageYOffset === 0)) {
      setActualBackground('black')
    } else {
      setActualBackground('transparent')
    }
  }
  window.addEventListener('scroll', handleScroll)

  return <Options actualBackground={actualBackground} />
}

export default Header
