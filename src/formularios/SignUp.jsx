import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

/* function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
 */

import { useFormik } from 'formik';
import *as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  email:                        Yup.string().email().required("Field required"),
  password:                     Yup.string().required("Field required")
                                    .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                                    "Password must contain at least 8 characters, one uppercase, one number and one special case character")
                                    .min(8,"Minimo 8 carateres")
                                    .max(16, "Maximo 16 caracteres") ,
  passwordConfirmation:         Yup.string().required("Field required")
                                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
})

const theme = createTheme();

export default function SignUp() {

  /* const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  }; */

  const formik = useFormik({
    initialValues: {
      email:"",
      password:"",
      passwordConfirmation:""
    },
    onSubmit: (values) => {
      console.log(values);
      

    },
    validationSchema : ValidationSchema
  })

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box sx={{ mt: 3 }}>
            <form onSubmit={formik.handleSubmit}>            
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField                 
                    id="email"
                    name="email"
                    label="Email Address"
                    type="email"
                    /* autoComplete="email" */
                    fullWidth
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField                        
                    id="password"
                    name="password"
                    label="Password"
                    type="password"                  
                    /* autoComplete="password" */
                    fullWidth
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    id="passwordConfirmation"
                    name="passwordConfirmation"                                   
                    label="Password confirmation"
                    type="password"                  
                    /* autoComplete="new-password" */
                    fullWidth 
                    value={formik.values.passwordConfirmation}
                    onChange={formik.handleChange}
                    error={formik.touched.passwordConfirmation && Boolean(formik.errors.passwordConfirmation)}
                    helperText={formik.touched.passwordConfirmation && formik.errors.passwordConfirmation}
                  />
                </Grid>
                {/* <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid> */}
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>

        {/* <Copyright sx={{ mt: 5 }} /> */}
      
      </Container>
    </ThemeProvider>
  );
}