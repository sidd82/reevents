import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

const emptyEvent = {
  title: "",
  date: "",
  city: "",
  venue: "",
  hostedBy: ""
};

class EventForm extends Component {
  state = {
    event: emptyEvent
  };

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState({
        event: this.props.selectedEvent
      });
    }
  }

  componentWillReceiveProps(nextprops) {
    if (this.props.selectedEvent !== nextprops.selectedEvent) {
      this.setState({
        event: nextprops.selectedEvent || emptyEvent
      });
    }
  }

  onInputChange = evt => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({
      event: newEvent
    });
  };

  onFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
    } else {
      this.props.createEvent(this.state.event);
    }
  };

  render() {
    const { handleFormCancel } = this.props;
    return (
      <Segment>
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              onChange={this.onInputChange}
              name="title"
              placeholder="First Name"
              value={this.state.event.title}
            />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input
              onChange={this.onInputChange}
              name="date"
              type="date"
              placeholder="Event Date"
              value={this.state.event.date}
            />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input
              onChange={this.onInputChange}
              name="city"
              placeholder="City event is taking place"
              value={this.state.event.city}
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              onChange={this.onInputChange}
              name="venue"
              placeholder="Enter the Venue of the event"
              value={this.state.event.venue}
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              onChange={this.onInputChange}
              name="hostedBy"
              placeholder="Enter the name of person hosting"
              value={this.state.event.hostedBy}
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={handleFormCancel} type="button">
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
