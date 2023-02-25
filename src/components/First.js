import axios from 'axios';
import React, { useState } from 'react';
const First = () => { 
  const [values,setData]=useState(
    {
        companyname:'',
        email:'',
        productid:'',
        productname:''
    })
 const changeHandler = e=>{
    setData({...values,[e.target.name]:e.target.value});
 }
 const submitHandler = e=>{
    e.preventDefault();
    console.log(values);
    axios.post("https://qr-code-b051d-default-rtdb.firebaseio.com/register.json",values).then(
        ()=>alert("submitted successfully"));
  };
  return (
    <div>
      <center>
        <form autoComplete='off' onSubmit={submitHandler}>
            <h1>LOGIN </h1> 
            <input type="text" name="companyname"  placeholder='companyname' onChange={changeHandler}/><br/><br/>
            <input type="text" name="productid" placeholder='productid' onChange={changeHandler}/><br/><br/>
            <input type="email" name="email"  placeholder='Email' onChange={changeHandler}/><br/><br/>
            <input type="text" name="productname" placeholder='productname' onChange={changeHandler}/><br/><br/>
            <input type="submit" value="SIGN-UP" />
        </form>
      </center>
    </div>
  )
}
export default First;