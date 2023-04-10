/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import content from 'utils/content.json'
import { PLACEHOLDER_URL } from 'utils/urls'

const Footer = () => {
  const [selectedOption, setSelectedOption] = useState('')
  const [textInput, setTextInput] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const navigate = useNavigate()

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

    try {
      const response = await fetch(PLACEHOLDER_URL, options)
      const data = await response.json()
      if (data.id) {
        console.log('data', data)
        navigate('/login')
      }
    } catch (error) {
      console.error(error.stack)
    }
  }

  const FooterLinksSection = content.footer.map((item) => {
    return (
      <div key={item.title}>
        <h3>{item.title}</h3>
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
        className="form"
        onSubmit={handleSubmit}>
        <div className="footer-select-wrapper">
          <h3>{item.title}</h3>
          <label
            className="screen-reader-only"
            htmlFor="select-input">
            Choose an alternative
          </label>
          <select
            id="select-input"
            name="select-input"
            onChange={(e) => setSelectedOption(e.target.value)}>
            <option value={null} className="grey">(Donec rutrum)</option>
            {item.alternatives.map((alternative) => (
              <option
                key={alternative.text}
                value={alternative.text}>
                {alternative.text}
              </option>
            ))}
          </select>
        </div>
        <label
          className="screen-reader-only"
          htmlFor="text-input">
          Write your text
        </label>
        <input
          type="text"
          id="text-input"
          name="text-input"
          onChange={(e) => setTextInput(e.target.value)} />

        <div className="footer-check-submit-wrapper">
          <div className="check-wrapper">
            <label
              className="screen-reader-only"
              htmlFor="checkbox-input">
              Proin eget tortor
            </label>
            <input
              className="user-check-input"
              type="checkbox"
              id="checkbox-input"
              name="checkbox-input"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)} />
            <p>Proin eget tortor</p>
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
    <>
      <footer className="outer-wrapper gradient-footer">
        <div className="footer-wrapper">
          <div className="footer-links">
            {FooterLinksSection}
          </div>
          <div className="form-wrapper">
            {FooterForm}
          </div>
        </div>
      </footer>
      <section>
        <div className="copyright-wrapper">
          <p className="copyright">© ACME 2023</p>
        </div>
      </section>
    </>
  )
}

export default Footer

