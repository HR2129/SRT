import React, { useRef, useState } from 'react'
import './User.css'
import { Link } from 'react-router-dom'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Contact = () => {

  const formRef = useRef()
  const infoRef = useRef()
   const {contextSafe} = useGSAP()

  useGSAP(()=>{
    gsap.from(formRef.current, {
      opacity: 0,
      duration: 0.5,
      y: 10,
      delay: 0.5,
    });

    gsap.from(infoRef.current, {
      opacity: 0,
      duration: 1.2,
      y: 10,
      delay: 1,
    });
  })




  const [data, setData] = useState({
    Username:'',
    Password:''
  })

  let {Username, Password} = data

  let onchange =(e)=>{
      console.log(e.target);
      let {name, value}= e.target
      let info = e.target.value
      setData({...info,[name]:value})
  }

  let onSubmit =(e)=>{
    e.preventDefault()
    setData({
      Username:'',
      Password:''
    })
  }

  return (
    <>
    <div id="contain">
      <div id="box">
        <div id="leftt" ref={infoRef}>
          <fieldset>
            <legend>All Your Favorite Dodge Brand Vehicles In One Place</legend>
            <h2>My account makes it easy to organize everything you need to find your Dodge Brand vehicle, bringing you closer to your next big adventure.</h2>
            <center>
            <h3>1.) Set and save your search parameters</h3>
            <h3>2.) Create a personalized inventory of vehicles</h3>
            <h3>3.) Build and store different vehicle configurations</h3>
            </center>
          </fieldset>
        </div>
        <div id="rightt" ref={formRef}>
            <fieldset>
              <legend>Login</legend>
                <form action="">
                    <label>Username/E-mail: </label>
                    <input type="email" value={Username} name='Username' onChange={onchange}/><br />
                    <label>Password: </label>
                    <input type="password" value={Password} name='Password' onChange={onchange}/><br />
                    <input type="checkbox"/>
                    <label>Remember Me</label><br />
                    <button type="submit" onClick={onSubmit}>Login</button>
                    <Link href=""style={{position:'relative', left:'35%'}}><h5>...Forgot Password</h5></Link>
                </form>
            </fieldset>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact
