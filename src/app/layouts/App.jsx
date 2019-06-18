import React, { Component, Fragment } from "react";
import EventDashboard from "../../features/event/EventDeashboard/EventDashboard";
import NavBar from "../../features/navBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route, withRouter, Switch } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import SettingsPage from "../../features/user/SettingsPage/SettingsPage";
import EventForm from "../../features/event/EventForm/EventForm";
import TestComponent from "../../features/testArea/TestComponent";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path='/' component={HomePage} />
        <Route
          exact
          path='/(.+)'
          render={() => (
            <Fragment>
              <NavBar />
              <Container className='main'>
                <Switch key={this.props.location.key}>
                  <Route exact path='/events' component={EventDashboard} />
                  <Route path='/events/:id' component={EventDetailedPage} />
                  <Route path='/people' component={PeopleDashboard} />
                  <Route path='/settings' component={SettingsPage} />
                  <Route
                    path={["/create-event", "/manage/:id"]}
                    component={EventForm}
                  />
                  <Route path='/test' component={TestComponent} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
