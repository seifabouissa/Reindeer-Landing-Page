import React from 'react';

const Nav = () =>{
    return(
        <div className="wrapper">
            <div className="nav">
                
                <div className="logo">
                    <h1>
                        <span>Rein<br/>deer</span>
                        <br/>
                        Snow life
                    </h1>
                </div>

                <div className="menu-links">
                    <ul>
                        <li>Home</li>
                        <li>Snow Life</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div className="scrolldown">scroll</div>
            
            </div>
        </div>
    )
}

export default Nav;