import React from "react";
import { Link } from "react-router-dom";

const Misc = () => {
     return (
            <div className="row">
                <div className="col-3">
                    <nav className ="navbar bg-dark">
                        <ul className ="nav navbar-nav mx-auto">
                            <li className ="nav-item">
                                <Link style={{color: "#ebb866"}} className="nav-link navbar-brand h1" to="/fortyKFAQ"> Warhammer 40000 FAQ </Link>
                            </li>
                            <li className ="nav-item">
                                <Link style={{color: "#ebb866"}} className="nav-link navbar-brand h1" to="/aosfaq"> Age of Sigmar FAQ </Link>
                            </li>
                            <li className ="nav-item">
                            <Link style={{color: "#ebb866"}} className="nav-link navbar-brand h1" to="/lore"> Lore </Link>
                            </li>
                            <li className ="nav-item">
                            <Link style={{color: "#ebb866"}} className="nav-link navbar-brand h1" to="/misc"> Misc </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-9">
                   <div className="postContent">
                        <h3 className="question">Can I use any of my Blades of Khorne character models as a Slaughterbound proxy?</h3>
                        <p className="answer">No, unfortunately the Slaughterbound is on a 50mm base and Blades of Khorne characters are on 40mm bases.</p>
                        <p className="category">Category: Misc</p>
                   </div>
                   <div className="postContent">
                        <h3 className="question">What are some good proxies for Poxwalkers?</h3>
                        <p className="answer">Deathwalker Zombies are your best bet as they are the same base size and fit the zombie aesthetic. You also get 20 models in a box instead of 10.</p>
                        <p className="category">Category: Misc</p>
                   </div>
                   <div className="postContent">
                        <h3 className="question">How long does it take for Games Workshop to release a product after pre-orders go live? </h3>
                        <p className="answer">Games Workshop typically releases its products two weeks after pre-orders go live.</p>
                        <p className="category">Category: Misc</p>
                   </div>
                </div>
            </div>
        )    
}

export default Misc;