import React, { useEffect ,useState} from 'react';
import { Navigate, useNavigate ,Link } from 'react-router-dom';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
// edit not profile
function EditSecProfiles() {
  const [userData,setUserData] = useState({});
  // const history = useNavigate();
 
  const verifyPage=async()=>{
    try{
        const res= await fetch('/profile',{
            method:"GET",
            headers:{
                // Accept:"application/json",
                "Content-Type":"application/json"
            },
            // credentials:"include"
        });
       
        const data = await res.json();
       
        console.log(data);
        setUserData({...data});

        if(!res.status===200){
            const err = new Error(res.error);
            throw err;
        }
        // catch breacket problem chacked its
    }catch(err) {
        console.log(err);
        // history("/profile");
    }
}

useEffect(()=>{
    verifyPage();
},[])



  return (
  <>
<Wrapper>
<div className="container">
  <div className="main-body">
    {/* Breadcrumb
    <nav aria-label="breadcrumb" className="main-breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
        <li className="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
        <li className="breadcrumb-item active" aria-current="page">User Profile</li>
      </ol>
    </nav> */}
    {/* /Breadcrumb */}
    <div className="row gutters-sm">
      <div className="col-md-4 mb-3">
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width={150} />
              <div className="mt-3">
                <h4>{userData.name}</h4>
                <p className="text-secondary mb-1">{userData.work}</p>
                <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                <button className="btn btn-primary">Follow</button>
                <button className="btn btn-outline-primary">Message</button>
              </div>
            </div>
          </div>
        </div>
        <div className="card mt-3">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe mr-2 icon-inline"><circle cx={12} cy={12} r={10} /><line x1={2} y1={12} x2={22} y2={12} /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>Website</h6>
              <span className="text-secondary">https://bootdey.com</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github mr-2 icon-inline"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>Github</h6>
              <span className="text-secondary">bootdey</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter mr-2 icon-inline text-info"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>Twitter</h6>
              <span className="text-secondary">@bootdey</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram mr-2 icon-inline text-danger"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>Instagram</h6>
              <span className="text-secondary">bootdey</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
              <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook mr-2 icon-inline text-primary"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>Facebook</h6>
              <span className="text-secondary">bootdey</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Full Name</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {userData.name}
                {userData.address}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Email</h6>
              </div>
              <div className="col-sm-9 text-secondary">
              {userData.email}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Phone</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {userData.phone}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Work</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {userData.work}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <h6 className="mb-0">Address</h6>
              </div>
              <div className="col-sm-9 text-secondary">
                {userData.address}
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-12">
                <a className="btn btn-info " 
                   target="__blank"
                   href="../Admin/EditProfile"
                  >
                 <Link to={"./EditProfile/:id"}>Edit </Link> 
          
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row gutters-sm">
          <div className="col-sm-6 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                <small>Web Design</small>
                <div className="progress mb-3" style={{height: 5}}>
                  <div className="progress-bar bg-primary" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <small>Website Markup</small>
                <div className="progress mb-3" style={{height: 5}}>
                  <div className="progress-bar bg-primary" role="progressbar" style={{width: '72%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <small>One Page</small>
                <div className="progress mb-3" style={{height: 5}}>
                  <div className="progress-bar bg-primary" role="progressbar" style={{width: '89%'}} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <small>Mobile Template</small>
                <div className="progress mb-3" style={{height: 5}}>
                  <div className="progress-bar bg-primary" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <small>Backend API</small>
                <div className="progress mb-3" style={{height: 5}}>
                  <div className="progress-bar bg-primary" role="progressbar" style={{width: '66%'}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-3">
            <div className="card h-100">
              <div className="card-body">
                <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                <small>Web Design</small>
                <div className="progress mb-3" style={{height: 5}}>
                  <div className="progress-bar bg-primary" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <small>Website Markup</small>
                <div className="progress mb-3" style={{height: 5}}>
                  <div className="progress-bar bg-primary" role="progressbar" style={{width: '72%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <small>One Page</small>
                <div className="progress mb-3" style={{height: 5}}>
                  <div className="progress-bar bg-primary" role="progressbar" style={{width: '89%'}} aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <small>Mobile Template</small>
                <div className="progress mb-3" style={{height: 5}}>
                  <div className="progress-bar bg-primary" role="progressbar" style={{width: '55%'}} aria-valuenow={55} aria-valuemin={0} aria-valuemax={100} />
                </div>
                <small>Backend API</small>
                <div className="progress mb-3" style={{height: 5}}>
                  <div className="progress-bar bg-primary" role="progressbar" style={{width: '66%'}} aria-valuenow={66} aria-valuemin={0} aria-valuemax={100} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 </Wrapper>
 </>

  )
}

const Wrapper = styled.section`
body{
  margin-top:20px;
  color: #1a202c;
  text-align: left;
  background-color: #e2e8f0;    
}
.main-body {
  padding: 15px;
}
.card {
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0,0,0,.125);
  border-radius: .25rem;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}

.gutters-sm {
  margin-right: -8px;
  margin-left: -8px;
}

.gutters-sm>.col, .gutters-sm>[class*=col-] {
  padding-right: 8px;
  padding-left: 8px;
}
.mb-3, .my-3 {
  margin-bottom: 1rem!important;
}

.bg-gray-300 {
  background-color: #e2e8f0;
}
.h-100 {
  height: 100%!important;
}
.shadow-none {
  box-shadow: none!important;
}

`;


export default EditSecProfiles