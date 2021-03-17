import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      telNum: "",
      email: "",
      contactType: "tel",
      agree: false,
      message: "",
    };

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  handleOnChange = (event) => {
    const { name, value, type } = event.target;
    const neededValue = type === "checkbox" ? event.target.checked : value;
    this.setState({
      [name]: neededValue,
    });
  };
  render() {
    const {
      firstName,
      lastName,
      telNum,
      email,
      contactType,
      agree,
      message,
    } = this.state;
    const handleOnChange = this.handleOnChange;
    return (
      <div className="container">
        <div className="row row-content m-2">
          <div className="col-12">
            <h3>Send us your feedback</h3>
          </div>
          <div className="col-12 p-2 col-md-9">
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormGroup row>
                <Label htmlFor="firstName" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    onChange={handleOnChange}
                    type="text"
                    name="firstName"
                    value={firstName}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="lastName" md={2}>
                  LastName
                </Label>
                <Col md={10}>
                  <Input
                    onChange={handleOnChange}
                    type="text"
                    name="lastName"
                    value={lastName}
                  ></Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="telNum" md={2}>
                  Telephone
                </Label>
                <Col md={10}>
                  <Input
                    onChange={handleOnChange}
                    type="telephone"
                    name="telNum"
                    value={telNum}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    onChange={handleOnChange}
                    type="email"
                    name="email"
                    value={email}
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        onChange={handleOnChange}
                        type="checkbox"
                        name="agree"
                        checked={agree}
                      ></Input>
                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    onChange={handleOnChange}
                    type="select"
                    name="contactType"
                    value={contactType}
                  >
                    <option>Tel</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="message" md={2}>
                  Message
                </Label>
                <Col md={10}>
                  <Input
                    onChange={handleOnChange}
                    type="textarea"
                    name="message"
                    value={message}
                    rows="10"
                  ></Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Send feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
