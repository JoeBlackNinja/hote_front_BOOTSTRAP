import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import apiDb from "../api/apiDb";

import { Container, Row, Col } from "react-bootstrap";

// const bcrypt = require('bcryptjs');

export const Anomalies = () => {    
  //BACKEND CONNECTION FIND_CLIENT
  const [formElementDisabled, setFormElementDisabled] = useState(true);  
  const [clientMail, setClientMail] = useState("");

  const [values, setValues] = useState({
    email: "",
    name:"",
    last_name:"",
    address:"",
    city:"",
    state:"",
    country:"",
    cellphone:""
  });
  
  const handleChangeFind = (event) => {
    setClientMail(event.target.value);
  };

  const handleSubmitFind = async (event) => {
    event.preventDefault();
    const user = { email: `${clientMail}` };
    const { data } = await apiDb.post("/consultClient", user);
    setValues({
        email: data.email,
        name:data.name,
        last_name:data.last_name,
        address:data.address,
        city:data.city,
        state:data.state,
        country:data.country,
        cellphone:data.cellphone
    });
    console.log(values);
  };

 

//   const sendFetch = async () => {
//     const user = {
//       email: `${values.email}`,
//       pass: `${values.password}`,
//       idclient: "1",
//     };

//     const { data } = await apiDb.post("/createUser", user);
//     localStorage.setItem("token", data);
//   };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (values.password === values.passwordConfirmation) {
//       sendFetch();
//     }
//   };

  return (
    <Container className="reservationForm" fluid>
      <Form className="formBills" onSubmit={handleSubmitFind}>
        <Row>
          <Col xs={12}>
            <Form.Label className="labelBills">Anomalies</Form.Label>
          </Col>
        </Row>
        
        <Row>
          <Col xs={8}>
            <Form.Group className="mb-1">
              <Form.Label className="labelForm">Email client</Form.Label>
              <Form.Control
                type="string"
                name="email"
                placeholder="Type client's email"
                onChange={handleChangeFind}
                autoFocus
                required
              />
            </Form.Group>
          </Col>

          <Col xs={4} className="colAnomalies">
            <Col xs={12} className="colAnomalies3">
              <Button className="buttonAnomaliesFindUser" variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Col>
        </Row>

        <Row>
        <Col xs={12}>
            <Form.Group className="mb-1">
              <Form.Label className="labelForm">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Name"
                onChange={handleChange}
                disabled={formElementDisabled}
                value={values.email}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group className="mb-1">
              <Form.Label className="labelForm">Name</Form.Label>
              <Form.Control
                type="string"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                disabled={formElementDisabled}
                value={values.name}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group className="mb-1">
              <Form.Label className="labelForm">Last name</Form.Label>
              <Form.Control
                type="string"
                name="lastnameClient"
                placeholder="Last name"
                onChange={handleChange}
                disabled={formElementDisabled}
                value={values.last_name}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Form.Group className="mb-1">
              <Form.Label className="labelForm">Address</Form.Label>
              <Form.Control
                type="string"
                name="addressClient"
                placeholder="Address"
                onChange={handleChange}
                disabled={formElementDisabled}
                value={values.address}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <Form.Group className="mb-1">
              <Form.Label className="labelForm">City</Form.Label>
              <Form.Control
                type="string"
                name="cityClient"
                placeholder="City"
                onChange={handleChange}
                disabled={formElementDisabled}
                value={values.city}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group className="mb-1">
              <Form.Label className="labelForm">State</Form.Label>
              <Form.Control
                type="string"
                name="stateClient"
                placeholder="State"
                onChange={handleChange}
                disabled={formElementDisabled}
                value={values.state}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <Form.Group className="mb-1">
              <Form.Label className="labelForm">Country</Form.Label>
              <Form.Control
                type="string"
                name="cityClient"
                placeholder="City"
                onChange={handleChange}
                disabled={formElementDisabled}
                value={values.country}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group className="mb-1">
              <Form.Label className="labelForm">Cellphone</Form.Label>
              <Form.Control
                type="number"
                name="stateClient"
                placeholder="State"
                onChange={handleChange}
                disabled={formElementDisabled}
                value={values.cellphone}
                required
              />
            </Form.Group>
          </Col>          
        </Row>

        <Row>    
          <Col>
            <Form.Group className="mb-1">
                <Form.Label className="labelForm">Anomalie description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="stateClient"
                  placeholder="State"
                  onChange={handleChange}
                  disabled={formElementDisabled}
                  value={values.cellphone}
                  required
                />
              </Form.Group>
          </Col>      
          <Col xs={12}>
            <Button
              className="buttonAnomaliesDown" 
              variant="primary" 
              type="submit"
              disabled={false}
            >Send </Button>
          </Col>
        </Row>
        
      </Form>
    </Container>
  );
};
