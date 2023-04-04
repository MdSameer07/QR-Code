import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import QRCodeGenerator from './QRCodeGenerator';
const Aut = (params) => {
    const navigate=useNavigate();
    const [value,setValue]=useState([]);
    const [val,setVal]=useState(params.tolog);
    useEffect(()=>{ axios.get("https://qr-code-b051d-default-rtdb.firebaseio.com/register.json").then(
                res=>setValue(res.data)
            )
        },[])
        Object.keys(value).map(key=>{
          if((params.dataset.email==(value[key].email)) && (params.dataset.productid==(value[key].productid)) 
          && (params.dataset.companyname==(value[key].companyname)) &&
           (params.dataset.productname==(value[key].productname)) && params.tolog)
          {
            navigate("/qr");
          }
        })
    return (
    <div>
    </div>
  )
}
export default Aut;