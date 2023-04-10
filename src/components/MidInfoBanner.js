import React from 'react'
import { useNavigate } from 'react-router-dom'
import content from 'utils/content.json'

const MidInfoBanner = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate('/fake-page')
  }
  return (
    <section className="outer-wrapper purple">
      <div className="mid-info-wrapper">
        <h2 className="mid-info-h2">{content.mid_info.title}</h2>
        <p className="mid-info-p">{content.mid_info.info}</p>
        <button type="button" onClick={handleOnClick} className="action-btn">Curabitur non</button>
      </div>
    </section>
  )
}

export default MidInfoBanner