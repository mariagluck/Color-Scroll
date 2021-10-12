import React, { Component } from "react";

//clock build with Class component
class Clock extends Component {
  constructor(props) {
    super(props);
    //state of time at first
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  //The component mount and the setInterval function get called with a call back function updateClock()
  componentDidMount() {
    this.intervalID = setInterval(() => this.updateClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  //This function set the state of the time to a new time
  updateClock() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }
  render() {
    return (
      <div className="Time">
        <p> It is {this.state.time}</p>
      </div>
    );
  }
}
export default Clock;
