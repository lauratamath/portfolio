import React from 'react'
import PropTypes from 'prop-types'
import '../css/About.css'

const Button = ({ title }) => (
  <button type="button" className="buttonsa">{title}</button>
)
Button.propTypes = {
  title: PropTypes.string,
}

Button.defaultProps = {
  title: 'lenguage',
}

const About = () => (
  <div id="About">
    <div className="container-2">
      <div className="titulo">ABOUT ME</div>
      <div className="about">
        I live in Guatemala and I was born there. I consider myself an
        outgoing, cheerful and communicative person; The activities that
        I like are: dancing, listening to music, doing sports, exercising
        and taking care of myself both physically and mentally. I really
        like coffee (in all its presentations), matcha and mint tea, macarons,
        crepes and tres leches cake.
        <br />
        I have many goals and I am working to
        achieve them. I have worked on different projects, however, the
        languages I dominante better are:
      </div>
      <div className="seccionB">
        <Button title="HTML" text="lenguajes" />
        <Button title="CSS" text="lenguajes" />
        <Button title="C#" text="lenguajes" />
        <Button title="JavaScript" text="lenguajes" />
        <Button title="Java" text="lenguajes" />
        <button type="button" className="buttonu">
          Python
        </button>
      </div>
    </div>
  </div>
)

export default About
