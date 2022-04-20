import { Link } from "react-router-dom"

const Sidebar = ({ authenticated, teacher }) => {
    
    let authenticatedOptions
    if (teacher) {
      authenticatedOptions = (
            <ul className="nav-links">
             <li className="item doc"><i className="fa-solid fa-house"></i><Link to="/">Home</Link></li>
             <li className="item doc"><i className="fa-solid fa-user"></i><Link to="/prof">Profile</Link></li>
             <li className="item doc"><i className="fa-solid fa-ellipsis"></i><Link to="/IPP">More</Link></li>
             <li className="item"><button className="butt"><Link to="/createpost">Make A Post</Link></button></li>
            </ul>   
      )
    }
    const publicOptions = (
        <nav > 
        </nav>
    )

    return (
       <div className="side-nav"> 
       {authenticated && teacher ? authenticatedOptions : publicOptions}
       </div>  
    )
}

export default Sidebar