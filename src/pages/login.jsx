import "../styles/login.css";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import background from "../images/background.png";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Login = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="login" style={{ backgroundImage: `url(${background})` }}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
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
          <Form autoComplete="off" className="form" onSubmit={handleSubmit}>
            <h2 className="title" >Log in</h2>
            <section className="i-section">
              <TextField
                variant="outlined"
                className="input-x"
                label="Email"
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={Boolean(errors.email)}
              />
              <p style={{ color: "red", height: "12px" }}>
                {errors.email && touched.email && errors.email}
              </p>
              <TextField
                name="password"
                className="input-x"
                label="Password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={Boolean(errors.password)}
              />
              <p style={{ color: "red", height: "12px" }}>
                {errors.password && touched.password && errors.password}
              </p>
            </section>
            <button type="submit" disabled={isSubmitting}>
              Log in
            </button>
            <p style={{color:'black'}} className="subscribe-link">
              First time on MovieAPP? -{" "}
              <Link
                style={{ textDecoration: "none", color: "green" }}
                to="/register"
              >
                Subscribe now
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
