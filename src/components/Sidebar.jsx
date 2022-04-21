import { Link } from "react-router-dom"

const Sidebar = ({ authenticated, teacher, handleLogOut }) => {
    
    let authenticatedOptions
    if (teacher) {
      authenticatedOptions = (
            <ul className="nav-links">
             <li className="item doc"><Link to="/"><i className="fa-solid fa-house"></i><span>Home</span></Link></li>
             <li className="item doc"><i className="fa-solid fa-user"></i><Link to="/prof"><span>My Profile</span></Link></li>
             <li className="item doc"><i className="fa-solid fa-ellipsis"></i><Link to="/IPP"><span>More</span></Link></li>
             <li className="item"><button className="butt"><Link to="/createpost"><span>Make A Post</span></Link></button></li>
             <li className="item bot"><Link onClick={handleLogOut} to="/"><i className="fa-solid fa-arrow-right-from-bracket"></i><span>Log out</span></Link></li>
            </ul>   
      )
    }
    const publicOptions = (
        <ul className="nav-links"> 
          <li className="item doc"><Link to="/"><i className="fa-solid fa-house"></i><span>Home</span></Link></li>
          <li className="item doc"><Link to="/register"><i className="fa-solid fa-address-card"></i><span>Register</span></Link></li>
          <li className="item doc"><Link to="/login"><i className="fa-solid fa-arrow-right-to-bracket"></i><span>Login</span></Link></li>
          <li className="item doc"><Link to="/IPP"><i className="fa-solid fa-ellipsis"></i><span>More</span></Link></li>
          <li></li>
        </ul>
    )

    return (
       <div className="side-nav"> 
       {authenticated && teacher ? authenticatedOptions : publicOptions}
       </div>  
    )
}

export default Sidebar