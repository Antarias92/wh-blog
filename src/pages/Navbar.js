import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({children}) => {
    return (
        <div className="container mt-4 mx-auto bgNav">
           <nav className="navbar navbar-expand-lg bg-dark">
               <div className="container-fluid">
                   <Link style={{color: "#EBB866"}} className="navbar-brand logo" to="/">Warhammer Database</Link>
                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
                               <Link style={{color: "#ebb866"}} className="nav-link" to="/"> Logout </Link>
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