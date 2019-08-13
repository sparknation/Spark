// Created by JJ

import React, { Component } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log("Form submitted");
    const name = document.getElementById("personName").value;
    const email = document.getElementById("personEmail").value;
    const password = document.getElementById("personPassword").value;
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Password: " + password);
  }

  render() {
    return (
      <div className="signin-cont">
        <h1 className="subheader">Sign In:</h1>
        <p  className="description">If you don't have an account, we'll create one for you!</p>
        <Form onSubmit={() => this.handleSubmit()}>
          <FormGroup>
            <Label for="personName">Username:</Label>
            <Input
              name="name"
              id="personName"
              placeholder="John Smith"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="personEmail">Email:</Label>
            <Input
              name="email"
              id="personEmail"
              placeholder="john-smith@generic-email.com"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password:</Label>
            <Input
              name="password"
              type="password"
              id="personPassword"
              required
            />
          </FormGroup>
          <Input type="submit" id="submit-button" value="Join Spark" />
        </Form>
      </div>
    );
  }
}

export default SignIn;
