
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Link } from "react-router-dom"
export const RegisterPageTwo = () => {
    
    const navigate = useNavigate()
    const change = ()=>{
      return  navigate(-1)
    }   


  return (
    <div>
        <input type="text" placeholder="adress"/>
        <input type="text" placeholder="phNumber"/>

        <button onClick={change}>prev</button>


        <button onClick={()=>{
         return alert("register successfully")
        }}><Link to="/register/one">Submit</Link></button>
    </div>
  )
}
