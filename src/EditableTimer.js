import React, { Component } from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';

class EditableTimer extends Component {
  constructor(props) {
    super(props);
    this.state = { editFormOpen: false };
  }
  render() {
    return this.state.editFormOpen
      ? <TimerForm
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
        />
      : <Timer
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
        />;
  }
}

export default EditableTimer;
