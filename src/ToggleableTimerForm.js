import React, { Component } from 'react';
import TimerForm from './TimerForm';

class ToggleableTimerForm extends Component {
  render() {
    return this.props.isOpen
      ? <TimerForm />
      : <div className="ui basic content center aligned segment">
          <button className="ui basic button icon">
            <i className="plus icon" />
          </button>
        </div>;
  }
}
export default ToggleableTimerForm;
