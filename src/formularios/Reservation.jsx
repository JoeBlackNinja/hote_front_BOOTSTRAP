import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import apiDb from "../api/apiDb";

import { Container, Row, Col } from "react-bootstrap";

// const bcrypt = require('bcryptjs');

export const Reservation = () => {
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
            <Form.Label className="labelBills">Reservation</Form.Label>
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
                value={values.state}
                required
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <Form.Group className="mb-4">
              <Form.Label className="labelForm">Country</Form.Label>
              <Form.Control
                type="string"
                name="cityClient"
                placeholder="City"
                onChange={handleChange}
                value={values.country}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group className="mb-4">
              <Form.Label className="labelForm">Cellphone</Form.Label>
              <Form.Control
                type="number"
                name="stateClient"
                placeholder="State"
                onChange={handleChange}
                value={values.cellphone}
                required
              />
            </Form.Group>
          </Col>          
        </Row>

        <Row>
          <Col xs={12}>
            <Form.Group className="mb-1">
              <Form.Label className="labelForm">Room</Form.Label>
                <Form.Select 
                    aria-label="Default select example"
                    required  
                  >
                  <option>Open this select menu</option>
                  <option value="single">Single</option>
                  <option value="deluxe">Deluxe</option>
                  <option value="imperial">Imperial</option>
                </Form.Select>
              </Form.Group>
          </Col>          
        </Row>
        <Row>
          <Col xs={6}>
            <Form.Group className="mb-1">
              <Form.Label className="labelForm">Ingres date</Form.Label>
                <Form.Control
                  type="date"
                  name="dateIngres"
                  placeholder="Enter email"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group className="mb-1">
              <Form.Label className="labelForm">Depart date</Form.Label>
                <Form.Control
                  type="date"
                  name="departDate"
                  placeholder="Enter email"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Form.Group className="mb-1">
            <Form.Label className="labelForm">Credit card number</Form.Label>
            <Form.Control
              type="number"
              name="passwordConfirmation"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              onChange={handleChange}
              required
            />
        </Form.Group>
          </Col>
        </Row>        

        <Row>
          <Col xs={6}>
            <Form.Group className="mb-2">
              <Form.Label className="labelForm">Expiration date</Form.Label>
                <Form.Control
                  type="date"
                  name="dateIngres"
                  placeholder="MM/YYYY"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group className="mb-2">
              <Form.Label className="labelForm">CVV</Form.Label>
                <Form.Control
                  type="number"
                  name="departDate"
                  placeholder="XXX"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
          </Col>
          
        </Row>       

        <Row>
          <Col xs={12}>
            <Button className="buttonAnomaliesDown" variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>

      </Form>

    

    </Container>
  );
};

// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';

// import { Select, InputLabel, MenuItem, FormControl, Stack } from '@mui/material';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

// import { useFormik } from 'formik';
// import *as Yup from 'yup';

// const ReservationSchema = Yup.object().shape({
//   room:                       Yup.string().required("Field requirement"),
//   dateAdmision:               Yup.string().required("Field requirement"),
//   dateDeparture:              Yup.string().required("Field requirement"),
//   card:                       Yup.string().min(16,"Missing digits").max(16,"Digits left over").required("Field requirement"),
//   cardExpirationDate:         Yup.string().required("Field requirement"),
//   cardCVV:                    Yup.string().min(3,"Missing digits").max(3,"Digits left over").required("Field requirement")
// });

// const theme = createTheme();

// export default function SignUp() {

//   const [room, setRoom] = React.useState('');
//   const [dateIngres, setDateIngres] = React.useState(new Date());
//   const [dateOut, setDateOut] = React.useState(new Date());
//   const [expirationDate, setExpirationDate] = React.useState(new Date());

//   const handleChangeRoom = (room) => {
//     setRoom(room);
//     console.log(room);
//   }

//   const handleChangeDI = (dateIngress) => {
//     setDateIngres(dateIngress);
//     console.log(dateIngres);
//   };

//   const handleChangeDO = (dateOut) => {
//     setDateOut(dateOut);
//   };

//   const handleChangeCC = (expirationDate) => {
//     setExpirationDate(expirationDate);
//   };

//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   const data = new FormData(event.currentTarget);
//   //   console.log({
//   //     email: data.get('email'),
//   //     password: data.get('password'),
//   //   });
//   // };

//   const formik = useFormik({
//     initialValues:{
//       room:'',
//       dateAdmision:'',
//       dateDeparture:'',
//       card:'',
//       cardExpirationDate:'',
//       cardCVV:''
//     },
//     onSubmit: (values) => {
//       console.log(values);
//     },
//     validationSchema : ReservationSchema
//   });

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Reservation
//           </Typography>
//           <Box
//             // component="form"
//             // onSubmit={handleSubmit}
//             sx={{ mt: 3 }}
//           >

//           <form onSubmit={formik.handleSubmit} type="form">

//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={12}>
//                 <FormControl sx={{ minWidth: 320 }}>
//                   <InputLabel>
//                     Room *
//                   </InputLabel>
//                   <Select
//                     id="room"
//                     name="room"
//                     label="Room*"
//                     onChange={formik.handleChange}
//                     fullWidth
//                   >
//                     <MenuItem value={formik.values.room}>None</MenuItem>
//                     <MenuItem value={formik.values.room}>Single</MenuItem>
//                     <MenuItem value={formik.values.room}>Premium</MenuItem>
//                     <MenuItem value={formik.values.room}>Presidential</MenuItem>
//                   </Select>
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12} sm={12}>
//                 <LocalizationProvider dateAdapter={AdapterDateFns}>
//                   <Stack>
//                     <DesktopDatePicker
//                       label="Date of admission"
//                       inputFormat="MM/dd/yyyy"
//                       value={dateIngres}
//                       onChange={handleChangeDI}
//                       renderInput={(params) => <TextField {...params} />}

//                     />
//                   </Stack>
//                 </LocalizationProvider>
//               </Grid>

//               <Grid item xs={12} sm={12}>
//                 <LocalizationProvider dateAdapter={AdapterDateFns}>
//                   <Stack>
//                     <DesktopDatePicker
//                       label="Departure date"
//                       inputFormat="MM/dd/yyyy"
//                       value={dateOut}
//                       onChange={handleChangeDO}
//                       renderInput={(params) => <TextField {...params} />}
//                     />
//                   </Stack>
//                 </LocalizationProvider>
//               </Grid>

//               <Grid item xs={12} sm={12}>
//                 <TextField
//                   fullWidth
//                   id="card"
//                   name="name"
//                   type="number"
//                   label="Credit or debit card"
//                   placeholder='XXXX XXXX XXXX XXXX'
//                 />
//               </Grid>

//               <Grid item xs={12} sm={6}>
//                 <LocalizationProvider dateAdapter={AdapterDateFns}>
//                   <Stack>
//                     <DesktopDatePicker
//                       label="Expiration date"
//                       inputFormat="MM/dd/yyyy"
//                       value={expirationDate}
//                       onChange={handleChangeCC}
//                       renderInput={(params) => <TextField {...params} />}
//                     />
//                   </Stack>
//                 </LocalizationProvider>
//               </Grid>

//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="cvv"
//                   label="CVV"
//                   name="cvv"
//                 />
//               </Grid>

//             </Grid>

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>

//             </form>

//           </Box>
//         </Box>

//       </Container>
//     </ThemeProvider>
//   );
// }
