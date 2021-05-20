import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'
import '../css/About.css'
import '../css/Proyects.css'
import chat from '../images/chat.jpeg'
import chatp from '../images/chatC.jpeg'
import homero from '../images/homero.JPG'
import homerop from '../images/homeri.png'
import juego from '../images/HuntingCovidians.jpg'
import lander from '../images/landerC.png'

const forLG = [
  chat, chatp, homero, juego, lander,
]

export default class LightboxExample extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  render() {
    const { photoIndex, isOpen } = this.state

    return (
      <div id="Proyects">
        <div className="container-3">
          <div className="titulo2">PROYECTS</div>
          <div className="textoI">
            <font color="#818080">
              press the first photo and scroll through the lightbox
            </font>
          </div>
          <div className="grid-2">
            <button type="button" className="botonp" onClick={() => this.setState({ isOpen: true })}>
              <img src={chatp} id="link" alt="proyectoJS" width="334px" />
            </button>
            <button type="button" className="botonp" onClick={() => this.setState({ isOpen: true })}>
              <img src={homerop} id="link" alt="proyectoCss" width="334px" />
            </button>
            {isOpen && (
              <Lightbox
                mainSrc={forLG[photoIndex]}
                nextSrc={forLG[(photoIndex + 1) % forLG.length]}
                prevSrc={forLG[(photoIndex + forLG.length - 1) % forLG.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() => this.setState({
                  photoIndex: (photoIndex + forLG.length - 1) % forLG.length,
                })}
                onMoveNextRequest={() => this.setState({
                  photoIndex: (photoIndex + 1) % forLG.length,
                })}
              />
            )}
            <div className="textblock">
              Chat made only with JavaScript, in which all
              the members of the class talked, because it was connected to
              a server. In this you could see a preview of the images they send.
              <br />
              <br />
              <center>
                <a id="link" href="https://github.com/lauratamath/lab05_web">view code on GitHub</a>
              </center>
            </div>
            <div className="textblock">
              Homer Simpson drawing made with CSS only.
              <br />
              <br />
              <center>
                <a id="link" href="https://github.com/lauratamath/lab04_web">view code on GitHub</a>
                <br />
                <br />
                <a id="link" href="https://codepen.io/lauratamath/pen/bGBEoeQ">view code on CodePen</a>
              </center>
            </div>
          </div>

          <div className="grid-2">
            <button type="button" className="botonp" onClick={() => this.setState({ isOpen: true })}>
              <img src={juego} id="link" alt="proyectoJS" width="334px" />

              {isOpen && (
              <Lightbox
                mainSrc={forLG[photoIndex]}
                nextSrc={forLG[(photoIndex + 1) % forLG.length]}
                prevSrc={forLG[(photoIndex + forLG.length - 1) % forLG.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() => this.setState({
                  photoIndex: (photoIndex + forLG.length - 1) % forLG.length,
                })}
                onMoveNextRequest={() => this.setState({
                  photoIndex: (photoIndex + 1) % forLG.length,
                })}
              />
              )}
            </button>
            <button type="button" className="botonp" onClick={() => this.setState({ isOpen: true })}>
              <img src={lander} id="link" alt="proyectoJS" width="334px" />

              {isOpen && (
              <Lightbox
                mainSrc={forLG[photoIndex]}
                nextSrc={forLG[(photoIndex + 1) % forLG.length]}
                prevSrc={forLG[(photoIndex + forLG.length - 1) % forLG.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() => this.setState({
                  photoIndex: (photoIndex + forLG.length - 1) % forLG.length,
                })}
                onMoveNextRequest={() => this.setState({
                  photoIndex: (photoIndex + 1) % forLG.length,
                })}
              />
              )}
            </button>
            <div className="textblock">
              Game made in unity, in which default assets were used. The objective is to
              catch all the citizens who are
              on the street, all this to prevent Covid-19 from continuing to spread.
              <br />
              <br />
              <center>
                <a id="link" href="https://github.com/lauratamath/HuntingCovidians">view code on GitHub</a>
                <br />
                <br />
                <a id="link" href="https://lauratamath.itch.io/huntingcovidians">view gameplay & dowload</a>
              </center>
            </div>
            <div className="textblock">
              Music player, which has different functionalities. But I worked on
              the design of this one, which is made with React.
              <br />
              <br />
              <center>
                <a id="link" href="https://github.com/lauratamath/ReproductorMusical">view code on GitHub</a>
                <br />
                <br />
                <a id="link" href="https://youtu.be/SV4QLkGM2Sg">how does it work?</a>
              </center>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
