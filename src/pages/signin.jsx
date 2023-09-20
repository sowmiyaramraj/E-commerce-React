import React,{useState,useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Signin(){
    const navigate=useNavigate();
    const [formdata,setFormdata]=useState({
        email:"",
        password:"",
    });
    const handleSubmit=async(e)=>{
        e.preventdefault();
        const responce=await axios.post("http://localhost:3001/register/signin",{...formdata});
        if(responce.data){
            navigate("/");
        }

    }
    return(
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <label >Signin</label><br/>
            <lable >Enter your E-mail</lable>
            <input type="email" name="email" value={formdata.email}
            onChange={(e)=>setFormdata({...formdata,email:e.target.value})} />
            <lable >Password your password</lable>
            <input type="password" name="password" value={formdata.password}
            onChange={(e)=>setFormdata({...formdata,password:e.target.value})}/>
            <button type="submit">Submit</button>
            </form>
        </div>
    );

}