import React from 'react';
import ReactDOM from 'react-dom';

class TestApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">Hello, world! I am a {this.constructor.name}.</div>
    );
  }
};

ReactDOM.render(
  <TestApp></TestApp>,
  document.getElementById('app')
);
