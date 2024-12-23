import React, { useRef } from "react";
import './Navbar.css'
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar =()=>{

    const leftRef = useRef()
    

    useGSAP(()=>{
        gsap.from(leftRef.current,{
            opacity:0,
            duration:0.5,
            y:10,
            delay:1.5
        })
    })

    useGSAP(()=>{
        gsap.from("li",{
            opacity:0,
            duration:0.2,
            y:10,
            delay:2,
            stagger:0.4,
        })
    })

    useGSAP(()=>{
        gsap.from("nav",{
            opacity:0,
            duration:0.5,
            y:10,
            delay:1
        })
    })


    return(
        <nav >            
            <div id="left" >
                <img src="https://www.pngmart.com/files/13/Dodge-Challenger-SRT-Hellcat-PNG-Transparent-Image.png" alt="" ref={leftRef}/>
            </div>
            <div id="right">
                <li ><Link to='/' >Home</Link></li> 
                <li ><Link to='/services'>Services</Link></li> 
                {/* <li ><Link to='/about'>About</Link></li> */}
                <li ><Link to='/users'>Users</Link></li>
            </div>            
        </nav>
    )
}
export default Navbar