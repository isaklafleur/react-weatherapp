import React, { Component } from 'react';

import WeatherForm from './WeatherForm';

class Home extends Component {
  render() {
    return (
      <div className="center-box">
        <h1 className="header">Enter City</h1>
        <WeatherForm
          direction="column"
          onSubmitZipcode={function(){}}
          onUpdateZipcode={function(){}}
          zipcode={123}
        />
      </div>
    );
  }
}

export default Home;
