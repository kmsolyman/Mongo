import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductUpdate = () => {
  const [inputUser, setInputUser] = useState({
    id:"",
    name:"",
    price:"",
    colors:"",
    image:"",
    description:"",
    category:"",
    featured:"",
  });

  const { id } = useParams();
  // data fetching single
  const fetchSingleUser = async () => {
    const res = await axios.get(`http://localhost:5000/Productread/${id}`);
    console.log(res);
    setInputUser({
    id: res.data.id, 
    name: res.data.name,
    company: res.data.company,
    price: res.data.price,
    colors : res.data.colors,
    image: res.data.image,
    description: res.data.description,
    category :res.data.category,
    featured :res.data.featured,
    });
  };
  useEffect(() => {
    fetchSingleUser();
  }, []);

  const handleChnage = (event) => {
    setInputUser({
      ...inputUser,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputUser);
    const res = await axios.put(
      `http://localhost:5000/Productupdateuser/${id}`,
      inputUser
    );
    console.log(res);
    if (res.status === 200) {
      window.location = "/AdminHome";
    }
    // fetchAllUser();
  };
  return (
    <div className="w-2/3 mx-auto mt-5">
      <form onSubmit={handleSubmit}>
        <h1>Update User</h1>
        <div className="">
          <label className=" text-sm text-gray-500 ">Id</label>
          <input
            type="text"
            name="id"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="id"
            required
            value={inputUser.id}
            onChange={handleChnage}
          />
        </div>
        <div className="">
          <label className=" text-sm text-gray-500 ">Name</label>
          <input
            type="text"
            name="name"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter name"
            required
            value={inputUser.name}
            onChange={handleChnage}
          />
        </div>
        <div className="">
          <label className=" text-sm text-gray-500 ">Company</label>
          <input
            type="text"
            name="company"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="company "
            required
            value={inputUser.company}
            onChange={handleChnage}
          />
        </div>
        <div className="">
          <label className=" text-sm text-gray-500 ">Price</label>
          <input
            type="text"
            name="price"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="Enter email "
            required
            value={inputUser.price}
            onChange={handleChnage}
          />
        </div>
        <div className="">
          <label className=" text-sm text-gray-500 ">Colors</label>
          <input
            type="text"
            name="colors"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="colors "
            required
            value={inputUser.colors}
            onChange={handleChnage}
          />
        </div>
        <div className="">
          <label className=" text-sm text-gray-500 ">Image</label>
          <input
            type="text"
            name="image"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="image"
            required
            value={inputUser.image}
            onChange={handleChnage}
          />
        </div>
        <div className="">
          <label className=" text-sm text-gray-500 ">	Description</label>
          <input
            type="text"
            name="description"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="	description "
            required
            value={inputUser.description}
            onChange={handleChnage}
          />
        </div>
        <div className="">
          <label className=" text-sm text-gray-500 ">Category</label>
          <input
            type="text"
            name="category"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="colors "
            required
            value={inputUser.category}
            onChange={handleChnage}
          />
        </div>
        <div className="">
          <label className=" text-sm text-gray-500 ">Featured</label>
          <input
            type="text"
            name="feature"
            className="block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent  border-2 border-gray-300"
            placeholder="feature "
            required
            value={inputUser.featured}
            onChange={handleChnage}
          />
        </div>

        <div className="flex justify-center my-4">
          <button type="submit" className="px-4 py-2 bg-yellow-400 rounded-sm">
            Update Product User
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductUpdate ;