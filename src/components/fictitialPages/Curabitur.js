import React from 'react'
import content from 'utils/content.json'

const Curabitur = () => {
  return (
    <section className="main-wrapper">
      <div className="services-info-wrapper">
        <div className="services-info-content">
          <h1>{content.services[0].title}</h1>
          <p>
            {content.services[0].info}
          </p>
          <img
            className="services-info-img"
            src={content.services[0].image}
            alt="interior" />
        </div>
      </div>
    </section>
  )
}

export default Curabitur