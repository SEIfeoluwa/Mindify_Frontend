import { Link } from "react-router-dom"

const Header = ({ authenticated, user, handleLogOut }) => {

    let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav className="header">
        <h3>Welcome {user.email}!</h3>
        <Link to="/">Home</Link>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </nav>
    )
  }

  const publicOptions = (
    <nav className="header">
      <Link to="/" className="item">Home</Link>
      <Link to="/register" className="item">Register</Link>
      <Link to="/login" className="item">Login</Link>
    </nav>
  )


    return (
        <div>
            <header>
            {authenticated && user ? authenticatedOptions : publicOptions}
            </header>
        </div>
    )
}

export default Header