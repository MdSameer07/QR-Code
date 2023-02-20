import React, { useState } from 'react'
import { addMethod } from 'yup';
import '../styles/Product.css'
import { Body } from './Body';
const Product = () => {
  const [data,setData]=useState({
    companyname:'',
    email:'',
    productname:'',
    productid:''
  });
  const changeHandler= e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = e=>{
    e.preventDefault();
    fetch('https://qr-code-b051d-default-rtdb.firebaseio.com/data.json',
    {
      method:'POST',
      body:JSON.stringify(data),
      headers : {"Content-Type" : "application/json; charset=UTF-8" }
    }
    ).then(res=>alert('Data posted successfully')).catch(err=>console.log(err))
  }
  return (
    
    <div className='login-box'> 
        <center>
        <h2>Product Credentials </h2>
            <form onSubmit={submitHandler}>
                <div  className='user-box'>
                <input type="text" name="companyname" placeholder='companyname' onChange={changeHandler}/><br/>
                </div>
                <div  className='user-box'>
                <input type="text" name="email" placeholder='E-mail' onChange={changeHandler}/><br/></div>
                 
                <div  className='user-box'> 
                <input type="text" name='productname' placeholder='productname' onChange={changeHandler}/><br/>
                <div  className='user-box'>
                <input type="text" name="productid" placeholder='product-id' onChange={changeHandler}/><br/></div>
                <br/>
                </div>
                <input type="submit" />
            </form>
        </center>
    </div>
  )
} 
export default Product;
