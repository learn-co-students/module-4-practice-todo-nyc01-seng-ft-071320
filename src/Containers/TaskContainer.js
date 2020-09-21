import React, { Component } from 'react';
import Task from '../Components/Task';

export class TaskContainer extends Component {
  renderTasks = () => {
    const { tasks, removeTask } = this.props;
    return tasks.map((task) => (
      <Task key={task.text} task={task} removeTask={removeTask} />
    ));
  };

  render() {
    return <>{this.renderTasks()}</>;
  }
}

export default TaskContainer;
