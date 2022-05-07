import { useFormik } from 'formik';
import *as Yup from 'yup';

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

const theme = createTheme();

const SignUpSchema = Yup.object().shape({
  firstName :           Yup.string().required("Field requirement"),
  lastName :            Yup.string().required("Field requirement"),
  address :             Yup.string().required("Field requirement"),
  neighborhood :        Yup.string().required("Field requirement"),
  city :                Yup.string().required("Field requirement"),
  state :               Yup.string().required("Field requirement"),
  country :             Yup.string().required("Field requirement"),
  cellphone :           Yup.number().required("Field requirement"),
})

export default function SignUp() { 

  const formik = useFormik({
    initialValues: {
      firstName:"",
      lastName:"",
      address:"",
      neighborhood:"",
      city:"",
      state:"",
      country:"",
      cellphone:""
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema : SignUpSchema    
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>

          <form type="form" onSubmit={formik.handleSubmit} sx={{ mt: 3}}>
            
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    id="firstName"
                    name="firstName"
                    label="First Name"                                                        
                    autoFocus
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}                   
                    fullWidth
                    // required
                    
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField                    
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}  
                    // required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField                    
                    id="address"
                    label="Number and street"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={formik.touched.address && Boolean(formik.errors.address)}
                    helperText={formik.touched.address && formik.errors.address}
                    // required
                    fullWidth
                  />
                </Grid>        
                <Grid item xs={12} sm={6}>
                  <TextField                    
                    id="neighborhood"
                    label="Neighborhood"
                    name="neighborhood"
                    value={formik.values.neighborhood}
                    onChange={formik.handleChange}
                    error={formik.touched.neighborhood && Boolean(formik.errors.neighborhood)}
                    helperText={formik.touched.neighborhood && formik.errors.neighborhood} 
                    // required
                    fullWidth                   
                  />
                </Grid>     
                <Grid item xs={12} sm={6}>
                  <TextField                    
                    id="city"
                    label="City"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                    // required
                    fullWidth
                  />
                </Grid>  
                <Grid item xs={12} sm={6}>
                  <TextField                    
                    id="state"
                    label="State"
                    name="state"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    error={formik.touched.state && Boolean(formik.errors.state)}
                    helperText={formik.touched.state && formik.errors.state}
                    // required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField                    
                    id="country"
                    label="Country"
                    name="country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    error={formik.touched.country && Boolean(formik.errors.country)}
                    helperText={formik.touched.country && formik.errors.country}
                    // required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField                    
                    id="cellphone"
                    label="Cellphone"
                    name="cellphone"
                    type="number"
                    value={formik.values.cellphone}
                    onChange={formik.handleChange}
                    error={formik.touched.cellphone && Boolean(formik.errors.cellphone)}
                    helperText={formik.touched.cellphone && formik.errors.cellphone}
                    // required
                    fullWidth
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
      </Container>
    </ThemeProvider>

  );
}