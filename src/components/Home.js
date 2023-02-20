import "../styles/Home.css";  
import Product from "./Product"; 

export const Home = () =>{
    return (
        <>
        <div className='total-home'>
            <div className='heading'>
                Welcome to QR-code!
            </div>
        </div>
            <div className='headings'>
                <center> 
                    <h4>  </h4>    
                    <Product />          
                </center> 
            </div>
        </>
    )
};