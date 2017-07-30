import React, { Component } from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

class EditableTimer extends Component {
  render() {
    return this.props.editFormOpen
      ? <TimerForm title={this.props.title} project={this.props.project} />
      : <Timer
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
        />;
  }
}

export default EditableTimer;
