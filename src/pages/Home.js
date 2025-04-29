import React from "react";
import { Link } from "react-router-dom";

const Home = ({children}) => {
    return (
        <div className="row vertNav">
            <div className="col-3">
                <nav className ="navbar bg-dark">
                    <ul className ="nav navbar-nav mx-auto">
                        <li className ="nav-item">
                            <Link style={{color: "#ebb866"}} className="nav-link" to="/Category1"> Category1 </Link>
                        </li>
                        <li className ="nav-item">
                            <a className ="nav-link text-white navbar-brand h1" href="#"> Category 2 </a>
                        </li>
                        <li className ="nav-item">
                            <a className ="nav-link text-white" href="#"> Category 3 </a>
                        </li>
                        <li className ="nav-item">
                            <a className ="nav-link text-white" href="#"> Category 4 </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="col-9">
                <div className="container">
                    The Web Content in detail.
                </div>
                <div className ="container">
                    <p> The vertical menu can place the left or right side of the web pages. But the default vertical menu placed on the left side. </p>
                </div>
            </div>
        </div>

    )    
}

export default Home;