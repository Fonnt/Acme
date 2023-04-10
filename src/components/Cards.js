import React from 'react'
import { Link } from 'react-router-dom'
import content from 'utils/content.json'

const Cards = () => {
  // This maps .json and creates a card for each content
  // We can then mount it in return section and render it
  const CardsInfo = content.cards.map((card) => {
    return (
      <div key={card.id} className="card">
        <h2>{card.title}</h2>
        <p>{card.info}</p>
        <div>
          <Link to="/fake-page" className="centered">
            <p>{card.linkText}</p>
            <img src={content.utils.arrow_black} alt="" />
          </Link>
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