import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { config } from './config';
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
function Dashboard() {
  const navigate=useNavigate();
  const loguser=JSON.parse(localStorage.getItem('user'));
  const [users, setusers] = useState([])
  let fetchdata = async () => {
    try {
      let res = await axios.get(`${config.api}/dash`, {
        headers: {
          'authorization': `${localStorage.getItem('react_app_token')}`
        }
      });
      //alert(res.data.profile);
      //alert("res.data.profile");
      setusers(res.data);
    } catch (error) { console.log(error) }
  };

  useEffect(() => {
    fetchdata()
  }, []);

  let dologout=()=>{
    localStorage.removeItem("react_app_token");
    localStorage.removeItem("profile");
    navigate("/");
  }
  const formik = useFormik({
    initialValues: {
      sample:""
      
    },
    onSubmit: async (values) => {
      try {
        const dash=await axios.post(`${config.api}/dash`,values,{
          headers: {
            'authorization': `${localStorage.getItem('react_app_token')}`
          }
        });
       window.location.reload();
        alert(dash.data.message);
        
      } catch (error) {
        console.log("not added ");
      }
    }
  });
  return (
    <div className='container-fluid qw'>
      <div className='row justify-content-end'>
      <div className='col-lg-4 '><button className='btn btn-warning ' onClick={dologout}>Logout</button></div>
      </div>
    <div className='row justify-content-center'>
      
      <div className='col-lg-4  mt-4'>
        <form onSubmit={formik.handleSubmit} autoComplete="off" className='register'>
        <h1>Dashboard</h1>
        
        <div className="form-group mt-2">
            <label for="sample">Sample</label>
            <input type="text" className="form-control"   id="sample" placeholder="enter sample" name="sample" value={formik.values.sample} onChange={formik.handleChange}/>
            
         </div>
          
          
          <input type="submit" value='ADD' className="btn btn-success  mt-2 "/>
          
        </form>
      </div>
    </div>
    <div className='row justify-content-center mt-4'>
      <div className='col-md-5'>
      <table class="table table-dark table-hover">
              <thead>
                <tr>
                 <th>S.NO</th>
                  <th scope="col">id</th>
                  <th scope="col">Sample</th>
                  

                </tr>
              </thead>
              <tbody>
                {
                  users.map((ele, index) => {
                    return (<tr>
                      <th scope="row">{index + 1}</th>
                      <th scope="row">{ele._id}</th>
                      <th scope="row">{ele.sample}</th>
                      
                      
                    </tr>)
                  })
                }
              </tbody>
            </table>
      </div>
    </div>
  </div>
  )
}

export default Dashboard