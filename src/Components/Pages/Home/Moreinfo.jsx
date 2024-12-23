import React, { useRef, useState } from "react";
import "./Home.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import data from "./data.json";

const Moreinfo = () => {  

  const imgRef = useRef([])       // [] because array of images from json
  const infoRef = useRef([])
  const {contextSafe} = useGSAP()

///////////////////////////////////////////////////////////////////////////////


  const showData=contextSafe((index)=>{
    gsap.to(infoRef.current[index], {
      opacity: 1,
      duration: 1,
      x: -350,
      delay: 0,
      stagger: 1,
    });

    gsap.to(imgRef.current[index], {
      duration: 1,
      x: 450,
      delay: 0,
      stagger: 1,
      scale:0.8
    });
  })
  

////////////////////////////////////////////////////////////////////////////////


  const hideData = contextSafe((index)=>{            //contextSafe to safe memory usage 
    gsap.to(infoRef.current[index], {
      opacity: 0,
      duration: 1,
      x: 0,
      delay: 0,
      stagger: 1,
    });

    gsap.to(imgRef.current[index], {
      duration: 1,
      x: 0,
      delay: 0,
      stagger: 1,
      scale:1.2
    });
  })
 

//////////////////////////////////////////////////////////////////////////////


const onTop=()=>{
  window.scrollTo(0, 0);
}



  return (
    <div className="container">
      {data.map((value, index) => {
        // console.log(value);

        return (
          <>
          <hr style={{ border: 'none', height: '1px', background: 'linear-gradient(to right, #800000 , black,red,yellow, purple, green)' }} />
          {/* <hr style={{border: '1px solid background: linear-gradient(to right, red, yellow'}}/> */}
            <div className="page2" key={value.model}>
              <div className="info" ref={(el)=>infoRef.current[index]=el} key={value.year}>
                <center>
                  <h1 id="heading">{value.model}</h1>
                  <h2>Description: </h2>

                  <p>Year: {value.year}</p>
                  <p>Engine: {value.engine}</p>
                  <p>Horsepower: {value.horsepower}</p>
                  <p>Torque: {value.torque}</p>
                  <p>0to60: {value.speed}</p>
                  <p>Torque: {value.torque}</p>
                </center>
              </div>
              
              <div className="car" >
                <img src={value.image} alt="" key={value.image} ref={(el)=> (imgRef.current[index] = el)}  onMouseEnter={()=>{showData(index)}} onMouseLeave={()=>{hideData(index)}}/> 
              </div>
            </div>
            <hr style={{ border: 'none', height: '1px', background: 'linear-gradient(to right, #800000 , black,red,yellow, purple, green)' }} />
          </>
        );
      })}
      <div id="bottom" >      
        <button id="toTop" onClick={onTop}>^ <br />To top</button>
      </div>
    </div>
  );
};

export default Moreinfo;
