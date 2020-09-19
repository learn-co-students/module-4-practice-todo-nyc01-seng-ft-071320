import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import Category from './Containers/Category'

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

  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <Category tasks={this.state.tasks} categories={CATEGORIES}/>
      </div>
    );
  }
}


export default App;
