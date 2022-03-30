import React, { useState } from "react";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

function Signup() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const [addUser, {error}] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    // Use try/catch instead of promises to handle errors
    try {
      // Execute addUser mutation and pass in variable data from form
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          billingFirstName: formState.firstName,
          billingLastName: formState.lastName,
          username: formState.username
        },
      });

      // Pass the token into the login() function of the Auth class
      const token = mutationResponse.data.addUser.token;
      Auth.loggedIn(token);

      window.location.assign('/');
    } catch (e) { // e is taken from the error object that becomes available when useMutation(ADD_USER); is run
      console.error(e);
    }

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            value={formState.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            value={formState.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="lastName">Username:</label>
          <input
            placeholder="Username"
            name="username"
            type="username"
            id="username"
            value={formState.username}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            value={formState.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end">
          <button type="submit">Submit</button>
        </div>
      </form>
      {error && <div>Sign up failed</div>}
    </div>
  );
}

export default Signup;
