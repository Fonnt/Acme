import React from 'react'
import content from 'utils/content.json'

const ServicesInfo = () => {
  const Services = content.services.map((service) => {
    // This function takes a number (in this case we use the id from .json)
    // and checks if its EVEN, returning TRUE if the
    // remainder of the operation is 0.
    // We can then use it to conditional render a className
    // and display the picture to the right or to the left
    const isEven = (number) => number % 2 === 0;
    const className = isEven(service.id) ? 'services-info-wrapper right' : 'services-info-wrapper'

    return (
      <div key={service.id} className={className}>
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