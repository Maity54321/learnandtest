import React from 'react';
import "../css/Register.css";

const Register = () => {
  return (
    <>
        <div className='div1'>
          <form>
            <h2>Register your form</h2>
            <p>Enter your name:</p>
            <input type="text" />
            <p>Enter your email:</p>
            <input type="email" />
            <p>Enter your Phone No:</p>
            <input type="number" />
            <p>Enter your password:</p>
            <input type="password" /><br />
            <button>Submit</button>
          </form>
        </div>
    </>
  )
}

export default Register
