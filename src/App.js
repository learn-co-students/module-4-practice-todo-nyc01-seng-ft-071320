import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import Categories from './Categories.js'
import Tasks from './Tasks'

class App extends React.Component {

  state = {
    currentCategory: "All",
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
    ]
  }

  filterTasks = (category) => {
    let newArray = [...this.state.tasks]
    if (category === "All") {
      return newArray
    } else {
      return newArray.filter(el => el.category === category)
    }
  }

  clickHandler = (category) => {
    this.setState(() => ({currentCategory: category}))
    this.filterTasks(category)
  }

  pinkClick = (category) => {
    if (category === this.state.currentCategory) {
      return 'selected'
    }
    // return category === this.state.currentCategory ? 'selected' : null
  }

  deleteHandler = (task) => {
    let newArray = [...this.state.tasks]
    let deletedTask = newArray.filter(el => el !== task)
    this.setState(() => ({tasks: deletedTask}))
  }

  submitHandler = (task, category) => {
    let newObj = {text: task, category: category}
    console.log(newObj)
    this.setState((previousState) => ({ tasks: [...previousState.tasks, newObj]}))
  }

  render() {
    console.log(this.state.tasks)
    return (
      <div className="App">
        <h2>My tasks</h2>
          <Categories clickHandler={this.clickHandler} categories={CATEGORIES} pinkClick={this.pinkClick}/>
          <Tasks tasks={this.filterTasks} state={this.state.currentCategory} deleteHandler={this.deleteHandler} submitHandler={this.submitHandler}/>
      </div>
    );
  }
}


export default App;
