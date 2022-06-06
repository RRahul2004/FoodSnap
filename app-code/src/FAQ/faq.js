// Rayyan

import React, { useState } from 'react';
import './faq.css';
/**
  * Puts all functions into one function so they can run together
  *
  * @returns {html} returns html code for FAQ header
*/
function Fraq() {
  return (
      <div className='functions'>
        <FAQheader>
          <FAQ icon = "Frequently Asked Questions">
            <DropdownMenu></DropdownMenu>
          </FAQ>
        </FAQheader>
      </div>
  );
}

/**
 * Creates header for FAQ page
 *
 *
 * @returns {html} returns html code for FAQ header
 * @param props passes in children of the tag into the function
 */
function FAQheader(props){
  return(
      <nav className='header'>
        <ul className='header-nav'>  {props.children} </ul>
      </nav>
  );
}

/**
 * Creates dropdown button for FAQ header and allows questions and answers to be seen ultimately
 *
 *
 * @returns {html} html code for FAQ section (dropdown, questions,)
 * @param props passes in children of the tag into the function
 */
function FAQ(props){
  const [open, setOpen] = useState(false);
  return(
      <li className='primary-dropdown'>
        <a href='#' className='dropdown-button' onClick={() => setOpen (! open)}>
          {props.icon}
        </a>

        {open && props.children}
      </li>
  )
}

/**
  * Used to hold a dropdown for the questions
*/
function DropdownMenu(){

  /**
   * Used to display answers for questions on FAQ when each individual question is clicked
   *
   *
   * @returns {number} answers for questions
   * @param props passes in children of the tag into the function
   */
  function QuestionAnswer(props){
    return(
        <a href='#' className='question-answer'>
          {props.children}
        </a>
    )
  }

  /**
   * Allows for questions to be opened and closed on click and start off as closed
   *
   *
   * @returns {html} opens questions on click and closes questions on click
   * @param props passes in children of the tag into the function
   */
  function DropdownQuestion(props){
    const [open, setOpen] = useState(false);
    return(
        <div>
          <a href='#' className='dropdown-question' onClick={() => setOpen (! open)}>
            {props.info}
          </a>
          {open && props.children}
        </div>
    )
  }
  return(
      <div className='dropdown'>
        <DropdownQuestion info="What do we do?"><QuestionAnswer> We want to bring our community and various food banks within our community together. We want to bring our community and various food banks within our community together.We want to bring our community and various food banks within our community together.
        </QuestionAnswer></DropdownQuestion>
        <DropdownQuestion info="What is our mission?"><QuestionAnswer> We want to bring our community and various food banks within our community together. We want to bring our community and various food banks within our community together.We want to bring our community and various food banks within our community together.
        </QuestionAnswer></DropdownQuestion>
        <DropdownQuestion info="Where are we located?"><QuestionAnswer> We are located in Mississauga, ON
        </QuestionAnswer></DropdownQuestion>
        <DropdownQuestion info="Who are we?"><QuestionAnswer> We are a small group of highschool students looking to make a positive change in our community.
        </QuestionAnswer></DropdownQuestion>
        <DropdownQuestion info="How did we build this app?"><QuestionAnswer> We coded it with React JS and Firebase
        </QuestionAnswer></DropdownQuestion>
      </div>
  );
}

export default Fraq;