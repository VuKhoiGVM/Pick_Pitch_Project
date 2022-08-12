import "./register.css";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
      });
    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev,[e.target.id]: e.target.value }));
        console.log(e.target.value)
      };
      const navigate = useNavigate()

      const handleClick = async (e) => {
        e.preventDefault();
        console.log(credentials)
        try {
            
          const res = await axios.post("http://localhost:8800/api/auth/register", credentials);
          navigate("/")
          
        } catch (err) {
            console.log("Loi")
        }
      };
    
   return (
       <div class="main-wrap">
           <div class="form-wrap">
               <h1>SIGN <span>UP</span></h1>
               <h6>Welcome to Hotel Booking</h6>
               <form class="form">
                   <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange}/>
                   <br></br>
                   <input type="username" name="username" id="username" placeholder="Username" onChange={handleChange}/>
                   <br></br>
                   <input type="password" name="password" id="password" placeholder="Password" onChange={handleChange}/>
                   <br></br>
                   <input type="password" name="cpass" id="cpass" placeholder="Confirm Password" />
                   <br></br>
                   <button onClick={handleClick}  type="submit" class="form-btn">SIGN UP</button>
               </form>
               <span class="sign-up-with">Or sign up with</span>
               <div class="social-logo">
                    <a href="https://vnexpress.net/" title="Facebook">
                        <img src="https://github.com/surajaswal-dev/signin-signup-pages/blob/main/signup-form-0/images/fb.png?raw=true" alt="Facebook"/>
                    </a>
                    <a href="https://vnexpress.net/" title="Google">
                        <img src="https://raw.githubusercontent.com/surajaswal-dev/signin-signup-pages/main/signup-form-0/images/google.png" alt="Google"/>
                    </a>
                    <a href="https://vnexpress.net/" title="Twitter">
                        <img src="https://raw.githubusercontent.com/surajaswal-dev/signin-signup-pages/main/signup-form-0/images/twitter.png" alt="Twitter"/>
                    </a>
               </div>
           </div>
    </div> );
};

export default Register;