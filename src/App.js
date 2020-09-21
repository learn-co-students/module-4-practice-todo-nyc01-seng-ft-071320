import React from 'react';
import './App.css';
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
    filteredTasks: [
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

  clickHandler = e => {
    const selectedBtn = document.querySelector(".selected")
    selectedBtn.classList.remove("selected")
    e.target.classList.add("selected")
    const category = e.target.textContent
    if (e.target.textContent === "All") {
      this.setState(() => ({
        filteredTasks: this.state.tasks
      }))
    } else {
      this.setState(() => ({
        filteredTasks: this.state.tasks.filter(task => task.category === category)
      }))
    }
  }

  genCategory = () => {
    return CATEGORIES.map(category => <button className={category === "All" ? "selected" : null} onClick={this.clickHandler}>{category}</button>)
  }

  genTask = () => {
  return this.state.filteredTasks.map(task => { 
    return(
      <div className="task">
        <div className="label">{task.category}</div>
        <div className="text">{task.text}</div>
      </div>
    )
  })
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <div className="categories">
          {this.genCategory()}
        </div>
        <div className="tasks">
          <h5>Tasks</h5>
          <div>
            {this.genTask()}
          </div>
        </div>
      </div>
    );
  }
}


export default App;
