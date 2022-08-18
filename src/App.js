import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './login';
import Register from './register';
import Dashboard from './Dashboard';
import Forgotpassword from './Forgotpassword';
import Randomstring from './Randomstring';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/forgotpassword" element={<Forgotpassword/>}/>
      <Route path="/temp-pass" element={<Randomstring/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
