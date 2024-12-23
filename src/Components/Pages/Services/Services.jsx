import React, { useRef } from "react";
import "./Services.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Services = () => {

const services = [
  {
    title: "Engine Repair",
    description: "Comprehensive engine repair and maintenance services.",
  },
  {
    title: "Transmission Service",
    description: "Expert transmission diagnostics and repairs.",
  },
  {
    title: "Brake Service",
    description: "High-quality brake inspections and replacements.",
  },
  {
    title: "Oil Change",
    description:
      "Quick and efficient oil change services to keep your car running smoothly.",
  },
  {
    title: "Tire Services",
    description: "Professional tire installation, rotation, and alignment.",
  },
  {
    title: "Vehicle Order Tracking",
    description: "Track your vehicle order status online with ease.",
  },
  {
    title: "Vehicle Care",
    description:
      "Premium vehicle care services to maintain your car's performance and appearance.",
  },
  {
    title: "Battery Service",
    description: "Reliable battery testing and replacement services.",
  },
  {
    title: "Warranty and Maintenance",
    description:
      "Comprehensive warranty and maintenance plans to protect your vehicle.",
  },
];

let serviceref= useRef([])
let footerref= useRef([])

useGSAP(()=>{
  gsap.from(serviceref.current,{
    opacity:0,
      duration:1,
      x:10,
      delay:0.5,
      stagger:0.2
  })

  gsap.from(footerref.current,{
    opacity:0,
      duration:1,
      y:-10,
      delay:0.5
  })
})

  return (
    <div id="wrap">
      <div className="services-page">
        <h1>Our Services</h1>
        <div className="services-list" >
          {services.map((service, index) => (
            <div key={index} className="service-item" ref={(el)=>serviceref.current[index]=el}>
              <h2>{service.title}</h2> <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <footer className="footer" ref={footerref}>       
        <div className="footer-content">         
          <p>&copy; 2024 SRT Company. All rights reserved.</p>
          <p>Contact Us: some@somecompany.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Services;
