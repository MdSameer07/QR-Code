import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import '../styles/Product.css';
import '../styles/Profile.css';
const Genqr = (params) => {
  const [data,setData]=useState({
    companyname:'',
    email:'',
    productname:'',
    productid:''
  });
  const navigate = useNavigate();
  const changeHandler= e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = e=>{
    e.preventDefault();
    fetch('https://qr-code-b051d-default-rtdb.firebaseio.com/register.json',
    {
      method:'POST',
      body:JSON.stringify(data),
      headers : {"Content-Type" : "application/json; charset=UTF-8"}
    }
    )
    .then(alert("data pushed succesfully"))
    .then(res=>navigate('/Home'));
  };
  return (
    <>
    <div>
       <div className = 'profile-component'>
          <div className='name'>
            <h1>welcome to QR-Code : {params.name}</h1>
          </div>
        </div>
    </div>
    <div className='per'> 
        <center>
        <h2>Login Credentials </h2>
            <form onSubmit={submitHandler} >
            <div  className='user-box'>
                <input type="text" name="companyname" placeholder='companyname' onChange={changeHandler}/><br/>
                </div>
                <div  className='user-box'>
                <input type="text" name="email" onchange={changeHandler} placeholder='E-mail'/><br/></div>
                <div  className='user-box'> 
                <input type="text" name='productname' onchange={changeHandler} placeholder='productname'/><br/>
                <div  className='user-box'>
                <input type="text" name="productid" onchange={changeHandler} placeholder='product-id' /><br/></div>
                <br/>
                </div>
                <input type="submit" />
            </form>
        </center>
    </div>
    </>
  )
}
export default Genqr;