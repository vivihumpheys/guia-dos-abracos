import React from "react";
import "./styles.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const MainForm = ({
  formLabel1,
  formLabel2,
  formLabel3,
  formLabel4,
  CheckBoxText,
  buttonText,
}) => {
  return (
    <div className="form-box">
      <Form
        name="mainForm"
        className="form-container"
        action="https://formspree.io/xbjzqyyw"
        method="POST"
      >
        <FormGroup>
          <Label for="projectName">{formLabel1}</Label>
          <Input name="projectName" type="text" />
        </FormGroup>

        <FormGroup>
          <Label for="projectMail">{formLabel2}</Label>
          <Input name="projectMail" type="email" />
        </FormGroup>
        <FormGroup>
          <Label for="projectAdress">{formLabel4}</Label>
          <Input name="projectAdress" type="text" />
        </FormGroup>
        <FormGroup>
          <Label for="projectDescription">{formLabel3}</Label>
          <Input name="projectDescription" type="textarea" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> {CheckBoxText}
          </Label>
        </FormGroup>
        <span className="button-box">
          <Button className="form-button">{buttonText}</Button>
        </span>
      </Form>
    </div>
  );
};

export default MainForm;
