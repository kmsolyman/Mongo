import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./router/About";
import Home from "./router/Home";
import Products from "./product/Products";
import Contact from "./router/Contact";
import Cart from "./product/Cart";
import SingleProduct from "./product/SingleProduct";
import ErrorPage from "./router/ErrorPage";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./Registers/Register";
import  Login  from "./Login/Login";
import Profile from "./router/Profile";
import LogOut from "./Login/LogOut";
import{initialState,reduser} from "./reducer/logoutReduser";
import EditProfile from "./Editprofiles/EditProfile";
import EditProfileDetail from './Editprofiles/EditSecProfiles';

import AdminHome from "./components/AdminComponent/AdminHome";
import ReadUser from "./components/AdminComponent/ReadUser";
import UpdateUser from "./components/AdminComponent/UpdateUser";
import AdminHomeProducts from './components/AdminProduct/AdminHomeProducts';
import ProductRead from './components/AdminProduct/ProductRead';
import ProductUpdate from "./components/AdminProduct/ProductUpdate";

export const UserContext = createContext();
  
  const Routung =()=>{
    return (
      <Routes>
      <Route path="/" element={<Register/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/LogOut" element={<LogOut/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/EditProfile/:id" element={<EditProfileDetail/>} />
      <Route path="/EditProfile" element={<EditProfile/>} />
      <Route path="/Home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/singleproduct/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/AdminHome" element={<AdminHome />} />
        <Route path="/readuser/:id" element={<ReadUser />} />
        <Route path="/updateuser/:id" element={<UpdateUser />} />
      <Route path="/AdminHomeProducts" element={<AdminHomeProducts />} />
      <Route path="/Productread/:id" element={<ProductRead />} />
      <Route path="/Productupdateuser/:id" element={<ProductUpdate />} />





    </Routes>  
    )
  
  }


const App = () => {
    
const [state,dispatch] =useReducer(reduser,initialState);

  return (
    <UserContext.Provider value={{state,dispatch}}>
    <ThemeProvider theme={theme}>
       <Router>
        <GlobalStyle />
         <Header />
         <Routung />
         <Footer />
      </Router>
    </ThemeProvider>
    </UserContext.Provider>
  );
};

const theme = {
  colors: {
    heading: "rgb(24 24 29)",
    text: "rgba(29 ,29, 29, .8)",
    white: "#fff",
    black: " #212529",
    helper: "#8490ff",

    bg: "#F6F8FA",
    footer_bg: "#0a1435",
    btn: "rgb(98 84 243)",
    border: "rgba(98, 84, 243, 0.5)",
    hr: "#ffffff",
    gradient:
      "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    shadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
    shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  media: {
    mobile: "768px",
    tab: "998px",
  },
};

export default App;