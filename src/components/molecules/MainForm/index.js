import React from "react";
import "./styles.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const MainForm = ({
    formLabel1,
    formLabel2,
    formLabel3,
    CheckBoxText,
    buttonText
}) => {
  return (
    <Form>
      <FormGroup>
        <Label for="projectName">{formLabel1}</Label>
        <Input type="text" />
      </FormGroup>
      <FormGroup>
        <Label for="projectMail">{formLabel2}</Label>
        <Input type="email" />
      </FormGroup>
      <FormGroup>
        <Label for="projectDescription">{formLabel3}</Label>
        <Input type="textarea" />
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" /> {CheckBoxText}
        </Label>
      </FormGroup>
      <Button>{buttonText}</Button>
    </Form>
  );
};

export default MainForm;
