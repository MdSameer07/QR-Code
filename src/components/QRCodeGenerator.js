import React, { useState, useEffect } from 'react';
//import QRCode from 'qrcode.react';
import QRCode from 'react-qr-code';
import '../styles/QRCodeGenerator.css';
function QRCodeGenerator() {
  var date = new Date()

  const [expirationTime, setExpirationTime] = useState(null);

  const [isScanned, setIsScanned] = useState(false);

  const uniqueToken = date.valueOf();

  
  const qrCodeData = JSON.stringify({token: uniqueToken, expires: expirationTime });
  
  // Handler function to update state when QR code is scanned
  const handleScan = () => {
    setIsScanned(true); 
  };

  // Effect to set the expiration time when the component mounts
  useEffect(() => {
    setExpirationTime(Date.now() + 6000); // QR code will expire in 1 minute
  }, []);

  return (
    <div>
      <center> <h2> Welcome to RESPONSIVE QR </h2> </center>
      <div className='per'>
      <center>
      {!isScanned && expirationTime && (
        <QRCode value={qrCodeData} size={256} level="H" onScan={<handleScan/>} />
      )}
      {isScanned && (
        <p>QR code has been scanned and can no longer be used.</p>
      )}
      </center>
      </div>
    </div>
  );
}
export default QRCodeGenerator;