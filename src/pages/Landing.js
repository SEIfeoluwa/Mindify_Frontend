import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
    <div className="landing-container"> WELCOME TO
     <div className="landing-title"> MINDIFY</div>
     </div>
     <div className="link-wrapper">
        <Link to="/posts" className="item1">Posts</Link>
        <Link to="/register" className="item1">Register</Link>
        <Link to="/login" className="item1">Login</Link>
     </div>
     </div>
  )
}

export default Landing