import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class WeatherForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: 90210,
    };
  }

  handleUpdateZipCode() {

  }
  handleSubmitZipcode() {

  }
  render() {
    return (
      <div
        className="zipcode-container"
        style={{flexDirection: this.props.direction}}
      >
        <Form>
          <FormGroup controlId="formInlineName">
            {' '}
            <FormControl
              type="text"
              placeholder="Rio de Janeiro"
              onChange={this.handleUpdateZipCode}
              value={this.state.zipcode}
            />
          </FormGroup>
          {' '}
          <Button
            className="btn btn-success"
            onClick={this.handleSubmitZipcode}
          >
            Get Weather
          </Button>
        </Form>
      </div>
    );
  }
}

WeatherForm.defaultProps = {
  direction: 'column',
};

WeatherForm.propTypes = {
  direction: PropTypes.string,
};

export default WeatherForm;
