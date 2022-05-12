import { Form, Button, Row, Col } from "react-bootstrap";
import { useState } from "react";

import apiDb from '../api/apiDb';
import { useNavigate, Link } from "react-router-dom";

export const ChangePassSol = () => {
  const [values, setValues] = useState({
    id:"",
    email:""
  });

  const Navigate = useNavigate();

  //BACKEND CONNECTION
  const sendFetch = async () => {
    const user = {
      email: `${values.email}`,
    };
    const { data } = await apiDb.post("/solChangePass", user);
    setValues({
        ...values,
        id:data.id
    });
    let dataJson = JSON.stringify(data);
    localStorage.setItem('user',dataJson);
    Navigate("/home");
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendFetch();
  };

  return (
    <Form className="formBills" onSubmit={handleSubmit}>
      <Form.Label className="labelBills">Restore</Form.Label>
      <Form.Label className="labelBills">Password</Form.Label>
      <Form.Group className="mb-3">
        <Form.Label className="labelForm">Email registered</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Email registered"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  );
};
