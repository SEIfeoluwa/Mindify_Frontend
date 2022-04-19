import { Link } from "react-router-dom"

const Header = ({ authenticated, teacher, handleLogOut }) => {

    let authenticatedOptions
  if (teacher) {
    authenticatedOptions = (
      <nav className="header">
        {/* <h3>Welcome {teacher.username}!</h3> */}
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
            {authenticated && teacher ? authenticatedOptions : publicOptions}
            </header>
        </div>
    )
}

export default Header