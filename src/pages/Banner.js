import React, { useContext } from "react";
import { Link } from "react-router-dom";

const Banner = ({children}) => {
    return (
        <div className="container mt-4 mx-auto bgNav">
           <nav className="navbar navbar-expand-lg bg-dark">
               <div className="container-fluid justify-content-center">
                   
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon bg-white"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarNav">
                       <ul className="navbar-nav mx-auto mb-lg-0 justify-content-center">
                        <li className="nav-item">
                        <Link style={{color: "#0096FF"}} className="navbar-brand logo" id="banner" to="/">WELCOME TO THE WARHAMMER DATABASE</Link>
                        </li>
                       </ul>
                   </div>
               </div>
           </nav>
           {children}
        </div>   
    )    
}

export default Banner;