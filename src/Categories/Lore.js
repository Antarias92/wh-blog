import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Lore = ({children}) => {

    const [posts, setPosts] = useState([])

    const cat = useLocation().search;

    useEffect(() =>{
        const fetchData = async ()=>{
            try{
                const res = await axios.get(`/posts${cat}`);
                setPosts(res.data)
            }catch(err){
                console.log(err);
            }
        };
        fetchData();
    }, [cat]);

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
               <div className="posts">
                    {posts.map((posts) =>(
                        <div className="post" key={posts.id}>
                            <div className="content">
                                
                                <h2>{posts.title}</h2>
                                <p>{posts.cat}</p>
                                <p>{posts.description}</p>
                            </div>
                        </div>
                    ))}
               </div>
            </div>
        </div>

    )    
}

export default Lore;