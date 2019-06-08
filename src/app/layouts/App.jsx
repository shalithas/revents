import React, { Component, Fragment } from "react";
import EventDashboard from "../../features/event/EventDeashboard/EventDashboard";
import NavBar from "../../features/navBar/NavBar";
import { Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Container className='main'>
          <EventDashboard />
        </Container>
      </Fragment>
    );
  }
}

export default App;
