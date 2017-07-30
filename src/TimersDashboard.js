import React, { Component } from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import uuidv4 from 'uuid/v4';
class TimersDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timers: [
        {
          title: 'Practice Squat',
          project: 'Gym chorce',
          id: uuidv4(),
          elapsed: 5456099,
          runningSince: Date.now()
        },
        {
          title: 'Brack Squat',
          project: 'Kitchen chorce',
          id: uuidv4(),
          elapsed: 1273998,
          runningSince: null
        }
      ]
    };
  }
  render() {
    return (
      <div className="ui three column centered grid">
        <div className="column">
          <EditableTimerList timers={this.state.timers} />
          <ToggleableTimerForm isOpen={false} />
        </div>
      </div>
    );
  }
}

export default TimersDashboard;
