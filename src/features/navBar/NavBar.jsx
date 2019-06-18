import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "./menus/SignedOutMenu";
import SignedInMenu from "./menus/SignedInMenu";

class NavBar extends Component {
  state = {
    authenticated: false
  };

  handleSignIn = () => this.setState({ authenticated: true });

  handleSignOut = () => {
    this.setState({ authenticated: false });
    this.props.history.push('/');
  };

  render() {
    const { authenticated } = this.state;

    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item exact header as={NavLink} to='/'>
            <img src='assets/logo.png' alt='logo' />
            Re-vents
          </Menu.Item>
          <Menu.Item exact name='Events' as={NavLink} to='/events' />
          <Menu.Item name='Test' as={NavLink} to='/test' />
          <Menu.Item>
            <Button
              floated='right'
              positive
              inverted
              content='Create Event'
              as={Link}
              to='/create-event'
            />
          </Menu.Item>
          { authenticated ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
