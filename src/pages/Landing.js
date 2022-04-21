import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
    <div className="landing-container"> WELCOME TO
     <div className="landing-title"> MINDIFY</div>
     </div>
     <div className="link-wrapper">
        <Link to="/home" className="item">Home</Link>
        <Link to="/register" className="item">Register</Link>
        <Link to="/login" className="item">Login</Link>
     </div>
     </div>
  )
}

export default Landing