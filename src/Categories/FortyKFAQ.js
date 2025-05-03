import React from "react";
import { Link } from "react-router-dom";


const FortyKFAQ = () => {

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
                    <h3 className="question">If led by a Lord on Juggernaut in the Daemonkin detachment, will Bloodcrushers gain access to the Blessings of Khorne? </h3>
                    <p className="answer">Yes, while the enhancement that allows a Lord on Juggernaut to lead Bloodcrushers will replace his World Eaters keyword, the Blessings of Khorne ability will remain on his datasheet. This means the entire unit will be able to access the Blessings of Khorne regardless of their keywords.</p>
                    <p className="category">Category: 40000faq</p>
               </div>
               <div className="postContent">
                    <h3 className="question">If I am using the Auric Champions Detachment, when selecting an enemy unit for the Assemblage of Might detachment rule, can I select a unit that is embarked within a transport? </h3>
                    <p className="answer">No, you cannot target units within a transport with any abilities or rules.</p>
                    <p className="category">Category: 40000faq</p>
               </div>
               <div className="postContent">
                    <h3 className="question">Can I use the Monolith’s Eternity gate ability in the first battle round to reposition a unit that is on the battlefield? </h3>
                    <p className="answer">Only if the mission rules you are using do not explicit state that you cannot.</p>
                    <p className="category">Category: 40000faq</p>
               </div>
            </div>
        </div>

    )    
}

export default FortyKFAQ;