import React, { Component } from 'react';
import EditableTimer from './EditableTimer';

class EditableTimerList extends Component {
  render() {
    //TODO: Implement the render a list of timers passed from parent components via this props
    const timers = this.props.timers.map(timer =>
      <EditableTimer
        id={timer.id}
        key={timer.id}
        title={timer.title}
        project={timer.project}
        elapsed={timer.elapsed}
        runningSince={timer.runningSince}
        editFormOpen={timer.editFormOpen}
      />
    );
    return (
      <div id="timers">
        {timers}
      </div>
    );
  }
}
export default EditableTimerList;
