import React from 'react'
import content from 'utils/content.json'

const Hero = () => {
  return (
    <section className="main-wrapper">
      <div className="hero-wrapper">
        <img className="hero-img" src={content.hero[0].image} alt="Building" />
        <div className="hero-gradient" />
        <div className="hero-content">
          <h1>{content.hero[0].title}</h1>
          <p>{content.hero[0].info}</p>
        </div>
      </div>
    </section>
  )
}

export default Hero