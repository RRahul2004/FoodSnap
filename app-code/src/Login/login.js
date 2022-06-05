import React, {useState, useRef} from 'react';
import {auth} from "../config/firebase_init"
import {signInWithEmailAndPassword } from 'firebase/auth';
import './login.css'

export default function Login(){
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  
  async function handleLogin(){
    try{
      await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
      setErrorMessage("");
    } 
    catch{
      setErrorMessage("Incorrect email or password.")
      emailRef.current.value = '';
      passwordRef.current.value = '';
    }
  }

  return (
    <div className ='main'>
      <h1 className ='header'> FoodSnap </h1>
      <h2 className ='subheader'> Login to Your Account</h2>
      <h2 className ='guest'> Browse as Community Member </h2>
      <h3 className ='caption'> New to FoodSnap? </h3>
      <hr className = 'line-left'></hr>
      <hr className ='line-right'></hr>
      <div>
        <input className ='email' placeholder ="Enter Email..." type='text' ref ={emailRef}/> 
        <div className = 'error'> {errorMessage} </div>
        <input className ='password'placeholder='Enter Password...' type = 'password' ref = {passwordRef}/>
      </div>
      <button className ='signUp'> Sign Up </button>
      <button className ='login' onClick={handleLogin}> Login </button>
      <button className ='browse'> Browse...</button>

    </div>
  )
} 








