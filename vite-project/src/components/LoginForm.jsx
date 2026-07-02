
 import React, { useState } from 'react'
 import "./Login.css";

 const LoginForm = () => {
 const [isLogin,setIsLogin] = useState(true);

   return (
     <div className="container" >
       <div className='form-container'>
        <div className='form-toggle'>
            <button className= {isLogin ? "active" : ""} onClick={ () => setIsLogin(true)}>Login</button>
            <button className={ !isLogin ? "active" : ""} onClick={ () => setIsLogin(false)}>SignUp</button>
        </div>
        {isLogin ? (
          <div className='form'>
            <h2>Login Form</h2>
            <input type='email' placeholder='Email'></input>
            <input type='password' placeholder='Password'></input>
            <a href='/'> Forgot password?</a>
            <button>Login</button>
            <p> Not a member? <a onClick={() => setIsLogin(false)}>Signup Now</a></p>
          </div>
        ) : (
          <div className='form'>
            <h2>Sign Up Form</h2>
            <input type='text' placeholder='Full Name'></input>
            <input type='email' placeholder='Email'></input>
            <input type='password' placeholder='Password'></input>
            <input type='password' placeholder='Confirm Password'></input>
            <button>Sign Up</button>
            <p>Already a member? <a onClick={() => setIsLogin(true)}>Login Now</a></p>
          </div>
        )}
       </div>
     </div>
   )
 }
 
 export default LoginForm;
 