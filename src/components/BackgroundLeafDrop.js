import React, { Component } from 'react';

class BackgroundLeaf extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }


  render() {
    return (
      <div className="Leaf" style={{}} >
            <img src={ require('../images/leafdrop.png') } style={{}}></img>
      </div>
    );
  }
}

export default BackgroundLeaf;