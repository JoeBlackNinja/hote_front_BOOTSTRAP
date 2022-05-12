import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import apiDb from "../api/apiDb";
const bcrypt = require('bcryptjs');

export const Reservation = ( ) => {
  const [values, setValues] = useState({
    id_client:"",
    email: "",
    name: "",
    last_name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    cellphone: "",
    cc:"",
    ed:"",
    cvv:"",
    id_type_room_fk: "",
    ingres_date: "",
    out_date:"" 
  }); 
  
  useEffect(() => {
    //localStorage.getItem('user') && clientDataFromToken()
  }, [])

  const clientDataFromToken = async () => {
    let infoUser = await localStorage.getItem('user');
    let infoUserObject = JSON.parse(infoUser);
    setValues({
      id_client:infoUserObject.id,
      email: infoUserObject.email,
      name: infoUserObject.name,
      last_name: infoUserObject.last_name,
      address: infoUserObject.address,
      city: infoUserObject.city,
      state: infoUserObject.state,
      country: infoUserObject.coutry,
      cellphone: infoUserObject.cellphone 
    });
  }

  //BACKEND CONNECTION
  const sendFetch = async () => {
    const user = {
      id_client:`${values.id_client}`,
      email: `${values.email}`,
      name:`${values.name}`,
      last_name:`${values.last_name}`,
      address:`${values.address}`,
      city:`${values.city}`,
      state:`${values.state}`,
      country:`${values.country}`,
      cellphone:`${values.cellphone}`,
      cc:`${values.cc}`,
      ed:`${values.ed}`,
      cvv:`${values.cvv}`,
      id_type_room_fk: `${values.id_type_room_fk}`,
      ingres_date: `${values.ingres_date}`,
      out_date:`${values.out_date}`
    };

    const { data } = await apiDb.post("/createReservation", user);
    console.log(data);
    localStorage.setItem("token", data);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    console.log(values);
  };

  const handleSubmit = (event) => { 
    event.preventDefault();
    console.log(values);
    sendFetch();    
  };

  return (
    <Container className="reservationForm" fluid>      
      <Form className="formBills" onSubmit={handleSubmit}>

      <Form.Group onSubmit={handleSubmit}>
        <Row>
          <Col xs={12}>
            <Form.Label className="labelBills">Reservation</Form.Label>
          </Col>
        </Row>

        <Row>
        <Col xs={12}>
            <Form.Group className="mb-1" > 
              <Form.Label className="labelForm">Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email client"
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
                name="last_name"
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
                name="address"
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
                name="city"
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
                name="state"
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
                name="country"
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
                name="cellphone"
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
                    name="id_type_room_fk"
                    value={values.id_type_room_fk}
                    onChange={handleChange}
                    required  
                  >
                  <option>Open this select menu</option>
                  <option value={1}>Single</option>
                  <option value={2}>Deluxe</option>
                  <option value={3}>Imperial</option>
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
                  name="ingres_date"
                  placeholder="Enter email"
                  onChange={handleChange}
                  value={values.ingres_date}
                  required
                />
              </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group className="mb-1">
              <Form.Label className="labelForm">Depart date</Form.Label>
                <Form.Control
                  type="date"
                  name="out_date"
                  placeholder="Enter email"
                  onChange={handleChange}
                  value={values.out_date}
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
              name="cc"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              onChange={handleChange}
              value={values.cc}
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
                  name="ed"
                  placeholder="MM/YYYY"
                  onChange={handleChange}
                  value={values.ed}
                  required
                />
              </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group className="mb-2">
              <Form.Label className="labelForm">CVV</Form.Label>
                <Form.Control
                  type="number"
                  name="cvv"
                  placeholder="XXX"
                  onChange={handleChange}
                  value={values.cvv}
                  required
                />
              </Form.Group>
          </Col>
          
        </Row>       

        <Row>
          <Col xs={12}>
            <Button className="buttonAnomaliesDown" variant="success" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form.Group>
    
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
