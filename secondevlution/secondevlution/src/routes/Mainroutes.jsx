
import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { RegisterPageOne } from '../Pages/RegisterPageOne';
import { RegisterPageTwo } from '../Pages/RegisterPageTwo';
import {PrivateComponent} from "../Pages/PrivateRoute"
export const Mainroutes = () => {
  return (
    <Routes>

        <Route path="/register/one" element={<RegisterPageOne/>} />
        <Route path="/register/two" element={
        
            <PrivateComponent>

             <RegisterPageTwo/>

            </PrivateComponent>
        
        } />

      </Routes>
  )
}