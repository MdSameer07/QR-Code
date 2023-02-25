import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router";
import { RecoilRoot } from "recoil";
import { Body } from "./components/Body";
import { LoginPage } from "./components/LoginPage";
import { NavBar } from "./components/NavBar";
import { RegisterPage } from "./components/RegisterPage";
import { ProtectedRoute1 } from "./components/ProtectedRoute1";
import { ProtectedRoute2 } from "./components/ProtectedRoute2";
import { Home } from "./components/Home";
import { Profile } from "./components/Profile";
import {PagenotFound} from "./components/PagenotFound";
import Showqr from "./Showqr";
import QRCodeGenerator from "./components/QRCodeGenerator";
import Log from "./components/Log"; 
import Product from "./components/Product";
import Second from "./components/Second";
const queryClient = new QueryClient()
function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client = {queryClient}>
        <NavBar/>
        <Routes>
          <Route path='/' element = {<Log/>}/>
          <Route path='/login' element = {<ProtectedRoute2><LoginPage/></ProtectedRoute2>}/>
          <Route path='/register' element = {<ProtectedRoute2><RegisterPage/></ProtectedRoute2>}/>
          <Route path='/home' element = {<ProtectedRoute1><Home/></ProtectedRoute1>}/>
          <Route path='/profile' element = {<ProtectedRoute1><Profile/></ProtectedRoute1>}/>
          <Route path='/second' element ={<Second />}/> 
          <Route path='/showqr' element ={<Showqr />}/> 
          <Route path='/qr' element={<QRCodeGenerator />} />
          <Route path='/product' element={<Product/>}/>
          <Route path='*' element={<PagenotFound/>} />
        </Routes>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
export default App;
