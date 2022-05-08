import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import apiDb from '../api/apiDb'

// const bcrypt = require('bcryptjs');

export const Login = () => {
  const [values,setValues] = useState({
    email:"",
    password:""
  });
  
  //BACKEND CONNECTION
  const sendFetch = async () => {
    const user = {
      email:`${values.email}`, 
      pass:`${values.password}`    
  }
  
  const {data} = await apiDb.post('/login', user)
  localStorage.setItem('token', data);
  console.log(data);
  }

  const handleChange = (event) => {  
    setValues({
      ...values,
      [event.target.name] : event.target.value
    })  
  }

  const handleSubmit = (event) => {
    event.preventDefault();   

    // console.log("No Encriptado: ", values.password);
    // let salt = bcrypt.genSaltSync(10);
    // setValues({password: bcrypt.hashSync(values.password, salt)}); 
    // console.log("Encriptado: ", values.password);
    sendFetch();    
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

      
      <Form.Group className="mb-3" >
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};



