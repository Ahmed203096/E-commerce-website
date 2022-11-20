import React from "react";
import { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tokenActions } from "./store/slices/tokenSlice";

export default function Login() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { addToken } = tokenActions;
  const [flag, setFlag] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    password: "",
  });

  useEffect(() => {}, []);
  const changeHandler = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const goToHomePage = () => {
    navigation("../");
  };
  const goToSing = () => navigation("/signUp");

  const login = async (e) => {
    e.preventDefault();
    if (formValues.name === "admin" && formValues.password === "admin") {
      dispatch(addToken());
      goToHomePage();
    } else {
      setFlag(true);
    }
  };
  return (
    <div className="bg-dark">
      <div className="container p-5 border border-success border-3 rounded">
        <div className="text-light text-center">
          <h2>Login</h2>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicUser">
            <Form.Label>user name</Form.Label>
            <Form.Control
              type="text"
              placeholder="User name"
              name="name"
              onChange={changeHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUser">
            <Form.Label>password</Form.Label>
            <Form.Control
              type="password"
              placeholder="password"
              name="password"
              onChange={changeHandler}
            />
          </Form.Group>
          {flag && (
            <h4 className="text-danger text-center">
              Wrong user name or password
            </h4>
          )}

          <Button variant="primary" type="submit" onClick={login}>
            Login
          </Button>
        </Form>
      </div>
      <div>
        <h5 className="text-light">If you are not a user please </h5>
        <a href="#" onClick={goToSing} className="text-light">
          sign up
        </a>
      </div>
    </div>
  );
}
