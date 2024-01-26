import React from 'react'
import { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { Button } from "../styles/Button";
// import { Link } from "react-router-dom";
import style from '../AdminProduct/admin pro.module.css';
// import axios from 'axios';
// import avatar from '.../assets/profile.png';



function AdminHomeProducts() {

  const [user, setUser] = useState({
    // id:"kmsolymannitu",
    name: "iphone x",
    company: "apple",
    price: 6000000,
    stock:40,
    reviews:30,
    stars:32,
    colors: ["#ff0000", 
              "#000",
              "#22D3EF"],
    image:[
      "https://th.bing.com/th?id=OIP.7Uxcgog-9DCesC-OJBdkbAHaGy&w=261&h=239&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://th.bing.com/th?id=OIP.xd96tWS7X19cp5_gFcNJcAHaJ4&w=216&h=288&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      "https://th.bing.com/th?id=OIP.qBks8TKpCJCW3vQSKK2ScwHaGy&w=261&h=239&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    ],
    description: "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
    category: "mobile",
    featured: "true",
    shipping:"true",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handling the form submission
 
  const handleSubmit = async (e) => {
    e.preventDefault();

     const {name,company,price,stock,reviews,stars,colors,image,description,category,featured,shipping} = user
      
     const res = await fetch("/newProductsAdd",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name,company,price,stock,reviews,stars,colors,image,description,category,featured,shipping}),
      })
    
      const data = await res.json();
        console.log(data);

  
      if(data.status === 422 || !data){
        window.alert("INVILIED /Productcreateuser")
        console.log("INVILIED  /Productcreateuser");
      }else{
        window.alert("sUCCESS FULL  /Productcreateuser");
        console.log("sUCCESS /Productcreateuser");
        // toast.success("REGISDTER successful");
         navigate("/AdminHome");
        
      }


  }

  return (
    <>
   <Wrapper>
   <div className={style.container}>
	<div >
		<div className={style.screen__content}>
        <form className={style.login} onSubmit={handleSubmit} method="POST">
				{/* <div className={style.login__field}>
          <label>id</label>
					<i className={style.login__icon}></i>
                    <input
                      className={style.login__input}
                      type="text"
                      name="id"
                      placeholder="id"
                      id="id"
                      required
                      autoComplete="off"
                      value={user.id}
                      onChange={handleInput}
                    />
        </div> */}
        <div className={style.login__field}>
        <label>Name</label>
					<i className={style.login__icon}></i>
                    <input
                      className={style.login__input}
                      type="text"
                      name="name"
                      placeholder="name"
                      id="name"
                      required
                      autoComplete="off"
                      value={user.name}
                      onChange={handleInput}
                    />
        </div>
        <div className={style.login__field}>
        <label>Company</label>
					<i className={style.login__icon}></i>
                    <input
                     className={style.login__input}
                      type="text"
                      name="company"
                      id="company"
                      placeholder="company"
                      required
                      autoComplete="off"
                      value={user.company}
                      onChange={handleInput}
                    />
        </div>
        <div className={style.login__field}>
        <label>Price</label>
					<i className={style.login__icon}></i>
                    <input
                     className={style.login__input}
                      type="Number"
                      name="price"
                      placeholder="price"
                      id="price"
                      required
                      autoComplete="off"
                      value={user.price}
                      onChange={handleInput}
                    />
        </div>
        <div className={style.login__field}>
        <label>Stock</label>
					<i className={style.login__icon}></i>
                    <input
                     className={style.login__input}
                      type="Number"
                      name="stock"
                      placeholder="stock"
                      id="stock"
                      required
                      autoComplete="off"
                      value={user.stock}
                      onChange={handleInput}
                    />
        </div>
        <div className={style.login__field}>
        <label>Reviews</label>
					<i className={style.login__icon}></i>
                    <input
                     className={style.login__input}
                      type="Number"
                      name="reviews"
                      placeholder="reviews"
                      id="reviews"
                      required
                      autoComplete="off"
                      value={user.reviews}
                      onChange={handleInput}
                    />
        </div>
        <div className={style.login__field}>
        <label>Stars</label>
					<i className={style.login__icon}></i>
                    <input
                     className={style.login__input}
                      type="Number"
                      name="stars"
                      placeholder="stars"
                      id="stars"
                      required
                      autoComplete="off"
                      value={user.stars}
                      onChange={handleInput}
                    />
        </div>
        <div className={style.login__field}>
        <label>Colors</label>
					<i className={style.login__icon }></i>
                    <input
                     className={style.login__input}
                      type="text"
                      name="colors"
                      placeholder="colors"
                      id="colors"
                      required
                      // autoComplete="off"
                      value={user.colors}
                      onChange={handleInput}
                    />
        </div>
        <div className={style.login__field}>
        <label>Image</label>
					<i className={style.login__icon}></i>
                    <input
                      className={style.login__input}
                      type="text"
                      name="image"
                      placeholder="image"
                      id="image"
                      required
                      autoComplete="image"
                      value={user.image}
                      onChange={handleInput}
                    />
        </div>
        <div className={style.login__field}>
        <label>Discription</label>
					<i className={style.login__icon}></i>
                    <input
                      className={style.login__input}
                      type="text"
                      name="description"
                      placeholder="description"
                      id="description"
                      required
                      autoComplete="off"
                      value={user.description}
                      onChange={handleInput}
                    />
        </div>
        <div className={style.login__field}>
        <label>Category</label>
					<i className={style.login__icon}></i>
                    <input
                      className={style.login__input}
                      type="text"
                      name="category"
                      placeholder="category"
                      id="category"
                      required
                      autoComplete="off"
                      value={user.category}
                      onChange={handleInput}
                    />
        </div>
        <div className={style.login__field}>
        <label>Featured</label>
					<i className={style.login__icon}></i>
                    <input
                      className={style.login__input}
                      type="text"
                      name="featured"
                      placeholder="true/false"
                      id="featured"
                      required
                      autoComplete="off"
                      value={user.featured}
                      onChange={handleInput}
                    />
        </div>
        <div className={style.login__field}>
        <label>Shipping</label>
					<i className={style.login__icon}></i>
                    <input
                      className={style.login__input}
                      type="text"
                      name="shipping"
                      placeholder="true/false"
                      id="shipping"
                      required
                      autoComplete="off"
                      value={user.shipping}
                      onChange={handleInput}
                    />
        </div>
				<button type="sumbit" className={style.login__submit}>
					<span className={style.button__text}>Product Add In Now</span>
					<i className={style.button__icon }></i>
				</button>
			</form>
			<div className={"social-login"}>
				{/* <Link className={"social-login"} to="/Login">Register</Link> */}
			</div>
      </div>
      </div>
      </div>
   </Wrapper>
 </>

  );
};
const Wrapper = styled.section`
padding: 9rem 0 5rem 0;
text-align: center;

.container {
  margin-top: 6rem;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      .input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}`;


export default AdminHomeProducts


