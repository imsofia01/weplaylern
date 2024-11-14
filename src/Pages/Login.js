import React, { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { app } from "../components/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const Swal = require('sweetalert2')
    
    
    const auth = getAuth(app);
    const navigate = useNavigate();

    // Check if email is stored in localStorage when the component mounts
    useEffect(() => {
        const savedEmail = localStorage.getItem('email');
        if (savedEmail) {
            setEmail(savedEmail);
            setRememberMe(true);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            
            const userName = user.displayName || 'Guest';
            localStorage.setItem('userName', userName);
            // console.log("Login Successfully");
            setError(''); // Clear any previous errors
            // alert('Login successful!'); 
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login Successfully",
                showConfirmButton: false,
                timer: 1500
              });

             // Save email to localStorage if Remember Me is checked
             if (rememberMe) {
                localStorage.setItem('email', email);
            } else {
                localStorage.removeItem('email');
            }
          
            navigate("/profile")
        } catch (err) {
            console.log(err);
            setError(err.message); // Display error message
            alert('Worng Password or Email');
        }
    }

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    return(
        <body className="min-h-screen flex items-center justify-center">
        <div className="login-container bg-[#8EA1F2] shadow-lg w-[900px] h-[567px] rounded-2xl flex m-50">
        <div className="box-1 hidden md:block w-full md:w-1/2 h-auto items-center justify-center rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none bg-[#8EA1F2] ">
                <img src="assets/logo.png" alt="My Image" className="h-[431px] flex justify-center drop-shadow-lg ml-[-13px] mt-[6rem]" />
            </div>
   
            <div className="box-2 bg-white flex-col h-[569px] p-[18px_38px] rounded-2xl md:rounded-r-2xl  md:w-1/2">
            <form onSubmit={handleSubmit}>
                <div className="login">
                    <h2 className="font-medium text-gray-900 pt-7 pb-6 text-[1.6rem]">Login</h2>
                    <p className="-mt-5 text-gray-600 text-sm"> Please enter your login details to signin.</p>
                </div>
    
         
    
                <div className="form-group relative mt-3">
                    <label className="email absolute bg-white px-2 left-4 top-[8px] text-gray-500 text-sm" htmlFor="email">Email</label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} id="email" name="Email" required
                        className="border border-black rounded-lg h-9 w-full px-4 mt-5" />
                </div>
    
                <div className="form-group relative">
                    <label className="pass absolute bg-white px-2 left-4 top-[8px] text-gray-500 text-sm" htmlFor="password">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} id="password" name="password" required
                        className="border border-gray-700 rounded-lg h-9 w-full px-4 mt-5" />
                </div>

                <div className="inline-flex items-center">
                            <label className="flex items-center cursor-pointer relative mt-5">
                                <input 
                                    type="checkbox" 
                                    checked={rememberMe} 
                                    onChange={handleRememberMeChange} 
                                    className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-[#8EA1F2] checked:border-[#8EA1F2]" 
                                    id="check" 
                                />
                                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <div className="mt-5">
                                <label className="cursor-pointer ml-2 text-slate-600 text-sm" htmlFor="check-2">Remember Me</label>
                                <label className="cursor-pointer ml-36 text-slate-600 text-sm" htmlFor="check-2">Forgot Password</label>
                            </div>
                        </div>

        <button type="submit" className="button-block bg-[#8A9BE9] hover:bg-blue-500 h-12 w-full rounded-lg text-lg font-semibold mt-10 text-gray-900 ">Login</button>         
      <p className="cbx mt-2 text-gray-600 text-xs">Don't have an account? <Link to="/SignUp" className="text-[#8094eb]"> SignUp  </Link></p>

      </form>  
                <div className="separator flex items-center mt-7">
                    <div className="line h-px bg-gray-400 flex-1"></div>
                    <p className="px-8 text-gray-400 text-sm">or continue</p>
                    <div className="line h-px bg-gray-400 flex-1"></div>
                </div>
    
    
                <div className="icons mt-5 flex justify-between px-[78px]">
                    <a className="gmail" href="https://mail.google.com/" aria-label="Gmail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 193">
              <path fill="#4285f4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"/>
              <path fill="#34a853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"/>
              <path fill="#ea4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"/>
              <path fill="#fbbc04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"/>
              <path fill="#c5221f" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"/>
            </svg>
                    </a>
                    <a className="facebook" href="https://www.facebook.com/" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256">
            <path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/>
            <path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z"/>
          </svg>
                    </a>
                    <a className="icloud" href="https://www.icloud.com/" aria-label="iCloud">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 315">
          <path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262"/>
        </svg>
                    </a>
                    <a className="twitter" href="https://twitter.com/" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 209">
          <path fill="#55acee" d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435c0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"/>
        </svg>
                    </a>
                </div>
            </div>
        </div>
       
    </body>
    )
}

export default Login;