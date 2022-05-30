

import React, { useEffect, useState,useContext } from 'react'
import {isAuth} from "../Context/AuthContext"  
import { Link } from "react-router-dom";

export const RegisterPageOne = () => {

    const {toggle} = useContext(isAuth)

    const [btn,setBtn] = useState(false)

    const [user,setUser] = useState("")

    const [email,setEmail] = useState("")

 
      

   
  return (
    <div>

        

     <input type="text" placeholder="User Name" onChange={(e)=>setUser(e.target.value)}/>
        <input type="text" placeholder="User email" onChange={(e)=>{
          setEmail(e.target.value);
          toggle(true)
          setBtn(true)
        }}/>
    

        

       
        {btn ?<Link to="/register/two">Submit</Link>: ""}

    </div>
  )
}
