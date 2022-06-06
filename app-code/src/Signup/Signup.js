// Rahul

import React, {useState, useRef, useEffect} from 'react';
import {auth,db} from "../config/firebase_init"
import{ getDoc, doc } from "@firebase/firestore";
import { createUserWithEmailAndPassword} from 'firebase/auth';
import './signup.css'
import {Link} from "react-router-dom";

export default function Signup(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [errorMessage2, setErrorMessage2] = useState("") ;


   
    async function handleSignUp(){
        const docRef= doc(db, "VerificationPin", "52osZGHvawUe4x8yvWuh");
        const docSnap = await getDoc(docRef);
        const masterPin= docSnap.data()
        const inputEmail = document.getElementById("email").value;
        const inputPassword = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;
        const userPin =  document.getElementById("pin").value;
        console.log(inputEmail);
        console.log(inputPassword);
        console.log(confirmPassword);

        if (userPin === masterPin.pin && inputPassword === confirmPassword){
            try {
                await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
                setErrorMessage2("");
                return(
                    <Link to={'/'}/>
                );
            }
            catch {
                setErrorMessage2("Invalid email or password.");
                emailRef.current.value = '';
                passwordRef.current.value = '';
            }     
        } else if (userPin === masterPin.pin) {
            setErrorMessage2("Passwords do not match.");
            emailRef.current.value = '';
            passwordRef.current.value = '';
        } else if(inputPassword === confirmPassword) {
            setErrorMessage2("Incorrect pin.");
            emailRef.current.value = '';
            passwordRef.current.value = '';
        }
    }

    return(
        <div className={"main-container"}>
            <div className={"fields"}>
                <h2>Register User</h2>
                <input className ='email' placeholder ="Enter Email..." type='text' id= 'email' ref = {emailRef} />
                <input className ='password' placeholder='Enter Password...' type = 'password' id = "password" ref = {passwordRef}/>
                <input className = 'confirm-password' placeholder='Re-Enter Password...' type = 'password' id = "confirm-password" ref = {confirmPasswordRef}/>
            </div>
            <div className={"pinz"}>
                <input className = 'pin' placeholder='Enter Verification Pin...' type = 'text' id = "pin"/>
                <h4 className = 'error2'> {errorMessage2} </h4>
                <button className={"signup-btn"} onClick={handleSignUp} >Sign Up</button>
            </div>
        </div>
    );
}