/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

const Login = () => {
  return (

    <section className="login-wrapper">
      <div className="login-form-wrapper">
        <form className="form card" action="https://jsonplaceholder.typicode.com/posts" method="POST">
          <h1>LOGIN</h1>
          <label htmlFor="email" className="screen-reader-only">email</label>
          <input type="email" name="email" id="email" placeholder="Email" />
          <label htmlFor="password" className="screen-reader-only">password</label>
          <input type="password" name="password" id="password" placeholder="Password" />
          <button className="submit" type="submit">Submit</button>
        </form>
      </div>
    </section>

  )
}

export default Login