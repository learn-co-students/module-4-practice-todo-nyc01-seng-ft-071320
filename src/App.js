import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import TaskContainer from './containers/TaskContainer'
import ButtonContainer from './containers/ButtonContainer'

class App extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ],
    selected: 'All'
  }

  buttonClickHandler = (cat) => {
    this.setState({selected: cat})
  }

  taskClickHandler = (deletedTask) => {
    let newArray = this.state.tasks
    let index = newArray.findIndex(task => task === deletedTask)
    newArray.splice(index, 1)
    this.setState({tasks: newArray})
  }

  filterTasks = () => {
    if (this.state.selected === 'All') {
      return this.state.tasks
    } else {
      return this.state.tasks.filter(task => task.category === this.state.selected)
    }
  }

  submitHandler = (task) => {
    let newArray = this.state.tasks
    newArray.push(task)
    this.setState({tasks: newArray})
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <ButtonContainer categories={CATEGORIES} clickHandler={this.buttonClickHandler} selected={this.state.selected} />
        <TaskContainer tasks={this.filterTasks()} categories={CATEGORIES} clickHandler={this.taskClickHandler} submitHandler={this.submitHandler}/>
      </div>
    );
  }
}


export default App;
