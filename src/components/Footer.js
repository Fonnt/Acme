/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import content from 'utils/content.json'
import { PLACEHOLDER_URL } from 'utils/urls'

const Footer = () => {
  const [selectedOption, setSelectedOption] = useState('')
  const [textInput, setTextInput] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const handleSubmit = async (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        selectedOption,
        textInput,
        isChecked
      })
    }

    const response = await fetch(PLACEHOLDER_URL, options)
    const data = await response.json()
    console.log('data', data)
  }

  const FooterLinksSection = content.footer.map((item) => {
    return (
      <div key={item.title}>
        <h4>{item.title}</h4>
        <ul className="footer-ul">
          {item.links.map((link) => (
            <li key={link.text}><Link to={link.link_to}>{link.text}</Link></li>
          ))}
        </ul>
      </div>
    )
  })

  const FooterForm = content.footer_form.map((item) => {
    return (
      <form
        key={item.title}
        className="footer-form"
        onSubmit={handleSubmit}>
        <div className="footer-select-wrapper">
          <h4>{item.title}</h4>
          <label htmlFor="select-input" />
          <select
            id="select-input"
            name="select-input"
            onChange={(e) => setSelectedOption(e.target.value)}>
            {item.alternatives.map((alternative) => (
              <option
                key={alternative.text}
                value={alternative.text}>
                {alternative.text}
              </option>
            ))}
          </select>
        </div>
        <label htmlFor="text-input" />
        <input
          type="text"
          id="text-input"
          name="text-input"
          onChange={(e) => setTextInput(e.target.value)} />
        <div className="footer-check-submit-wrapper">
          <div className="check-wrapper">
            <input
              className="user-check-input"
              type="checkbox"
              id="checkbox-input"
              name="checkbox-input"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.value)} />
            <label
              htmlFor="checkbox-input">
              Proin eget tortor
            </label>
          </div>
          <div>
            <button
              className="action-btn"
              type="submit">
              Curabi
            </button>
          </div>
        </div>
      </form>
    )
  })

  return (
    <footer className="outer-wrapper gradient-footer">
      <div className="footer-wrapper">
        <div className="footer-links">
          {FooterLinksSection}
        </div>
        <div className="footer-form-wrapper">
          {FooterForm}
        </div>
      </div>
    </footer>
  )
}

export default Footer

