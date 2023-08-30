import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({children}) {
    
        if(localStorage.getItem('token')) {
            return children
        } else {
            return <Navigate to='/'/>
        }
   
}