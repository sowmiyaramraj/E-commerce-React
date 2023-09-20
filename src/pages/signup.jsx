import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup(){
    const navigate=useNavigate();
    const [formdata,setFormdata]=useState({
        name:"",
        phno:"",
        email:"",
        password:"",
        confirmpassword:"",
        address:"",
    });

    const handleSubmit=async(e)=>{
        e.preventdefault();
        const responce=await axios.post("http://localhost:3001/register/signup",{
            name:formdata.name,
            email:formdata.email,
            phno:formdata.phno,
            adress:formdata.address,
            password:formdata.address,
            confirmpassword:formdata.confirmpassword,
        })
        setFormdata([...formdata,responce.data]);
        navigate("/");
        
    }
    return(
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <lable>Signup</lable>
                <lable>Name</lable>
                <input name="name" value={formdata.name} type="text" 
                onChange={(e)=>setFormdata({...formdata,name:e.target.value})}/>
                <lable>phone number</lable>
                <input name="phno" value={formdata.phno} type="number" 
                onChange={(e)=>setFormdata({...formdata,phno:e.target.value})}/>
                <lable>Address</lable>
                <input name="address" value={formdata.address} type="string" 
                onChange={(e)=>setFormdata({...formdata,address:e.target.value})}/>
                <lable>Email</lable>
                <input name="email" value={formdata.email} type="email" 
                onChange={(e)=>setFormdata({...formdata,email:e.target.value})}/>
                <lable>Password</lable>
                <input name="password" value={formdata.password} type="password" 
                onChange={(e)=>setFormdata({...formdata,password:e.target.value})}/>
                <lable>confirm Password</lable>
                <input name="confirmpassword" value={formdata.confirmpassword} type="password" 
                onChange={(e)=>setFormdata({...formdata,confirmpassword:e.target.value})}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}