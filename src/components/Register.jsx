import React, { useState, version } from 'react';
import "../css/Register.css";

const Register = () => {
    const initialState = {
        name:"",
        email:"",
        phone:0,
        password:""
    }
    const [form, setForm] = useState(initialState);

    const handleChange = (event) =>{
        setForm({...form, [event.target.name]:event.target.value});
        console.log(form);
    }
  return (
    <>
        <div className='div1'>
          <form>
            <h2>Register your form</h2>
            <p>Enter your name:</p>
            <input type="text" name='name' onChange={(e)=>handleChange(e)} />
            <p>Enter your email:</p>
            <input type="email" name='email' />
            <p>Enter your Phone No:</p>
            <input type="number" name='phone' />
            <p>Enter your password:</p>
            <input type="password" name='password' /><br />
            <button onClick={hanldeSave}>Submit</button>
          </form>
        </div>
    </>
  )
}

export default Register
