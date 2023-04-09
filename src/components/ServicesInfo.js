import React from 'react'
import content from 'utils/content.json'

const ServicesInfo = () => {
  const Services = content.services.map((service) => {
    return (
      <div key={service.id} className="services-info-wrapper">
        <img className="services-info-img" src={service.image} alt="Interiorism" />
        <div className="services-info-content">
          <h2>{service.title}</h2>
          <p>{service.info}</p>
        </div>
      </div>
    )
  })
  return (
    <section className="main-wrapper">
      <div className="services-wrapper">
        {Services}
      </div>
    </section>
  )
}

export default ServicesInfo