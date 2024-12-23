import React, { useRef } from "react";
import { Link,Outlet } from "react-router-dom";
import "./Home.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {

  const launchRef = useRef()

  

  useGSAP(()=>{
    gsap.from(launchRef.current,{
      opacity:0,
      duration:1,
      y:10,
      delay:0.5
    })

  })

  

  return (
    <>
      <div id="page1">
        <img src="https://cdn11.bigcommerce.com/s-fg272t4iw0/images/stencil/500x659/products/2331/2584/C-12338__33568.1557814768.jpg?c=2" alt="" />
        <Link to={'/home/Moreinfo'} style={{textDecoration:'none', fontSize:'larger'}} ref={launchRef}>...Launch</Link>
      </div>
      
      <div id="container">
        <Outlet/>
      </div>    
    </>
  );
};

export default Home;