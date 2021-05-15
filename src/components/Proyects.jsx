import React from 'react'
import { RViewerTrigger, RViewer } from 'react-viewerjs'
import '../css/About.css'
import '../css/Proyects.css'
import lander from '../images/landerC.png'

function MyComponent() {
  const imagenes = [
    lander,
  ]
  return (
    <div>
      <RViewer imageUrls={imagenes}>
        <div className="hola">
          {imagenes.map((imagen, index) => (
            <RViewerTrigger index={index}>
              <img src={imagen} alt="fgd" />
            </RViewerTrigger>
          ))}
        </div>
      </RViewer>
    </div>
  )
}

export default MyComponent()
