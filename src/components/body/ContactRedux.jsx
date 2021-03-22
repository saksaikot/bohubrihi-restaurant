// import Joi from "joi";
import React, { Component } from "react";
import { connect } from "react-redux";
// import reactJoiValidation from "react-joi-validation";
import { Control, Form, Errors, actions } from "react-redux-form";
import { FormGroup, Label, Col, Button } from "reactstrap";
import ContactInput from "./ContactInput";
// reactJoiValidation.setJoi(Joi);

const MODEL = "contact";

const mapDispatchToProps = (dispatch) => ({
  resetContactForm: () => dispatch(actions.reset(MODEL)),
});
const errorMessages = {
  required: "This field is required. ",
  number: "Only number is allowed. ",
  email: "Not a valid email address. ",
};
const required = (val) => val && val.length && 0;
const number = (val) => !isNaN(Number(val));
const email = (val) => /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/i.test(val);
class ContactRedux extends Component {
  inputGenerator(name, label, type = "text", option = {}) {
    name = `${MODEL}.${name}`;
    const Con = Control[type];
    return (
      <FormGroup row>
        <Label htmlFor={name} md={2}>
          {label}
        </Label>
        <Col md={10}>
          <Con model={name} {...option} id={name} className="form-control" />
          <Errors
            className="text-danger"
            show="touched"
            model={name}
            messages={errorMessages}
          />
        </Col>
      </FormGroup>
    );
  }
  handleOnSubmit(values) {
    console.log(values);
    // const result = contactSchema.validate(values, { abortEarly: false });
    // console.log(result);
    // console.log(this);

    // this.props.resetContactForm();
  }
  render() {
    const { handleOnSubmit } = this;
    return (
      <div className="container">
        <div className="row row-content m-2">
          <div className="col-12">
            <h3>Send us your feedback</h3>
          </div>
          <div className="col-12 p-2 col-md-9">
            <Form model="contact" onSubmit={handleOnSubmit.bind(this)}>
              <ContactInput
                name="firstName"
                label="First name"
                validators={{ required }}
              />
              <ContactInput
                name="lastName"
                label="Last name"
                validators={{ required }}
              />
              <ContactInput
                name="telNum"
                label="Telephone"
                validators={{ required, number }}
              />
              <ContactInput
                name="email"
                label="Email"
                validators={{ required, email }}
              />

              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      {/* eslint-disable-next-line */}
                      <Control.checkbox
                        model={MODEL + ".agree"}
                        className="form-check-input"
                      />
                      <strong>May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  {/* eslint-disable-next-line */}
                  <Control.select
                    model={MODEL + ".contactType"}
                    defaultValue="Tel"
                    className="form-control"
                  >
                    <option>Tel</option>
                    <option>Email</option>
                  </Control.select>
                </Col>
              </FormGroup>
              <ContactInput
                name="message"
                label="Message"
                validators={{ required }}
                type="textarea"
                rows="10"
              />

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

export default connect(null, mapDispatchToProps)(ContactRedux);
