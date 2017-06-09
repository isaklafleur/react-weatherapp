import React, { Component } from 'react';
import { Navbar, FormControl, FormGroup, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <NavLink exact to="/">Weather App</NavLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Navbar.Form pullRight>
              <FormGroup controlId="formInlineName">
                {' '}
                <FormControl type="text" placeholder="Rio de Janeiro" />
              </FormGroup>
              {' '}
              <Button className="btn btn-success" type="submit">Get Weather</Button>
            </Navbar.Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
