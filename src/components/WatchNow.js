import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const WatchNow = () =>{
    return(
        <>
       <div className="watchNow">
           <FaPlayCircle/>
           <a href="#">Watch Now!</a>
       </div>
       <div className="media">
           <ul>
               <li><FaFacebook/></li>
               <li><FaTwitter/></li>
               <li><FaInstagram/></li>
           </ul>
       </div>
       </>
    )
}
export default WatchNow;