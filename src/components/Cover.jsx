/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react'
import cover from '../images/yo3.png'
import port from '../images/titulo2.png'
import '../css/Coverpage.css'

const Preview = () => {
  const [isFirstTime, setFistTime] = useState(true)
  const video = React.createRef()

  const showImage = () => {
    video.current.load()
  }
  useEffect(() => {
    if (isFirstTime) {
      video?.current.play()
      setFistTime(false)
    }
  }, [isFirstTime])

  const handleScroll = () => {
    if (window.pageYOffset === 0) {
      setFistTime(true)
    } else if (window.pageYOffset >= 300) {
      video.current.load()
    }
  }
  window.addEventListener('scroll', handleScroll)

  return (
    <div className="section">
      <div className="grid">
        <center>
          <img src={cover} alt="coverpage" height="480px" className="imagesC" />
          <img src={port} alt="coverpage" />
          <video muted poster={cover} alt="FMA Banner" className="banner" onEnded={showImage} ref={video}>
            <source src={cover} type="video/mp4" />
          </video>
        </center>
      </div>
    </div>
  )
}

export default Preview
