import React from 'react';
import './App.css';
import CategoryContainer from './Containers/CategoryContainer';
import TaskContainer from './Containers/TaskContainer';
import { CATEGORIES } from './data';
import Form from './Components/Form';

class App extends React.Component {
  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food',
      },
      {
        text: 'Save a tenner',
        category: 'Money',
      },
      {
        text: 'Build a todo app',
        category: 'Code',
      },
      {
        text: 'Build todo API',
        category: 'Code',
      },
      {
        text: 'Get an ISA',
        category: 'Money',
      },
      {
        text: 'Cook rice',
        category: 'Food',
      },
      {
        text: 'Tidy house',
        category: 'Misc',
      },
    ],
    selectedButton: 'All',
  };

  buttonSelector = (e) => {
    e.persist();
    this.setState(() => ({
      selectedButton: e.target.textContent,
    }));
  };

  categoryFilter = () => {
    if (this.state.selectedButton === 'All') {
      return this.state.tasks;
    }
    return this.state.tasks.filter(
      (task) => task.category === this.state.selectedButton
    );
  };

  addNewTask = (newTask) => {
    const newTasksArray = [...this.state.tasks, newTask];
    this.setState(() => ({
      tasks: newTasksArray,
    }));
  };

  removeTask = (e) => {
    const newTasksArray = [...this.state.tasks];
    const found = newTasksArray.find(
      (element) => element.text === e.target.previousElementSibling.textContent
    );
    const index = newTasksArray.indexOf(found);
    newTasksArray.splice(index, 1);
    this.setState(() => ({
      tasks: newTasksArray,
    }));
  };

  render() {
    return (
      <div className='App'>
        <h2>My tasks</h2>
        <CategoryContainer
          categories={CATEGORIES}
          buttonSelector={this.buttonSelector}
          selectedButton={this.state.selectedButton}
        />
        <div className='tasks'>
          <h5>Tasks</h5>
          <Form addNewTask={this.addNewTask} />
          <TaskContainer
            tasks={this.categoryFilter()}
            removeTask={this.removeTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
