import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import TasksContainer from './containers/TasksContainer'
import CategoryContainer from './containers/CategoryContainer';

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
    categories: CATEGORIES,
    currentCategory: "All",
    filteredTasks: []
  }

  componentDidMount(){
    // console.log(CATEGORIES)
  }

  categorySelection = (category) => {
    console.log(category.name)

    if(category.name !== "All"){
      const newArray = this.state.tasks
      const filtered = newArray.filter(task => task.category === category.name)
      this.setState(()=>({
        currentCategory: category.name,
        filteredTasks: filtered
      }))
    } else if(category.name === "All") {
      this.setState(()=>({
        currentCategory: "All"
      }))
    }
    
  }

  deleteTask = (taskObj) => {
    const newArray = this.state.tasks
    const arrayAfterDelete = newArray.filter(task => task.text !== taskObj.text)
    this.setState(()=>({
      tasks: arrayAfterDelete
    }))
  }

  createTask = (newTask) => {
    let newArray = this.state.tasks
    newArray.push(newTask)
    this.setState(()=>({
      tasks: newArray
    }))
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <h5>Category Filters</h5>
        <CategoryContainer cats={this.state.categories} catSelectHandler={this.categorySelection} selectedCategory={this.state.currentCategory} />
        <TasksContainer tasks={this.state.currentCategory === "All" ? this.state.tasks : this.state.filteredTasks} deleteHandler={this.deleteTask} submitHandler={this.createTask} />
      </div>
    );
  }
}


export default App;


/* 
add table?

add filter buttons
        when you click each button, they filter the tasks list

how to change button colors when selecting a different button
    kind of like the radio buttons
      add state to the parent container
        add a property called 
*/