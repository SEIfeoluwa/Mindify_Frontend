import { Link } from "react-router-dom"

const Sidebar = () => {
    
    return (
        <div className="side-nav">
            <ul className="nav-links">
             <li className="item logo">Mindify</li>
             <li className="item doc"><i className="fa-solid fa-house"></i><Link to="/home">Home</Link></li>
             <li className="item doc"><i className="fa-solid fa-user"></i><Link to="/prof">Profile</Link></li>
             <li className="item doc"><i className="fa-solid fa-ellipsis"></i><Link to="/IPP">More</Link></li>
             <li className="item"><button className="butt"><Link to="/createpost">Make A Post</Link></button></li>
         </ul> 
        </div>
    )
}

export default Sidebar