import "../styles/Log.css";   
import '../styles/Log1.css';
import '../styles/Log2.css';


import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from './FireBase';
import { useNavigate } from 'react-router-dom';
const Log = () => {
  const navigate=useNavigate();
  const [values,setData]=useState(
    {
        email:'',
        password:''
    })
 const changeHandler = e=>{
    setData({...values,[e.target.name]:e.target.value});
 }
const [submitButtonDisabled,setsubmitButtonDisabled]=useState(false);
const signUp = e=>{
    console.log(values);
    e.preventDefault();
    setsubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth,values.email,values.password)
    .then((res)=>{
        setsubmitButtonDisabled(false);
        navigate("/second");
    }).catch((err)=>{
        setsubmitButtonDisabled(false);
        console.log("Error is ",err.message)
    });
  };
  const signUp2 = e=>{
    console.log(values);
    e.preventDefault();
    if((values.email=="admin@gmail.com"&&values.password=="admin@123") || (values.email=="bots@gmail.com" &&values.password=="bots@123")){
      navigate("/home");
    }
  };
  const signup3 = e=>{
    console.log(values);
    e.preventDefault();
    setsubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth,values.email,values.password)
    .then(async(res)=>{
        setsubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user,{
            displayName:values.name,
        });
        alert("registration successful ");
        navigate("/");
    }).catch((err)=>{
        setsubmitButtonDisabled(false);
        console.log("Error is ",err.message)
        
    });
  };
  return (
    <div>
      <> 
      <body>
      <center>
      <h1>Welocome to QR-CODE</h1>
      </center>
      <marquee width="80%" direction="left" height="100px">   Don't get fooled by Duplicate Products </marquee>
      <div class="row">
        <div class="column">
        <div className='login-box'> 
        <center>
        <h2>USER LOGIN </h2>
        <form onSubmit>
                <div  className='user-box'>
                <input type="text" name="email" placeholder='E-mail' onChange={changeHandler} required/></div> 
                <div  className='user-box'>
                <input type="password" name="password" placeholder='password' onChange={changeHandler} required/><br/></div>
                <br/>
                <button onClick={signUp} >sign-in</button> &nbsp;&nbsp;
                <button onClick={signup3} >sign-up</button> &nbsp;&nbsp;
            </form>
        </center>
    </div>
        </div>
        <div class="column">
        <div className='login-box2'> 
        <center>
        <h2>ADMIN LOGIN </h2>
        <form onSubmit>
                <div  className='user-box2'>
                <input type="text" name="email" placeholder='E-mail' onChange={changeHandler}/></div> 
                <div  className='user-box2'>
                <input type="password" name="password" placeholder='password' onChange={changeHandler}/><br/></div>
                <br/>
                <button onClick={signUp2} >sign-in</button> &nbsp;&nbsp;
            </form>
        </center>
    </div>
        </div>
      </div>
      </body>
     </>
    </div>
  )
}
export default Log;