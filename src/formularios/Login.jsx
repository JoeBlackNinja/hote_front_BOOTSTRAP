import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import apiDb from '../api/apiDb'

//const bcrypt = require('bcryptjs'); 

export const Login = () => {
  const [values,setValues] = useState({
    email:"",
    password:""
  });
  
  //BACKEND CONNECTION
  
  /*

  const sendFetch = async () => {
    const user = {
      email:`${values.email}`, 
      pass:`${values.password}`    
  }
  
  const {data} = await apiDb.post('/login', user)
  localStorage.setItem('token', data);
  console.log(data);
  }

  */

  const handleChange = (event) => {  
    setValues({
      ...values,
      [event.target.name] : event.target.value
    })  
  }

  const handleSubmit = (event) => {
    event.preventDefault();   

    /* sendFetch(); */
    const user = {
      id:28,
      email:values.email,
      pass: values.password,
      name:"Jose",
      last_name:"Garrapata",
      address:"Calle Chinche 234",
      city:"Zapopan",
      state:"Jalisco",
      country:"Sri Lanka",
      cellphone:"3312345678",
      account_type:true      
    }

    /* let salt = bcrypt.genSaltSync(10);
    let cryptoInfo = bcrypt.hashSync(user, salt);  */

/*     localStorage.setItem('token', userString);
    let c = localStorage.getItem('token');
    console.log(c); */

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



