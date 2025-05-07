import React from "react";
import { Link } from "react-router-dom";

const Lore = () => {
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
                        <h4 className="question">Which Space Marine legions sided with Horus during the Horus Heresy? </h4>
                        <p className="answer">Emperor’s Children, Iron Warriors, Night Lords, World Eaters, Death Guard, Thousand Sons, and Word Bearers all joined the Sons of Horus during the Heresy.</p>
                        <p className="category">Category: Lore</p>
                        <p className="category">Posted By: Admin</p>
                   </div>
                   <div className="postContent">
                        <h4 className="question">Who amongst the Primarchs was first rediscovered by the Emperor of Mankind?</h4>
                        <p className="answer">Officially, Horus Lupercal was the first Primarch to be rediscovered. However, if Alpharius is to be believed, he was the first rediscovered Primarch.</p>
                        <p className="category">Category: Lore</p>
                        <p className="category">Posted By: Admin</p>
                   </div>
                   <div className="postContent">
                        <h4 className="question">Which Primarchs died during the Horus Heresy?</h4>
                        <p className="answer">Ferrus Manus, Konrad Curze, Roboute Guilliman, Sanguinius, and Horus Lupercal all died during the Horus Heresy. It is also believed that Alpharius is dead but there is no confirmation.</p>
                        <p className="category">Category: Lore</p>
                        <p className="category">Posted By: Admin</p>
                   </div>
                </div>
            </div>
        )    
}

export default Lore;