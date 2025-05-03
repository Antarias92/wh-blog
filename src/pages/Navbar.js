import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/authContext";

const Navbar = ({children}) => {
    const {currentUser, logout } = useContext(AuthContext);

    return (
        <div className="container mt-4 mx-auto bgNav">
           <nav className="navbar navbar-expand-lg bg-dark">
               <div className="container-fluid">
                   <Link style={{color: "#0096FF"}} className="navbar-brand logo" to="/home">Warhammer Database</Link>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon bg-white"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarNav">
                       <ul className="navbar-nav mx-auto mb-lg-0 justify-content-center">
                           <li class="nav-item menu-item">
                               <Link style={{color: "#0096FF"}} className="nav-link" to="/home"> Home </Link>
                           </li>
                           <li className="nav-item menu-item">
                               <Link style={{color: "#0096FF"}} className="nav-link" to="/additem"> Add Item </Link>
                           </li>
                           <li className="nav-item menu-item">
                               <Link style={{color: "#0096FF"}} className="nav-link" to="/contact"> Contact </Link>
                           </li>
                       </ul>
                       <ul className="navbar-nav mx-auto mb-lg-0 justify-content-right">
                            <li className="nav-item menu-item">
                               <span style={{color: "#0096FF"}} className="nav-link">{currentUser?.username}</span>
                           </li>
                           <li className="nav-item menu-item">
                               {/*<Link style={{color: "#0096FF"}} className="nav-link" to="/wh-blog" onClick={logout}> Logout </Link>*/}
                               {currentUser ? <Link style={{color: "#0096FF"}} className="nav-link" to="/wh-blog">Logout</Link> : <Link style={{color: "#0096FF"}} className="nav-link" to="/wh-blog">Login</Link>}
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