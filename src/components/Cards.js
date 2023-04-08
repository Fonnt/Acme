import React from 'react'
import content from 'utils/content.json'

const Cards = () => {
  // This maps json and creates a card for each content
  // We can then mount it in return section
  const CardsInfo = content.cards.map((card) => {
    return (
      <div key={card.id} className="card">
        <h2>{card.title}</h2>
        <p>{card.info}</p>
        <div>
          <a className="centered" href="#">
            <p>{card.linkText}</p>
            <img src={content.utils.arrow_black} alt="" />
          </a>
        </div>
      </div>
    )
  })

  return (
    <section className="main-wrapper">
      <div className="cards-wrapper">
        {CardsInfo}
      </div>
    </section>
  )
}

export default Cards