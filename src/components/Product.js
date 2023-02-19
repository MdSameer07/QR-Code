import React, { useState } from 'react'
import '../styles/Product.css'
const Product = () => {
  const [data,setData]=useState({
    companyname:'',
    email:'',
    productname:''
  });
  const changeHandler= e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler = e=>{
    e.preventDefault();
    console.log(data);
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
                <input type="text" name='productname' placeholder='productname' onChange={changeHandler}/><br/><br/>
                </div>
                <input type="submit" />
            </form>
        </center>
    </div>
  )
} 
export default Product;
