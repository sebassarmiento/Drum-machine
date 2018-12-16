import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      switch: true
    }
  }
  render() {
    return (
      <div className="main-container">
        <div className="keyboard" >
          <div>Q</div>
          <div>W</div>
          <div>E</div>
          <div>A</div>
          <div>S</div>
          <div>D</div>
          <div>Z</div>
          <div>X</div>
          <div>C</div>
        </div>
        <div className="panel" >
          <div className="panel-inside" >
            <div className="switch" >
              <h3>{this.state.switch ? "On" : "Off"}</h3>
              <div onClick={() => this.setState({switch: !this.state.switch})} className={this.state.switch ? "switcher-on" : "switcher-off"} ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
