import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";

import apiDb from '../api/apiDb';
import { useNavigate, Link } from "react-router-dom";

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
  Navigate("/home");
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
      <Form.Group >
        <Row className="rowLinksForgotPassword-SignUp">
          <Col xs={6}>
            <Link className="linkToForgotPassword" to="/solChangePass" >
              Forgot password
            </Link> 
          </Col>
          <Col xs={6}>
            <Link className="linkToSignUp" to="/signup" >
              Don't have an account... don't worry create one
            </Link>  
          </Col>
        </Row>            
             
      </Form.Group>      

      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );
};



