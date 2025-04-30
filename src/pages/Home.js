
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = ({children}) => {

    /*const [posts, setPosts] = useState([])

    useEffect(() =>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get("/posts")
                setPosts(res.data)
            }catch(err){
                console.log(err);
            }
        };
        fetchData();
    }, []);*/

    return (
        <div className="row">
            <div className="col-3">
                <nav className ="navbar bg-dark">
                    <ul className ="nav navbar-nav mx-auto">
                        <li className ="nav-item">
                            <Link style={{color: "#ebb866"}} className="nav-link navbar-brand h1" to="/40000faq"> Warhammer 40000 FAQ </Link>
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
                <div className="container">
                    The Web Content in detail.
                </div>
                <div className ="container">
                    <p>Welcome to the Warhammer Database. </p>
                </div>
            </div>
        </div>

    )    
}

export default Home;