import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import googlelogo from "../assets/google-logo.svg";

const Login = () => {
  const { login, loginWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      login(email, password).then((userCredential)=>{
        const user = userCredential.user;
        alert("Login Successfull !!!");
        navigate(from, {replace: true})

      })
      .catch((error) =>{
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      })
      
    }

    const handleRegister = () => {
        loginWithGoogle()
            .then((result) => {
                alert("Sign up with Google successful!");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);
            });
    }
  return (
    <div>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Login</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <form onSubmit={handleLogin} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" />
                                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                    </div>
                                    <div className="relative">
                                        <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" />
                                        <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                    </div>
                                    {error ? <p className='text-red-600 text-base'> Email or Password is not correct</p>:""}
                                    <p>You haven't an account. Please <Link to="/sign-up" className='text-blue-600 underline'>SignUp</Link> Here</p>
                                    <div className="relative">
                                        <button className="bg-blue-500 text-white rounded-md px-6 py-1">Login</button>
                                    </div>
                                </form>
                            </div>
                            <hr />
                            <div className='flex w-full items-center flex-col mt-5 gap-3'>
                                <button onClick={handleRegister} className='block' ><img src={googlelogo} className='w-12 h-12 inline-block' alt="Google Logo" />Login with Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Login
