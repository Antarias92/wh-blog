import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/authContext";

const Navbar = ({children}) => {
    const {currentUser, logout } = useContext(AuthContext);

    return (
        <div className="container mt-4 mx-auto bgNav">
           <nav className="navbar navbar-expand-lg bg-dark">
               <div className="container-fluid">
                   <Link style={{color: "#EBB866"}} className="navbar-brand logo" to="/">Warhammer Database</Link>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon bg-white"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarNav">
                       <ul className="navbar-nav mx-auto mb-lg-0">
                           <li class="nav-item menu-item">
                               <Link style={{color: "#ebb866"}} className="nav-link" to="/"> Home </Link>
                           </li>
                           <li className="nav-item menu-item">
                               <Link style={{color: "#ebb866"}} className="nav-link" to="/add"> Add Item </Link>
                           </li>
                           <li className="nav-item menu-item">
                               <span style={{color: "#ebb866"}} className="nav-link">{currentUser?.username}</span>
                           </li>
                           <li className="nav-item menu-item">
                               <Link style={{color: "#ebb866"}} className="nav-link" to="/login" onClick={logout}> Logout </Link>
                               {/*{currentUser ? <span style={{color: "#ebb866"}} className="nav-link">Logout</span> : <Link style={{color: "#ebb866"}} className="nav-link" to="/login">Login</Link>}*/}
                           </li>
                       </ul>
                   </div>
               </div>
           </nav>
           {children}
        </div>   
    )    
}

export default Navbar;