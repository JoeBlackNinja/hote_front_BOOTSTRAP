import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Select, InputLabel, MenuItem, FormControl, Stack } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { useFormik } from 'formik';
import *as Yup from 'yup';

const ReservationSchema = Yup.object().shape({
  room:                       Yup.string().required("Field requirement"),
  dateAdmision:               Yup.string().required("Field requirement"),
  dateDeparture:              Yup.string().required("Field requirement"),
  card:                       Yup.string().min(16,"Missing digits").max(16,"Digits left over").required("Field requirement"),
  cardExpirationDate:         Yup.string().required("Field requirement"),
  cardCVV:                    Yup.string().min(3,"Missing digits").max(3,"Digits left over").required("Field requirement")
});

const theme = createTheme();

export default function SignUp() {

  const [room, setRoom] = React.useState('');  
  const [dateIngres, setDateIngres] = React.useState(new Date());
  const [dateOut, setDateOut] = React.useState(new Date());
  const [expirationDate, setExpirationDate] = React.useState(new Date());  

  const handleChangeRoom = (room) => {
    setRoom(room);
    console.log(room);
  }

  const handleChangeDI = (dateIngress) => {
    setDateIngres(dateIngress);
    console.log(dateIngres);
  };

  const handleChangeDO = (dateOut) => {
    setDateOut(dateOut);
  };

  const handleChangeCC = (expirationDate) => {
    setExpirationDate(expirationDate);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  const formik = useFormik({
    initialValues:{
      room:'',
      dateAdmision:'',
      dateDeparture:'',
      card:'',
      cardExpirationDate:'',
      cardCVV:''
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema : ReservationSchema
  });  

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reservation
          </Typography>
          <Box
            // component="form"
            // onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >

          <form onSubmit={formik.handleSubmit} type="form">  

            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <FormControl sx={{ minWidth: 320 }}>  
                  <InputLabel>
                    Room *
                  </InputLabel>
                  <Select
                    id="room"
                    name="room"
                    label="Room*"
                    onChange={formik.handleChange}    
                    fullWidth                                   
                  >
                    <MenuItem value={formik.values.room}>None</MenuItem> 
                    <MenuItem value={formik.values.room}>Single</MenuItem>
                    <MenuItem value={formik.values.room}>Premium</MenuItem>
                    <MenuItem value={formik.values.room}>Presidential</MenuItem>
                  </Select>
                </FormControl>
              </Grid>


              <Grid item xs={12} sm={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack>
                    <DesktopDatePicker
                      label="Date of admission"
                      inputFormat="MM/dd/yyyy"
                      value={dateIngres}
                      onChange={handleChangeDI}
                      renderInput={(params) => <TextField {...params} />}
                      
                    /> 
                  </Stack>
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12} sm={12}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack>
                    <DesktopDatePicker
                      label="Departure date"
                      inputFormat="MM/dd/yyyy"
                      value={dateOut}
                      onChange={handleChangeDO}
                      renderInput={(params) => <TextField {...params} />}
                    /> 
                  </Stack>
                </LocalizationProvider>
              </Grid>
              
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  id="card"
                  name="name"
                  type="number"
                  label="Credit or debit card"
                  placeholder='XXXX XXXX XXXX XXXX'
                />
              </Grid>            

              <Grid item xs={12} sm={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Stack>
                    <DesktopDatePicker
                      label="Expiration date"
                      inputFormat="MM/dd/yyyy"
                      value={expirationDate}
                      onChange={handleChangeCC}
                      renderInput={(params) => <TextField {...params} />}
                    /> 
                  </Stack>
                </LocalizationProvider>
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="cvv"
                  label="CVV"
                  name="cvv"
                />
              </Grid>                          

            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>    

            </form>

          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );
}