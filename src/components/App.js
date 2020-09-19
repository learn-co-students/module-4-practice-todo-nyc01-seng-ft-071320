import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import Task from './components/Task'
import Category from './components/Category'
import Create from './components/Create'

class App extends React.Component {

  state = {
    categories:CATEGORIES,
    current:"All",
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

  tickTask = () =>{
    if (this.state.current==="All"){
      return this.state.tasks.map(el=><Task key={el.text} task={el.text} cat={el.category} delete={this.delete}/>)
    } else {
      let newArray = this.state.tasks.filter(el=>el.category===this.state.current)
      return newArray.map(el=><Task key={el.text} task={el.text} cat={el.category}/>)
    }
  }
  
  filter=(obj)=>{//console.log("this is my filter", obj)
    this.setState({current:obj})
    // return this.state.tasks.filter(el=>el.category===obj)
  }
  
  cats=()=>{
    return this.state.categories.map(el=><Category key={el} cat={el} filter={this.filter} current={this.state.current}/>)
  }
  
  delete=(obj)=>{
    console.log("this is my delete", obj)
    let newArray=this.state.tasks.filter(el=>el.text!==obj)
    this.setState(()=>({tasks:newArray}))
  }

  submit=(obj)=>{
    console.log("this is my creation",obj)
    let newObj= {text: obj,category: this.state.current}
    let newArray=[...this.state.tasks,newObj]
    this.setState(()=>({tasks:newArray}))
  }
  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <div className="categories">
          <h5>Categories filters</h5>
          {this.cats()}
          </div>
          <div className="tasks">
            <h2>Tasks</h2>
            {this.state.current !== "All" ? <Create submit={this.submit}/>: null}
            {this.tickTask()}
          </div>
      </div>
    );
  }
}


export default App;
