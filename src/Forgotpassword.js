import React from 'react'
import { config } from "./config";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Forgotpassword() {
  const navigate=useNavigate();
    const formik = useFormik({
      initialValues: {
        email:""
        
      },
      onSubmit: async (values) => {
        try {
            let user = await axios.post(`${config.api}/forgotpassword`, values);
            alert(user.data.message);
            localStorage.setItem("mailid",user.data.mailid);
            if(user.data.message=="Email Send"){
              navigate("/temp-pass");
              }else{
                navigate("/forgotpassword");
              }
        } catch (error) {
          console.log("login error")
          
        }
      }
    });
  return (
    <div className='container-fluid  qw'>
    
    <div className='row pt-5'>
      <div className='col-lg-4 '></div>
      <div className='col-lg-4 mt-4 justify-content-center'>
        <form onSubmit={formik.handleSubmit} autoComplete="off" className='login'>
          <h1>Forgot Password</h1>
          <div className="form-group mt-2">

            <label for="email">Enter Email To Confirm</label>
            <input type="email" className="form-control" id="email"  placeholder="Enter Email" name="email" value={formik.values.email} onChange={formik.handleChange} />

          </div>
          
          <input type="submit" value='Submit' className="btn btn-success  mt-2 " />
          
        </form>
      </div>
    </div>
  </div>
  )
}

export default Forgotpassword