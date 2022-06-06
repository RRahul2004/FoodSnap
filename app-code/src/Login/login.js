// Rahul

import React, {useState, useRef} from 'react';
import {auth} from "../config/firebase_init"
import {signInWithEmailAndPassword } from 'firebase/auth';
import './login.css'
import {Link} from "react-router-dom";
import Landing from '../Landing/landing';

export default function Login(){
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errorMessage, setErrorMessage] = useState("");

  /**
   *
   * @returns {Promise<void>}
   */
  async function handleLogin(){
    try {
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
      <div className={"main"}>
        <div className={"main-content"}>
          <div className={"login-info"}>
            <h2>Login</h2>
            <input className ='email' placeholder ="Enter Email..." type='text' ref ={emailRef}/>
            <input className ='password' placeholder='Enter Password...' type = 'password' ref = {passwordRef}/>
            <div className = 'error'> {errorMessage} </div>
            <button className ='login' onClick={handleLogin}> Login </button>
            <h3>- - - - - Don't Have an account? - - - - -</h3>
            <Link to='/signup'>
              <button className ='signUp'> Sign Up </button>
            </Link>
          </div>
          <div className ='guest'>
            <h2> Browse as Community Member </h2>
            <Link to='/'>
              <button> Browse...</button>
            </Link>
          </div>
        </div>
        <div className='privacy'>
          <a href="https://www.termsfeed.com/live/0e4de4cc-a45c-4a83-a952-746cc14482d2" target="_blank" rel="noreferrer">
              <button className='priv-btn'>Privacy</button>
          </a>
        </div>
      </div>
  )
} 








