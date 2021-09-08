import React from 'react';
import Trusted from './Trusted.jsx';

class Body extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <div id="body">
        <Trusted />
        {/* TODO: add card carousel or some kind of feature content here */}
      </div>
    )
  }
}

export default Body;