import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import apiDb from "../api/apiDb";

import { Container, Row, Col } from "react-bootstrap";

// const bcrypt = require('bcryptjs');

export const Bills = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  //BACKEND CONNECTION
  const sendFetch = async () => {
    const user = {
      email: `${values.email}`,
      pass: `${values.password}`,
      idclient: "1",
    };

    const { data } = await apiDb.post("/createUser", user);
    localStorage.setItem("token", data);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log("No Encriptado: ", values.password);
    // let salt = bcrypt.genSaltSync(10);
    // setValues({password: bcrypt.hashSync(values.password, salt)});
    // console.log("Encriptado: ", values.password);

    if (values.password === values.passwordConfirmation) {
      sendFetch();
    }
  };

  return (
    <Container className="reservationForm" fluid>
      <Form className="formBills" onSubmit={handleSubmit}>
        <Row>
          <Col xs={12}>
            <Form.Label className="labelBills">Bills</Form.Label>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Form.Group className="mb-3">
              <Form.Label className="labelForm">Bill number</Form.Label>
                <Form.Control 
                    type="password" 
                    name="findBill"
                    placeholder="Type the bill number"
                    onChange={handleChange}
                    required
                />
              </Form.Group>
          </Col>          
        </Row>
        
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>

    

    </Container>
  );
};
