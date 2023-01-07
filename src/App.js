import logo from './logo.svg';
import './App.css';
import Login from './Component/Login';
import Registration from './Component/Registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forgottpassword from './Component/Forgottpassword';
import Updation from './Component/Updation';
function App() {
  return (
   <>

  

   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        
      
          <Route path="/registration" element={<Registration />} />
          <Route path="/ForgottPassword" element={<Forgottpassword/>} />
          <Route path="/Updation" element={<Updation/>} />
       
      </Routes>
    </BrowserRouter>

   </>
  );
}

export default App;
