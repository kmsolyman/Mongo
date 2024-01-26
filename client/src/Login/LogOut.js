import React, { useEffect } from 'react'
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../App";


function LogOut() {
 
  const {state,dispatch} = useContext(UserContext);

  const histry = useNavigate();
  useEffect(()=>{
    fetch('/logOut',{
      method:"GET",
      headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
      },
      credentials:"include"
  }).then((res)=>{
    dispatch({type:"USER", payload:false})
    histry("/login",{ replace :true});
       if(!res.status===200){
      const err=new Error(res.error);
      throw err;
    }
  }).catch((err)=>{
    console.log(err)
})
  });
  return (
    <div>LogOuts my page</div>
  )
}


export default LogOut