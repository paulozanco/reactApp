import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: []
    }

    this.setStateHandler = this.setStateHandler.bind(this);
  };

  setStateHandler() {
    this.setState({
      data: [this.state.data, "setState"]
    })
  };

  render() {
    return (
      <div>
        <button onClick={this.setStateHandler}>SET STATE</button>
        <h4>State Array: {this.state.data}</h4>
      </div>
    );
  }
}

export default App;
