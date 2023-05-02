import React from "react";
import "../styles/register.css";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import background from "../images/background.png";
import TextField from "@mui/material/TextField";

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="register">
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          passwordverify: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Required";
          } else if (!/^[a-zA-Z]{6}[0-9]{2}$/i.test(values.username)) {
            errors.username = "Must contain only 6 letters and 2 numbers";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required";
          } else if (
            !/(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}/.test(values.password)
          ) {
            errors.password = "Password must contain 1 mumber minimum";
          }
          if (!values.passwordverify) {
            errors.passwordverify = "Required";
          } else if (values.passwordverify !== values.password) {
            errors.passwordverify = "Passwords do not match";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm();
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form
            autoComplete="off"
            className="form-register"
            onSubmit={handleSubmit}
          >
            <h2 className="title-y" >Register</h2>
            <section className="section-i">
              <TextField
                variant="outlined"
                className="input-r"
                label="Username"
                type="text"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                error={Boolean(errors.username)}
              />
              <p style={{ color: "red", height: "15px" }}>
                {errors.username && touched.username && errors.username}
              </p>
              <TextField
                variant="outlined"
                className="input-r"
                label="Email"
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={Boolean(errors.email)}
              />
              <p style={{ color: "red", height: "15px" }}>
                {errors.email && touched.email && errors.email}
              </p>
              <TextField
                variant="outlined"
                className="input-r"
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={Boolean(errors.password)}
              />
              <p style={{ color: "red", height: "15px" }}>
                {errors.password && touched.password && errors.password}
              </p>
              <TextField
                variant="outlined"
                className="input-r"
                label="Password"
                type="password"
                name="passwordverify"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordverify}
                error={Boolean(errors.passwordverify)}
              />
              <p style={{ color: "red", height: "15px" }}>
                {errors.passwordverify &&
                  touched.passwordverify &&
                  errors.passwordverify}
              </p>
            </section>

            <button type="submit" disabled={isSubmitting}>
              Register
            </button>

            <p style={{color:'black'}} className="subscribe-link">
              You have a count? -{" "}
              <Link
                style={{ textDecoration: "none", color: "green" }}
                to="/login"
              >
                Log in now
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
