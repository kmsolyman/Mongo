import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useLocation } from "react-router-dom";
import React, { useEffect ,useState} from 'react';


const HeroSection = ({ myData }) => {
  const location = useLocation();
  const { name } = myData;
 
  const [userData,setUserData]=useState({});

 const callHomePage = async()=>{
      try {
          const res = await fetch("/getdata",{
          method: "GET",
          headers: {
            "Content-Type":"application/json",
          },
   
        });

          const data = await res.json();
          setUserData(data);

        if(!res.status === 200){
             const error =  new Error(res.error);
             throw error ;
        }

      }catch (error) {
        console.log(error);
     
      }
 };
 
 useEffect(()=>{
     callHomePage();
  },[])
 
 
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            <p className="intro-data">Welcome to
             {/* {location.state.email} */}
            </p>
            <h1>{userData.name}</h1>
            <h1> {name}</h1>           
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              atque temporibus veniam doloribus libero ad error omnis voluptates
              animi! Suscipit sapiente.
            </p>
            <NavLink>
              <Button>show now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              {/* <img
                src="images/hero.jpg"
                alt="hero-section-photo"
                className="img-style"
              /> */}
               <img
                  src={"https://images.pexels.com/photos/1433191/pexels-photo-1433191.jpeg?auto=compress&cs=tinysrgb&w=600"}
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;