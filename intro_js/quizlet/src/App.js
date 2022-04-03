import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  countUp() {
    this.setState({
      count: 10
    });
  }

  render() {
    return(
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.countUp}>Click Me!</button>
      </div>
    );
  }
}

export default App;
