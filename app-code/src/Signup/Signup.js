import React, {useState, useRef, useEffect} from 'react';
import {auth,db} from "../config/firebase_init"
import{collection, getDoc, doc} from "@firebase/firestore";
import { createUserWithEmailAndPassword} from 'firebase/auth';
import './signup.css'

export default function Signup(){
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [errorMessage, setErrorMessage] = useState("") ;


   
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
        if(userPin === masterPin.pin && inputPassword === confirmPassword){
            try{
            await createUserWithEmailAndPassword(auth,emailRef.current.value, passwordRef.current.value);
            setErrorMessage('');
            }
            catch{
                setErrorMessage("Invalid email or password.");  
            }     
        } else if (userPin === masterPin.pin){
            setErrorMessage("Passwords do not match.");
        }else if(inputPassword === confirmPassword){
            setErrorMessage("Incorrect pin.");
        }
        
        } 

    return(
        <div>  
            <div> 
                <input className ='email' placeholder ="Enter Email..." type='text' id= 'email' ref = {emailRef} /> 
                <div className = 'error'> {errorMessage} </div>
                <input className ='password' placeholder='Enter Password...' type = 'password' id = "password" ref = {passwordRef}/>
                <input className = 'confirm-password' placeholder='Re-Enter Password...' type = 'password' id = "confirm-password" ref = {confirmPasswordRef}/>
                <input className = 'pin' placeholder='Enter Verification Pin...' type = 'text' id = "pin"/>
            </div>
            <button onClick={handleSignUp} > SignUp</button>
        </div>

    )
}