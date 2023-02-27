import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';
import { useNavigate } from 'react-router';

const Test = () => {
  const navigate=useNavigate();
  const [delay, setDelay] = useState(1);
  //const [result, setResult] = useState('No result');
  const [flag, setFlag] = useState(1);
  const handleScan = (data) => {
    //var arr= [1234, 5678,91011]
    if(data && flag){ 
    //setResult(data)
    console.log(data);
    //setFi(data["te
    console.log(data["text"]);
    //console.log(data["text"]);
    setFlag(0) 
     
    }
    else if(data && flag==0){
      alert("already scanned once it is a cloned qr code")
      navigate("/")
    }
    //setFlag(1);
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <>
      <div>
        <QrReader
          delay={delay}
          style={previewStyle}
          onError={handleError}
          onScan={handleScan}
          facingmode={"rear"}
        />
      </div>
      <div> 
      </div>
    </>
  );
};
export default Test;

// {flag ? (<Final name={result} />) : ( console.log('hello the value is ', flag))}
