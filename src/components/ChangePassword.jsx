import { Form, Button, Row, Col, Alert } from "react-bootstrap";
import { useState } from "react";

import apiDb from '../api/apiDb';
import { useNavigate, Link } from "react-router-dom";

//const bcrypt = require('bcryptjs'); 

export const ChangePassword = () => {
  const [values,setValues] = useState({
    password:"",
    passwordConfiramtion:""
  });

  const Navigate = useNavigate();
  
  //BACKEND CONNECTION
  const sendFetch = async () => {
    const data_ = localStorage.getItem('user');
    const id = JSON.parse(data_);
    if(values.password === values.passwordConfiramtion){
      const user = {
        id: data.id,
        passwordConfiramtion:`${values.passwordConfiramtion}`    
      }
      console.log(user);
      const {data} = await apiDb.post('/changePass', user);

      {/* <Alert variant="success">Cantilever</Alert> */}

      console.log(data);

    }
    
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
      <Form.Label className="labelBills">Change</Form.Label>
      <Form.Label className="labelBills">Password</Form.Label>
      <Form.Group className="mb-3">        
        <Form.Label className="labelForm">New password</Form.Label>
        <Form.Control
          type="password"
          name="email"
          placeholder="New password"
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label className="labelForm">Confirm new password</Form.Label>
        <Form.Control 
          type="password" 
          name="password"
          placeholder="Confirm new password"
          onChange={handleChange}
          required
        />
      </Form.Group>
      {/* <Form.Group >
        <Row className="rowLinksForgotPassword-SignUp">
          <Col xs={6}>
            <Link className="linkToForgotPassword" to="/" >
              Forgot password
            </Link> 
          </Col>
          <Col xs={6}>
            <Link className="linkToSignUp" to="/signup" >
              Don't have an account... don't worry create one
            </Link>  
          </Col>
        </Row>             
      </Form.Group>    */}   

      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );
};
