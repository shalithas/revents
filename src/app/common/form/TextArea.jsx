import React from "react";
import { Form, Label } from "semantic-ui-react";

const TextArea = ({
  input,
  rows,
  width,
  type,
  placeholder,
  meta: { touched, error }
}) => {
  return (
    <Form.Field>
      <textarea {...input} placeholder={placeholder} type={type} rows={rows} />
      {touched && error && (
        <Label basic color='red'>
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default TextArea;
