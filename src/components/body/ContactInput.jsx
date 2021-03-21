import React from "react";
import { Control, Errors } from "react-redux-form";
import { FormGroup, Label, Col } from "reactstrap";

const errorMessages = {
  required: "This field is required. ",
  number: "Only number is allowed. ",
  email: "Not a valid email address. ",
};

export default function ContactInput(props) {
  // console.log(props);
  const { name, option, label, validators, rows } = props;

  const type = props.type || "text";
  const model = props.model || "contact";

  const modelName = `${model}.${name}`;
  const Con = Control[type];
  return (
    <FormGroup row>
      <Label htmlFor={modelName} md={2}>
        {label}
      </Label>
      <Col md={10}>
        <Con
          model={modelName}
          {...option}
          id={modelName}
          className="form-control"
          validators={validators}
          rows={rows}
        />
        <Errors
          className="text-danger"
          show="touched"
          model={modelName}
          messages={errorMessages}
        />
      </Col>
    </FormGroup>
  );
}
