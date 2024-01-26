import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import   "../AdminComponent/AdminHome.module.css";
import { ImBook } from "react-icons/im";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";

const ProductDisplayAll = () => {

  // data fetching all

  const [userData, setUserData] = useState([]);
   console.log(userData);

  const fetchAllUser = async () => {
    const res = await axios.get("http://localhost:5000/Productreadalluser");
     console.log(res);
    setUserData(res.data);
  };

  useEffect(() => {
    fetchAllUser();
  }, []);

  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:5000/Productdelete/${id}`);
    console.log(res);
    if (res.status === 200) {
      fetchAllUser();
    }
  };
  return (
    <>

<div>
<div className="container">
  <div className="table-wrapper">
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2>Manage <b>Products</b></h2>
        </div>
        <div className="col-sm-6">
          {/* <a href="/" className="btn btn-success" data-toggle="modal"><i className="material-icons"> </i> <span>Add New Employee</span></a> */}
          <a href="/AdminHomeProducts" className="btn btn-danger" data-toggle="modal"><i className="material-icons"></i> <span>Add New Products</span></a>
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
          <th>Id</th>
          <th>Name</th>
          {/* <th>Company</th> */}
          {/* <th>Price</th> */}
          <th>Stock</th>
          {/* <th>Reviews</th> */}
          <th>Stars</th>
          <th>Colors</th>
          <th>Image</th>
          {/* <th>Description</th> */}
          {/* <th>Category</th> */}
          <th>Featured</th>
          <th>Shipping</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>

      {userData.map((item, i) => (
           
           <tr>
           <td>
             <span className="custom-checkbox">
               {/* <input type="checkbox" id="checkbox5" name="options[]" defaultValue={1}  /> */}
               {/* <label htmlFor="checkbox5"  /> */}
               {i + 1}
             </span>
           </td>
           <th>{item?.id}</th>
            <th>{item?.name}</th>
            {/* <th>{item?.company}</th> */}
          {/* <th>{item?.price}</th> */}
          <th>{item?.stock}</th>
          {/* <th>{item?.reviews}</th> */}
          <th>{item?.stars}</th>
          <th>{item?.colors}</th>
          <th>{item?.image}</th>
          {/* <th>{item?.description}</th> */}
          {/* <th>{item?.category}</th> */}
          <th>{item?.featured}</th>
          <th>{item?.shipping}</th>
           <td>
            <NavLink to={`/Productread/${item._id}`}>
            
            <ImBook  />
            </NavLink>
         
           <NavLink  
                     to={`/Productupdateuser/${item._id}`}
                     className="font-medium text-yellow-400 dark:text-blue-500 hover:underline"
                   >
                   <a href="#editEmployeeModal" className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit"><AiFillEdit /></i></a>

           </NavLink>
             <a  onClick={() => handleDelete(item._id)} className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete"><MdDelete /></i></a>
           </td>
         </tr>

))}

      </tbody>
    </table>
    <div className="clearfix">
      <div className="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
      <ul className="pagination">
        <li className="page-item disabled"><a href="#">Previous</a></li>
        <li className="page-item"><a href="#" className="page-link">1</a></li>
        <li className="page-item"><a href="#" className="page-link">2</a></li>
        <li className="page-item active"><a href="#" className="page-link">3</a></li>
        <li className="page-item"><a href="#" className="page-link">4</a></li>
        <li className="page-item"><a href="#" className="page-link">5</a></li>
        <li className="page-item"><a href="#" className="page-link">Next</a></li>
      </ul>
    </div>
  </div>
</div>
{/* Edit Modal HTML */}
<div id="addEmployeeModal" className="modal fade">
  <div className="modal-dialog">
    <div className="modal-content">
      <form>
        <div className="modal-header">
          <h4 className="modal-title">Add Employee</h4>
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea className="form-control" required defaultValue={""} />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" className="form-control" required />
          </div>
        </div>
        <div className="modal-footer">
          <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
          <input type="submit" className="btn btn-success" defaultValue="Add" />
        </div>
      </form>
    </div>
  </div>
</div>
{/* Edit Modal HTML */}
<div id="editEmployeeModal" className="modal fade">
  <div className="modal-dialog">
    <div className="modal-content">
      <form>
        <div className="modal-header">
          <h4 className="modal-title">Edit Employee</h4>
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" required />
          </div>
          <div className="form-group">
            <label>Address</label>
            <textarea className="form-control" required defaultValue={""} />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input type="text" className="form-control" required />
          </div>
        </div>
        <div className="modal-footer">
          <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
          <input type="submit" className="btn btn-info" defaultValue="Save" />
        </div>
      </form>
    </div>
  </div>
</div>
{/* Delete Modal HTML */}
<div id="deleteEmployeeModal" className="modal fade">
  <div className="modal-dialog">
    <div className="modal-content">
      <form>
        <div className="modal-header">
          <h4 className="modal-title">Delete Employee</h4>
          <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
        </div>
        <div className="modal-body">
          <p>Are you sure you want to delete these Records?</p>
          <p className="text-warning"><small>This action cannot be undone.</small></p>
        </div>
        <div className="modal-footer">
          <input type="button" className="btn btn-default" data-dismiss="modal" defaultValue="Cancel" />
          <input type="submit" className="btn btn-danger" defaultValue="Delete" />
        </div>
      </form>
    </div>
  </div>
</div>
</div>
 </>
  );
};

export default ProductDisplayAll;