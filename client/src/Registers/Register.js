import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { Link } from "react-router-dom";
import style from "../Registers/App.module.css"
// import { useAuth } from "../store/auth";
// import { useAuth } from "../router/auth";

import { toast } from "react-toastify";

 const Register = () => {

  const [user, setUser] = useState({
    name :"",
    email :"",
    phone:"",
    work:"",
    address:"",
    password:"",
    cpassword:""
  });

  const navigate = useNavigate();
// const { storeTokenInLS, API } = useAuth();
// const URL = `${API}/api/auth/register`;
// handling the input values
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

     const {name,email,phone,work,address,password,cpassword} = user
      
     const res = await fetch("./Register",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name,email,phone,work,address,password,cpassword}),
      })
    
      const data = await res.json();
  
      if(data.status === 422 || !data){
        window.alert("INVILIED REGISTRATION")
        console.log("INVILIED  REGISDTER");
      }else{
        window.alert("sUCCESS FULL  REGISTRATION");
        console.log("sUCCESS FULL REGISDTER");
        toast.success("REGISDTER successful");
         navigate("/Login");
      }


  }

  return (
    <>
    <div className={style.container}>
	<div >
		<div className={style.screen__content}>
        <form className={style.login} onSubmit={handleSubmit} method="POST">
				<div className={style.login__field}>
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
					<i className={style.login__icon}></i>
                    <input
                     className={style.login__input}
                      type="email"
                      name="email"
                      placeholder="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
        </div>
        <div className={style.login__field}>
					<i className={style.login__icon }></i>
                    <input
                     className={style.login__input}
                      type="number"
                      name="phone"
                      placeholder="phone"
                      id="phone"
                      required
                      // autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />
        </div>
        <div className={style.login__field}>
					<i className={style.login__icon}></i>
                    <input
                      className={style.login__input}
                      type="text"
                      name="work"
                      placeholder="work"
                      id="work"
                      required
                      autoComplete="off"
                      value={user.work}
                      onChange={handleInput}
                    />
        </div>
        <div className={style.login__field}>
					<i className={style.login__icon}></i>
                    <input
                      className={style.login__input}
                      type="text"
                      name="address"
                      placeholder="address"
                      id="address"
                      required
                      autoComplete="off"
                      value={user.address}
                      onChange={handleInput}
                    />
        </div>
        <div className={style.login__field}>
					<i className={style.login__icon}></i>
                    <input
                      className={style.login__input}
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
        </div>
        <div className={style.login__field}>
					<i className={style.login__icon}></i>
                    <input
                      className={style.login__input}
                      type="password"
                      name="cpassword"
                      placeholder="cpassword"
                      id="cpassword"
                      required
                      autoComplete="off"
                      value={user.cpassword}
                      onChange={handleInput}
                    />
        </div>
				<button type="sumbit" className={style.login__submit}>
					<span className={style.button__text}>Register In Now</span>
					<i className={style.button__icon }></i>
				</button>
			</form>
			<div className={"social-login"}>
				{/* <Link className={"social-login"} to="/Login">Register</Link> */}
				<div className={"social-icons"}>
					<a href="#" className={"social-login__icon fab fa-instagram"}></a>
					<a href="#" className={"social-login__icon fab fa-facebook"}></a>
					<a href="#" className={"social-login__icon fab fa-twitter"}></a>
				</div>
			</div>
		</div>
		<div className={"screen__background"}>
			<span className={"screen__background__shape screen__background__shape4"}></span>
			<span className={"screen__background__shape screen__background__shape3"}></span>
			<span className={"screen__background__shape screen__background__shape2"}></span>
			<span className={"screen__background__shape screen__background__shape1"}></span>
		</div>
	</div>
</div>  


     {/* <Wrapper>
      <section>
             <form onSubmit={handleSubmit} method="POST">
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
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
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="phone"
                      id="phone"
                      required
                      // autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="work">Work</label>
                    <input
                      type="text"
                      name="work"
                      placeholder="work"
                      id="work"
                      required
                      autoComplete="off"
                      value={user.work}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                    <div>
                    <label htmlFor="cpassword">cPassword</label>
                    <input
                      type="password"
                      name="cpassword"
                      placeholder="cpassword"
                      id="cpassword"
                      required
                      autoComplete="off"
                      value={user.cpassword}
                      onChange={handleInput}
                    />
                  </div>

                  <br />
                  <Button type="submit" 
                           className="btn btn-submit"
                            // onClick={PostData}
                           >
                           Register Now
                  </Button>
                </form>
      </section>
      </Wrapper> */}
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

      input[type="submit"] {
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
}
`;
export default Register;