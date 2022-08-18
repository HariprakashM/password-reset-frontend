import React from 'react'
import { config } from "./config";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Randomstring() {
    const navigate=useNavigate();
    const formik = useFormik({
        initialValues: {
          randomstring:"",
          email:"",
          password:""
        },
        onSubmit: async (values) => {
          try {
              let user = await axios.post(`${config.api}/temp-pass`, values);
              alert(user.data.message);
              if(user.data.message=="Password reset done"){
                navigate("/");
                }else{
                  navigate("/temp-pass");
                }
          } catch (error) {
            console.log("login error")
            
          }
        }
      });
  return (
    <div className='container-fluid  qw'>
    <marquee>If didn't receive mail in inbox, Check Spam..!</marquee>
    <div className='row pt-5 '>
      <div className='col-lg-4 '></div>
      <div className='col-lg-4 mt-4 justify-content-center'>
        <form onSubmit={formik.handleSubmit} autoComplete="off" className='login'>
          <h1>Temporary Password</h1>
          <div className="form-group mt-2">

            <label for="email">Enter The Temporary Password</label>
            <input type="email" className="form-control" id="email"  placeholder="Email" name="email" value={formik.values.email} onChange={formik.handleChange} />
            <span>check your register mailid for temporaty password</span>
          </div>
          <div className="form-group mt-2">
          <label for="newpass">Enter The New Password</label>
            <input type="text" className="form-control" id="newpass"  placeholder="New Pass" name="password" value={formik.values.password} onChange={formik.handleChange} />

          </div>
          <div className="form-group mt-2">

            <label for="temppass">Enter The Temporary Password</label>
            <input type="text" className="form-control" id="temppass"  placeholder="Temp Pass" name="randomstring" value={formik.values.randomstring} onChange={formik.handleChange} />
            <span>check your register mailid for temporaty password</span>
          </div>
          
          
          <input type="submit" value='Submit' className="btn btn-success  mt-2 " />
          
        </form>
      </div>
    </div>
  </div>
  )
  
}

export default Randomstring