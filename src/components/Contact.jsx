import React from 'react'
import '../css/About.css'
import foto from '../images/yo4.png'
import git from '../images/gith.png'
import gmail from '../images/gmail.png'
import link from '../images/linkedin.png'
import fiverr from '../images/fiverr.png'

const Contact = () => (
  <div id="Contact">
    <div className="container-2">
      <div className="titulo2">CONTACT</div>
      <img src={foto} alt="coverpage" width="134px" className="image-4" />
      <div className="section-5 about">
        I like working on frontend and I am open to any job opportunity,
        personally I prefer remote work, but in the same way, if you like
        to contact me, I would be delighted.
      </div>
      <center>
        <div className="section-6">
          <a href="https://github.com/lauratamath">
            <img src={git} id="link" alt="github" width="50px" />
          </a>
          <a href="https://www.linkedin.com/in/lauratamath/">
            <img src={link} id="link" alt="github" width="50px" />
          </a>
          <a href="https://www.fiverr.com/lauratamath?up_rollout=true">
            <img src={fiverr} id="link" alt="fiverr" width="50px" />
          </a>
          <a href="mailto:lauratamath@gmail.com">
            <img src={gmail} id="link" alt="github" width="50px" />
          </a>
        </div>
        <div className="textoP">
          <font color="#9e9e9e">
            press us!
          </font>
        </div>
      </center>
    </div>
  </div>
)

export default Contact
