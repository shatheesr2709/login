// import React, { useState } from "react";

// const SignUpPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: ""
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm(formData);
//     if (Object.keys(validationErrors).length === 0) {
//       // Form is valid, submit the data or call an API here
//       console.log("Form data:", formData);
//       // Reset form data
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         confirmPassword: ""
//       });
//       setErrors({});
//     } else {
//       // Form is invalid, set validation errors
//       setErrors(validationErrors);
//     }
//   };

//   const validateForm = (data) => {
//     const errors = {};

//     if (!data.firstName.trim()) {
//       errors.firstName = "First name is required";
//     }

//     if (!data.lastName.trim()) {
//       errors.lastName = "Last name is required";
//     }

//     if (!data.email.trim()) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//       errors.email = "Email is invalid";
//     }

//     if (!data.password.trim()) {
//       errors.password = "Password is required";
//     } else if (data.password.length < 6) {
//       errors.password = "Password must be at least 6 characters";
//     }

//     if (data.password !== data.confirmPassword) {
//       errors.confirmPassword = "Passwords do not match";
//     }

//     return errors;
//   };

//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="firstName">First Name:</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//           />
//           {errors.firstName && <p>{errors.firstName}</p>}
//         </div>
//         <div>
//           <label htmlFor="lastName">Last Name:</label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//           />
//           {errors.lastName && <p>{errors.lastName}</p>}
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           {errors.email && <p>{errors.email}</p>}
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           {errors.password && <p>{errors.password}</p>}
//         </div>
//         <div>
//           <label htmlFor="confirmPassword">Confirm Password:</label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//           />
//           {/* {errors.confirmPassword && <p>{errors} */}
//           </div>