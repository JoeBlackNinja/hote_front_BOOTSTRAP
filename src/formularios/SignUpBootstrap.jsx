import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import apiDb from '../api/apiDb'

const bcrypt = require('bcryptjs');

export const SignUpBootstrap = () => {

  const [values,setValues] = useState({
    email:"",
    password:"",
    passwordConfirmation:""  
  });
  
  //BACKEND CONNECTION
  const sendFetch = async (cryptoEmail,cryptoPass) => {
    const user = {
        email:cryptoEmail, 
        pass:cryptoPass,
        idclient: '1'    
    }
    console.log(user);
    const {data} = await apiDb.post('/createUser', user)
    // localStorage.setItem('token', data);
  }

  const handleChange = (event) => {  
    setValues({
      ...values,
      [event.target.name] : event.target.value
    })  
  }

  const handleSubmit = (event) => {
    event.preventDefault();   

    let salt = bcrypt.genSaltSync(10);
    let cryptoPass = bcrypt.hashSync(values.password, salt);
    let cryptoEmail = bcrypt.hashSync(values.email, salt);

    setValues({
      email:cryptoEmail,
      password:cryptoPass
    });

    if(values.password === values.passwordConfirmation){
      sendFetch(cryptoEmail,cryptoPass);
    }
  }

  return (
    <Form className="formBills" onSubmit={handleSubmit}>   
      <Form.Label className="labelBills">Sign Up</Form.Label>
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

      <Form.Group className="mb-3">
        <Form.Label 
          className="labelForm">Password confirmation</Form.Label>
        <Form.Control 
          type="password" 
          name="passwordConfirmation"
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





// import React from 'react';
// import styled from 'styled-components';
// import { Form, Button } from 'react-bootstrap';
// import { Formik, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const CONTAINER = styled.div`
//   background: #F7F9FA;
//   height: auto;
//   width: 90%;
//   margin: 5em auto;
//   color: snow;
//   -webkit-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
//   -moz-box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);
//   box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

//   @media(min-width: 786px) {
//     width: 60%;
//   }

//   label {
//     color: #24B9B6;
//     font-size: 1.2em;
//     font-weight: 400;
//   }

//   h1 {
//     color: #24B9B6;
//     padding-top: .5em;
//   }

//   .form-group {
//     margin-bottom: 2.5em;
//   }

//   .error {
//     border: 2px solid #FF6565;
//   }

//   .error-message {
//     color: #FF6565;
//     padding: .5em .2em;
//     height: 1em;
//     position: absolute;
//     font-size: .8em;
//   }
// `;

// const MYFORM = styled(Form)`
//   width: 90%;
//   text-align: left;
//   padding-top: 2em;
//   padding-bottom: 2em;

//   @media(min-width: 786px) {
//     width: 50%;
//   }
// `;

// const BUTTON = styled(Button)`
//   background: #1863AB;
//   border: none;
//   font-size: 1.2em;
//   font-weight: 400;

//   &:hover {
//     background: #1D3461;
//   }
// `;

// // RegEx for phone number validation
// const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

// // Schema for yup
// const validationSchema = Yup.object().shape({
//   name: Yup.string()
//   .min(2, "*Names must have at least 2 characters")
//   .max(100, "*Names can't be longer than 100 characters")
//   .required("*Name is required"),
//   email: Yup.string()
//   .email("*Must be a valid email address")
//   .max(100, "*Email must be less than 100 characters")
//   .required("*Email is required"),
//   phone: Yup.string()
//   .matches(phoneRegExp, "*Phone number is not valid")
//   .required("*Phone number required"),
//   blog: Yup.string()
//   .url("*Must enter URL in http://www.example.com format")
//   .required("*URL required")
// });

// export const SignUpBootstrap = () => {
//   return (
//     <CONTAINER>
//       //Sets initial values for form inputs
//       <Formik
//         initialValues={{ name:"", email:"", phone:"", blog:""}}
//         validationSchema={validationSchema}
//         onSubmit={(values, {setSubmitting, resetForm}) => {
//             // When button submits form and form is in the process of submitting, submit button is disabled
//             setSubmitting(true);

//             // Simulate submitting to database, shows us values submitted, resets form
//           setTimeout(() => {
//             alert(JSON.stringify(values, null, 2));
//             resetForm();
//             setSubmitting(false);
//           }, 500);
//         }}
//       >
//         {/* Callback function containing Formik state and helpers that handle common form actions */}
//       {( {values,
//           errors,
//           touched,
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           isSubmitting }) => (
//         <MYFORM onSubmit={handleSubmit} className="mx-auto">
//           {console.log(values)}
//           <Form.Group controlId="formName">
//             <Form.Label>Name :</Form.Label>
//             <Form.Control
//               type="text"
//               /* This name property is used to access the value of the form element via values.nameOfElement */
//               name="name"
//               placeholder="Full Name"
//               /* Set onChange to handleChange */
//               onChange={handleChange}
//               /* Set onBlur to handleBlur */
//               onBlur={handleBlur}
//               /* Store the value of this input in values.name, make sure this is named the same as the name property on the form element */
//               value={values.name}
//               /* Check if the name field (this field) has been touched and if there is an error, if so add the .error class styles defined in the CSS (make the input box red) */
//               className={touched.name && errors.name ? "error" : null}
//               />
//               {/* Applies the proper error message from validateSchema when the user has clicked the element and there is an error, also applies the .error-message CSS class for styling */}
//               {touched.name && errors.name ? (
//                 <div className="error-message">{errors.name}</div>
//               ): null}
//           </Form.Group>
//           <Form.Group controlId="formEmail">
//             <Form.Label>Email :</Form.Label>
//             <Form.Control
//               type="text"
//               name="email"
//               placeholder="Email"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.email}
//               className={touched.email && errors.email ? "error" : null}
//             />
//             {touched.email && errors.email ? (
//                 <div className="error-message">{errors.email}</div>
//               ): null}
//           </Form.Group>
//           <Form.Group controlId="formPhone">
//             <Form.Label>Phone :</Form.Label>
//             <Form.Control
//               type="text"
//               name="phone"
//               placeholder="Phone"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.phone}
//               className={touched.phone && errors.phone ? "error" : null}
//               />
//               {touched.phone && errors.phone ? (
//                 <div className="error-message">{errors.phone}</div>
//               ): null}
//           </Form.Group>
//           <Form.Group controlId="formBlog">
//             <Form.Label>Blog :</Form.Label>
//             <Form.Control
//               type="text"
//               name="blog"
//               placeholder="Blog URL"
//               onChange={handleChange}
//               onBlur={handleBlur}
//               value={values.blog}
//               className={touched.blog && errors.blog ? "error" : null}
//               />
//               {touched.blog && errors.blog ? (
//                 <div className="error-message">{errors.blog}</div>
//               ): null}
//           </Form.Group>
//           <BUTTON variant="primary" type="submit" disabled={isSubmitting}>
//             Submit
//           </BUTTON>
//         </MYFORM>
//       )}
//       </Formik>
//     </CONTAINER>
//   );
// }


