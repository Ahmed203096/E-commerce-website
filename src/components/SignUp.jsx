import React from "react";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tokenActions } from "./store/slices/tokenSlice";

export default function SignUp() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { addToken } = tokenActions;
  const [error, setError] = useState({
    name: null,
    userName: null,
    password: null,
    mail: null,
    age: null,
    flag: true,
  });
  const [formValues, setFormValues] = useState({
    name: "",
    userName: "",
    password: "",
    mail: "",
    age: "",
  });

  useEffect(() => {}, []);
  const changeHandler = (e) => {
    // console.log(e.target.name);
    if (e.target.name === "age") {
      // console.log(`${e.target.value} and ${isNaN(e.target.value)}`);
      if (e.target.value <= 18 || isNaN(e.target.value)) {
        setError({
          ...error,
          age: " enter valide age",
          flag: false,
        });
      } else {
        setError({
          ...error,
          age: null,
        });
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
      }
    } else if (e.target.name === "password") {
      // console.log(`${e.target.value} and ${isNaN(e.target.value)}`);
      if (e.target.value.length < 8) {
        setError({
          ...error,
          password: " password must be at least 8 charcaters",
          flag: false,
        });
      } else {
        setError({
          ...error,
          password: null,
        });
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
      }
    } else {
      if (e.target.value.length < 3) {
        setError({
          ...error,
          [e.target.name]: `${e.target.name} Must be more than 3`,
          flag: false,
        });
      } else {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
        setError({
          ...error,
          [e.target.name]: null,
        });
      }
    }
  };
  const goToHomePage = () => {
    navigation("../../");
  };

  const login = async (e) => {
    console.log(error);

    if (
      error.age ||
      error.mail ||
      error.name ||
      error.password ||
      error.userName ||
      error.flag
    ) {
      e.preventDefault();
    } else {
      dispatch(addToken());
      goToHomePage();
    }
  };
  return (
    <div className="bg-dark">
      <div className="container p-5 border border-success border-3 rounded">
        <div className="text-light text-center">
          <h2>Register</h2>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicUser">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              onChange={changeHandler}
            />
            {error.name && (
              <Form.Text className="text-danger">{error.name}</Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicUser">
            <Form.Label>user name</Form.Label>
            <Form.Control
              type="text"
              placeholder="User name"
              name="userName"
              onChange={changeHandler}
            />
            {error.userName && (
              <Form.Text className="text-danger">{error.userName}</Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicage">
            <Form.Label>age</Form.Label>
            <Form.Control
              type="text"
              placeholder="age"
              name="age"
              onChange={changeHandler}
            />
            {error.age && (
              <Form.Text className="text-danger">{error.age}</Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicage">
            <Form.Label>age</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              name="password"
              onChange={changeHandler}
            />
            {error.password && (
              <Form.Text className="text-danger">{error.password}</Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUser">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter mail"
              name="mail"
              onChange={changeHandler}
            />
            {error.mail && (
              <Form.Text className="text-danger">{error.mail}</Form.Text>
            )}
          </Form.Group>

          <Button variant="primary" type="submit" onClick={login}>
            Sign up
          </Button>
        </Form>
      </div>
    </div>
  );
}
