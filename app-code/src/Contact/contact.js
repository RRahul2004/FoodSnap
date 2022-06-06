// Rayyan

import React, { useState } from 'react';
import { db } from "../config/firebase_init";
import { set, ref } from 'firebase/database';
import './contact.css';

/*
  * Puts all functions into one function so they can run together
  *
  * @returns {html} returns html code for FAQ header
*/
export function ContactPage() {
  return (
      <Contact />
  );
}

/*
  * Allows user to fill in contact form and once send is clicked the information is sent to firebase realtime database
  *
  * @returns {html} information to firebase realtime database
*/
function Contact (){
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = ()=>{
    if (name && email && subject && message){
      const userInfortmationRef = ref(db, `contactdata/${name}`)
      set(userInfortmationRef,{
        name: name,
        email: email,
        subject: subject,
        message: message
      })
      alert("Message sent successfully")
    }
    else{
      alert("one or more fields invalid");
    }
  }
  return (
      <div className="contact-outer-container">
        <p>Contact Us</p>
        <form className='contact-form' onSubmit={handleSubmit}>
          <input minLength={1} type='text' placeholder='Name'
                 onChange={(event)=>{
                   setName(event.target.value);
                 }}/>
          <input minLength={1} type='email' placeholder='Email'
                 onChange={(event)=>{
                   setEmail(event.target.value);
                 }}/>
          <input minLength={1} type='text' placeholder='Subject'
                 onChange={(event)=>{
                   setSubject(event.target.value);
                 }}/>
          <textarea minLength={1} type='text' placeholder='Message...'
                    onChange={(event)=>{
                      setMessage(event.target.value);
                    }}></textarea>
          <button>Submit</button>
        </form>
        <div className='privacy'>
                <a href="https://www.termsfeed.com/live/0e4de4cc-a45c-4a83-a952-746cc14482d2" target="_blank" rel="noreferrer">
                    <button className='priv-btn'>Privacy</button>
                </a>
            </div>
      </div>
  )
}
