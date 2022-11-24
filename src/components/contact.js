import React, { useRef } from "react";
import axios from 'axios';

const Contact = () => {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const phoneNumberRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();
    const contact = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneNumberRef.current.value
    };
    console.log('contact:', contact)
    axios.post('https://react-practice-b534c-default-rtdb.firebaseio.com/contacts.json',contact)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="name">name</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div>
        <label htmlFor="email">email</label>
        <input type="email" id="email" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="phoneNumber">phoneNumber</label>
        <input type="number" id="phoneNumber" ref={phoneNumberRef} />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Contact;
