import { Form, Button } from "react-bootstrap";
import { useState } from "react";

import apiDb from '../api/apiDb';

import { useNavigate } from "react-router-dom";
=======
import { Link } from "react-router-dom";


//const bcrypt = require('bcryptjs'); 

export const Login = () => {
  const [values,setValues] = useState({
    email:"",
    password:""
  });

  const Navigate = useNavigate();
  
  //BACKEND CONNECTION
  const sendFetch = async () => {
    const user = {
      email:`${values.email}`, 
      pass:`${values.password}`    
  }
  
  const {data} = await apiDb.post('/login', user)
  localStorage.setItem('client', JSON.stringify(data));
  }

 

  const handleChange = (event) => {  
    setValues({
      ...values,
      [event.target.name] : event.target.value
    })  
  }

  const handleSubmit = (event) => {
    event.preventDefault();   
    sendFetch();
    Navigate("/home");
  }

  return (
    <Form className="formBills" onSubmit={handleSubmit}>   
      <Form.Label className="labelBills">Log In</Form.Label>
      <Form.Group className="mb-3">        
        <Form.Label className="labelForm">Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="labelForm">Password</Form.Label>
        <Form.Control 
          type="password" 
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-2">
          <Link to="/" >
            Forgot password
          </Link>      
      </Form.Group>      

      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );
};



