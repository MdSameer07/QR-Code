import React, { useState } from 'react';
import Aut from './Aut'; 
import '../styles/Second.css';

const Second = () => {  
  const [log,setLog]=useState(false);
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
  setLog(true);
  };
  return (
    <>
    <div>
     <center>  <h1> QR-Code  </h1> </center>
     <marquee width="80%" direction="left" height="100px"> Welcome to Qr Generate </marquee>
      <div className='personal'>
      <h1> QR : </h1>
      <center>
        <form autoComplete='off' onSubmit={submitHandler}> 
            <input type="text" name="companyname"  placeholder='companyname' onChange={changeHandler} required/><br/> 
            <input type="text" name="productid" placeholder='productid' onChange={changeHandler}required /><br/>
            <input type="email" name="email"  placeholder='Email' onChange={changeHandler} required/><br/>
            <input type="text" name="productname" placeholder='productname' onChange={changeHandler} required /><br/><br/>
            <input type="submit" value="SIGN-UP" />
        </form>
      </center>
      </div>
    </div>
    <div>
    <Aut dataset={values} tolog={log}/>
    </div>
    </>
  )
}
export default Second;