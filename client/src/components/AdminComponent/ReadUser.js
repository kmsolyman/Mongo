import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import   "../AdminComponent/AdminHome.module.css";


const ReadUser = () => {
  const { id } = useParams();
  // data fetching all
  const [userData, setUserData] = useState([]);
 
  const fetchSingleUser = async () => {
    const res = await axios.get(`http://localhost:5000/read/${id}`);
    console.log(res);
    setUserData(res.data);
  };
  useEffect(() => {
    fetchSingleUser();
  }, []);
  return (
    <>
 <div>
<div className="container">
  <div className="table-wrapper">
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2>Details <b>Employees</b></h2>
        </div>
        <div className="col-sm-6">
          {/* <a href="/addCard" className="btn btn-success" data-toggle="modal"><i className="material-icons"> </i> <span>Add New Employee</span></a> */}
          {/* <a href="/readuser/:id" className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>ReadUser</span></a> */}
        </div>
      </div>
    </div>
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th>
            <span className="custom-checkbox">
              <input type="checkbox" id="selectAll" />
              <label htmlFor="selectAll" />
            </span>
            </th>
              <th scope="col" className="px-6 py-3">
                SN.
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phons
              </th>
              <th scope="col" className="px-6 py-3">
                Work
              </th>
              <th scope="col" className="px-6 py-3">
                Adderss
              </th>
              <th scope="col" className="px-6 py-3">
                massage
              </th>
              <th scope="col" className="px-6 py-3">
                date
              </th>
              <th scope="col" className="px-6 py-3">
                password
              </th>
              <th scope="col" className="px-6 py-3">
                cPassword
              </th>
            </tr>
      </thead>
      <tbody>
            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {userData.name}
              </th>
              <td className="px-6 py-4"> {userData.email}</td>
              <td className="px-6 py-4">{userData.phone}</td>
              <td className="px-6 py-4"> {userData.work}</td>
              <td className="px-6 py-4">{userData.address}</td>
              <td className="px-6 py-4"> {userData.massage}</td>
              <td className="px-6 py-4">{userData.date}</td>
              <td className="px-6 py-4"> {userData.password}</td>
              <td className="px-6 py-4">{userData.cpassword}</td>
            </tr>
          </tbody>
    </table>
 </div>
</div>
<div>
  </div>
  </div>
    </>
  );
};

export default ReadUser;