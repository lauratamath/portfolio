import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-scroll'
import '../css/Header.css'
import cover from '../images/yo3.png'
import port from '../images/titulo2.png'
import '../css/Coverpage.css'

const Options = ({ actualBackground }) => {
  let gradient = ''
  if (actualBackground === '#141414') {
    gradient = 'linear-gradient(180deg, "#141414" 0%, rgba(20,20,20,1) 100%)'
  }

  const background = {
    backgroundColor: actualBackground,
    backgroundImage: gradient,
  }

  return (
    <div className="header" style={background}>
      <div className="horizontalList">
        <Link activeClass="active" to="About" spy smooth offset={-70} duration={500} className="button">
          About
        </Link>
        <Link activeClass="active" to="Proyects" spy smooth offset={-70} duration={500} className="button">
          Proyects
        </Link>
        <Link activeClass="active" to="Proyects" spy smooth offset={-70} duration={500} className="button">
          Contact
        </Link>
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
      setActualBackground('#141414')
    } else {
      setActualBackground('transparent')
    }
  }
  window.addEventListener('scroll', handleScroll)

  return (
    <div>
      <Options actualBackground={actualBackground} />
      <center>
        <div className="nombre">LAURA TAMATH</div>
        <div className="linea" />
        <img src={cover} alt="coverpage" height="480px" className="imagesC" />
        <img src={port} alt="coverpage" />
      </center>
    </div>
  )
}

export default Header
