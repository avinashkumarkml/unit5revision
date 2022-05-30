
import {isAuth} from '../Context/AuthContext'

import { Navigate } from "react-router-dom"

import {useContext} from 'react'


export const PrivateComponent = ({children}) => {

    const {log} = useContext(isAuth)


    if(!log){
        return <Navigate to="/register/one" replace={false}/>
    }
    return children


}
