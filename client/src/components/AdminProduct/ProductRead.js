import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import   "../AdminComponent/AdminHome.module.css";


const ProductRead = () => {
  const { id } = useParams();
  // data fetching all
  const [userData, setUserData] = useState([]);
 
  const fetchSingleUser = async () => {
    const res = await axios.get(`http://localhost:5000/Productread/${id}`);
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
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Company
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
              colors	
              </th>
              <th scope="col" className="px-6 py-3">
              
              Image
              </th>
              <th scope="col" className="px-6 py-3">
              Description	
              </th>
              <th scope="col" className="px-6 py-3">
              Category	
              </th>
              <th scope="col" className="px-6 py-3">
              Featured
              </th>
              <th scope="col" className="px-6 py-3">
              Shipping
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
                {userData.id}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {userData.name}
              </th>
              <td className="px-6 py-4"> {userData.company}</td> 
              <td className="px-6 py-4"> {userData.price}</td>  
              <td className="px-6 py-4">{userData.colors}</td>
              <td className="px-6 py-4"> {userData.image}</td>
              <td className="px-6 py-4">{userData.description}</td>
              <td className="px-6 py-4"> {userData.category}</td>
              <td className="px-6 py-4">{userData.featured}</td>
              <td className="px-6 py-4">{userData.shipping}</td>
              
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

export default ProductRead;