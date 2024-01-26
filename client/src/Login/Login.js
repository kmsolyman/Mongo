import { useContext, useState } from "react";
import { Link, useNavigate ,useLocation} from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { toast } from "react-toastify";
import Header from "../components/Header";
import style from "../Login/LoginApp.module.css"
import { UserContext } from "../App";

 
const Login = () => {
  
  const {state,dispatch} = useContext(UserContext);

  const[email,setEmail]=useState("")
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // handling the form submission
 
  const loginUser = async (e) => {
    e.preventDefault();

     const res = await fetch("/login",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email,password}),
      })
    
      const data = await res.json();
      if(res.status === 400 || !data){
        window.alert("INVILIED login")
        console.log("INVILIED  login");
      }else{
        dispatch({type:"USER", payload:true})
        window.alert("sUCCESS FULL login");
         toast.success("Login successful");
         navigate("/Home",{state:{_id:email}});
         
      }

  }

  return (
    <>
<div className={style.container}>
	<div className={style.screen}>
		<div className={style.screenContent}>
        <form className={style.login} onSubmit={loginUser} method="POST">
				<div className={style.loginField}>
					<i className={style.loginIcon}></i>
          <input
                      className={style.loginInput}
                      type="email"
                      name="email"
                      placeholder="email"
                      id="email"
                      required
                      autoComplete="off"
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}/>
        </div>
				<div className={style.loginField}>
					<i className={style.loginIcon }></i>
				  <input
                      className={style.loginInput}
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                    />
        </div>
				<button type="sumbit" className={style.loginSubmit}>
					<span className={style.buttonText}>Log In Now</span>
					<i className={style.ButtonbuttonIcon}></i>
				</button>
			</form>
			<div className={style.socialLogin}>
				<Link className={style.socialLogin} to="/">Register</Link>
				<div className={style.socialIcons}>
					<a href="#" className={style.socialLoginIcon }></a>
					<a href="#" className={style.socialLoginIcon}></a>
					<a href="#" className={style.socialLoginIcon }></a>
				</div>
			</div>
		</div>
		<div className={style.screenBackground}>
			<span className={style.screenBackgroundShape.screenBackgroundShape4}></span>
			<span className={style.screenBackgroundShape.screenBackgroundShape3}></span>
			<span className={style.screenBackgroundShape .screenBackgroundShape2}></span>
			<span className={ style.screenBackgroundShape. screenBackgroundShape1}></span>
		</div>
	</div>
</div>   
    </>
  );
};

export default Login;