import React from "react";
import { Form, Label } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment/moment.js';

const DateInput = ({
  input,
  placeholder,
  width,
  meta: { touched, error },
  ...rest
}) => {
  return (
    <Form.Field>
      <DatePicker
        error={touched && !!error}
        {...rest}
        placeholderText={placeholder}
        selected={input.value ? moment(input.value) : null}
        onChange={input.onChange}
        onBlur={input.onBlur}
        onChangeRaw={(e) => e.preventDefault() }
      />
      {touched && error && (
        <Label basic color='red'>
          {error}
        </Label>
      )}
    </Form.Field> 
  );
};

export default DateInput;
