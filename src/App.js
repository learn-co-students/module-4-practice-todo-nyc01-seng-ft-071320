import React from 'react';
import './App.css';
import CategoryContainer from './Containers/CategoryContainer';
import TaskContainer from './Containers/TaskContainer';
import { CATEGORIES } from './data'

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
    buttonText: "Stretch Features Disabled",
    buttonClass: "toggle off",
    currentCats: CATEGORIES
  }

  clickHandler = (category) => {
    if (category === "All"){
      this.setState({
        currentCats: CATEGORIES
      })
    } else {
      this.setState(() => ({currentCats: category}))
    }
  }

  filterCategories = () => {
    return this.state.tasks.filter(task => this.state.currentCats.includes(task.category))
  }

  toggleForm = () => {
    if (this.state.buttonClass === "toggle off"){
      this.setState(()=>({buttonClass: "toggle on", buttonText: "Stretch Features Enabled"}))

    } else {
      this.setState(()=>({buttonClass: "toggle off", buttonText: "Stretch Features Disabled"}))
    }
  }

  submitForm = (newTask) => {
    this.setState(()=> ({
      tasks: [newTask, ...this.state.tasks]
    }))
  }

  deleteTask = (taskObj) => {
    let newArray = this.state.tasks
    let found = newArray.findIndex(task => task.text === taskObj.text && task.category === taskObj.category)
    newArray.splice(found, 1)
    this.setState(()=> ({
      tasks: newArray
    }))

  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleForm} className={this.state.buttonClass}>{this.state.buttonText}</button>
        <h2>My tasks</h2>
        <CategoryContainer clickHandler={this.clickHandler} categories={CATEGORIES}/>
        <TaskContainer delete={this.deleteTask} submitForm={this.submitForm} form={this.state.buttonClass} tasks={this.filterCategories()} />
      </div>
    );
  }
}


export default App;
