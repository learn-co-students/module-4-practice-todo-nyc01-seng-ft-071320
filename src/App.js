import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import Categories from './Containers/Categories'
import Tasks from './Containers/Tasks'

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
    selected: "All"
  }

  appClickHandler = (category) => {
    this.setState(() => ({ selected: category }))
  }

  getSelected = (category) => {
    if (category === this.state.selected) {
      return 'selected'
    }
  }

  appSubmitHandler = (taskObj) => {
    this.setState(() => ({ tasks: [...this.state.tasks, taskObj] }))
  }

  appDeleteHandler = (text) => {
    let newArray = this.state.tasks
    let foundObj = newArray.find(task => task.text === text)
    newArray.splice(newArray.indexOf(foundObj), 1)
    this.setState(() => ({ tasks: newArray }))
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <Categories categories={CATEGORIES} tasks={this.state.tasks} appClickHandler={this.appClickHandler} getSelected={this.getSelected} selected={this.state.selected} />
        <Tasks category={this.state.selected} categories={CATEGORIES} tasks={this.state.tasks} appSubmitHandler={this.appSubmitHandler} appDeleteHandler={this.appDeleteHandler} />
      </div>
    );
  }
}


export default App;
