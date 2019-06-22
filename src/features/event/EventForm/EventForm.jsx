import React, { Component } from "react";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";
import cuid from "cuid";
import { reduxForm, Field } from "redux-form";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import {
  combineValidators,
  isRequired,
  composeValidators,
  hasLengthGreaterThan
} from "revalidate";
import DateInput from "../../../app/common/form/DateInput";

const mapState = (state, ownProps) => {
  let eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId).pop();
  }

  return {
    initialValues: event
  };
};

const actions = {
  createEvent,
  updateEvent
};

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];

const validate = combineValidators({
  title: isRequired({ message: "Title is required" }),
  category: isRequired({ message: "Category is required" }),
  description: composeValidators(
    isRequired({ message: "Description is required" }),
    hasLengthGreaterThan(4)({
      message: "Description should be longer than 4 charactors"
    })
  )(),
  city: isRequired({ message: "City is required" }),
  venue: isRequired({ message: "Venue is required" }),
  date: isRequired({ message: "Date is required" })
});

class EventForm extends Component {
  onFormSubmit = values => {
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.push(`/events/${this.props.initialValues.id}`);
    } else {
      let newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: "/assets/user.png",
        hostedBy: "Bob",
        attendees: []
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/events`);
    }
  };

  render() {
    const {
      history,
      initialValues,
      invalid,
      pristine,
      submitting
    } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Form
              onSubmit={this.props.handleSubmit(this.onFormSubmit)}
              autoComplete='off'
            >
              <Header sub color='teal' content='Evenet Info' />
              <Field
                name='title'
                component={TextInput}
                placeholder='Event Title'
              />
              <Field
                name='category'
                component={SelectInput}
                placeholder='Event Category'
                options={category}
              />
              <Field
                name='description'
                component={TextArea}
                rows={3}
                placeholder='Desc'
              />
              <Field name='hostedBy' component={TextInput} placeholder='Host' />
              <Header sub color='teal' content='Event Location' />
              <Field
                name='city'
                component={TextInput}
                placeholder='Event City'
              />
              <Field
                name='venue'
                component={TextInput}
                placeholder='Event Venue'
              />

              <Field
                name='date'
                component={DateInput}
                placeholder='Event Date'
                dateFormat="DD MMMM YYYY hh:mm a"
                showTimeSelect
                timeFormat="HH:mm"
              />
              <Button
                disabled={invalid || pristine || submitting}
                positive
                type='submit'
              >
                Submit
              </Button>
              <Button
                onClick={
                  initialValues.id
                    ? () => history.push(`/events/${initialValues.id}`)
                    : () => history.push("events")
                }
                type='button'
              >
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(reduxForm({ form: "eventForm", validate })(EventForm));
