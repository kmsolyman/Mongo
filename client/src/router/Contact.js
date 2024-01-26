import styled from "styled-components";
import React, { useEffect ,useState} from 'react';


const Contact = () => {
  const [userData,setUserData] =useState({ name:"",email:"",phone:"",massage:"" });


  const userContact =  async()=>{
    try{
        const res = await fetch('/getdata',{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
        });
        const data = await res.json();
         console.log(data);
          setUserData({...data,name:data.name,email:data.email,phone:data.phone});

        if(!res.status===200){
            const err=new Error(res.error);
            throw err;
        }
        // catch breacket problem chacked its
    }catch(err) {
        console.log(err);
       
    }
}

useEffect(()=>{
    userContact();
},[])

const handelInput = (e)=>{
   const name = e.target.name;
   const value = e.target.value;

   setUserData({...userData,[name]:value})
}

const contactFrom =  async (e) =>{
  e.preventDefault();

 const {name,email,phone,massage} = userData ;

   const res = await fetch("/contact",{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name,email,phone,massage}),
      });
     
      const data = await res.json();
       if(!data){
        console.log("massage not send");
       }else{
        alert("massage send");
        setUserData({...userData,massage:""})
       }
}
  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.91455641541671!3d18.562061287384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1664345115285!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xeqdgwnq"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              value={userData.name}
              placeholder={userData.name}
              onChange={handelInput}
              name="name"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="email"
              value={userData.email}
              placeholder={userData.email}
              onChange={handelInput}
              autoComplete="off"
              required
            />
              <input
              type="phone"
              name="phone"
              value={userData.phone}
              placeholder={userData.phone}
              onChange={handelInput}
              autoComplete="off"
              required
            />

            <textarea
              name="massage"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"
              value={userData.massage}
              onChange={handelInput}
              >
                
              </textarea>

            <input type="submit" 
                   value="send" 
                   onClick={contactFrom}
                   />
          </form>
        </div>
      </div>
    </Wrapper>
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

export default Contact;