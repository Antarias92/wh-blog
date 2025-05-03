import React from "react";
import { Link } from "react-router-dom";

const AosFAQ = () => {
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
                        <h4 className="question">If a friendly unit is in combat and is armed with a weapon that has Shoot in Combat, can it use the Covering Fire command?</h4>
                        <p className="answer">No, you can only pick units that are not in combat to use ability.</p>
                        <p className="category">Category: aosfaq</p>
                   </div>
                   <div className="postContent">
                        <h4 className="question">If my opponent uses a reaction, I pass on using a reaction, and then my opponent uses a second reaction, could I then use a reaction, or have I missed my chance? </h4>
                        <p className="answer">You could not use another reaction after passing.</p>
                        <p className="category">Category: aosfaq</p>
                   </div>
                   <div className="postContent">
                        <h4 className="question">If a unit has more than one power level and an enemy ability references that unit’s power level, which power level should I use? </h4>
                        <p className="answer">Use whichever power level is higher.</p>
                        <p className="category">Category: aosfaq</p>
                   </div>
                </div>
            </div>
        )    
}

export default AosFAQ;