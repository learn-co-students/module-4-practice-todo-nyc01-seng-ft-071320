import React, { Component } from 'react';

class Form extends Component {
  state = {
    text: '',
    category: '',
  };

  newTaskHandler = (e) => {
    e.persist();
    e.preventDefault();
    this.setState(() => ({
      text: e.target.value,
      category: e.target.nextElementSibling.value,
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewTask(this.state);
    this.setState(() => ({
      text: '',
      category: '',
    }));
  };

  render() {
    return (
      <form className='new-task-form' onSubmit={this.handleSubmit}>
        <input
          placeholder='New Task Details'
          type='text'
          value={this.state.text}
          onChange={this.newTaskHandler}></input>
        <select>
          <option>Code</option>
          <option>Food</option>
          <option>Money</option>
          <option>Misc</option>
        </select>
        <input type='submit' value='Add Task' />
      </form>
    );
  }
}

export default Form;
