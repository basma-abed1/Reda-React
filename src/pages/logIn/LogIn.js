import React from 'react'

import './login.css';
import { Link } from 'react-router-dom';
function LogIn() {
  return (
   <div className="wrapper">
  <form className="form-signin">
    <h2 className="form-signin-heading">Please login</h2>
    <input
      type="text"
      className="form-control"
      name="username"
      placeholder="Email Address"
      required=""
      autofocus=""
    />
    <input
      type="password"
      className="form-control"
      name="password"
      placeholder="Password"
      required=""
    />
    <label className="checkbox">
      <input
        type="checkbox"
        defaultValue="remember-me"
        id="rememberMe"
        name="rememberMe"
      />{" "}
      Remember me
    </label>
    <Link to= '/'>
    <button className="btn btn-lg btn-primary btn-block" type="submit">
      Login
    </button>
    </Link>
  </form>
</div>

  )
}

export default LogIn