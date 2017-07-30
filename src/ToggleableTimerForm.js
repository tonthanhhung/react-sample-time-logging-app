import React, { Component } from 'react';
import TimerForm from './TimerForm';

class ToggleableTimerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.handleFormOpen = this.handleFormOpen.bind(this);
  }

  handleFormOpen(){
    this.setState({
      isOpen: true
    }) 
  }

  render() {
    return this.state.isOpen
      ? <TimerForm />
      : <div className="ui basic content center aligned segment">
          <button className="ui basic button icon" onClick={this.handleFormOpen}>
            <i className="plus icon" />
          </button>
        </div>;
  }
}
export default ToggleableTimerForm;
