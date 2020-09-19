import React from 'react'

export default class Form extends React.Component {

  state = {
    task: "",
    category: ""
  }

  changeHandler = (e) => {
    e.persist()
    this.setState(()=>({
      [e.target.name]: e.target.value
    }))
  }

  submitHandler = (e) => {
    e.preventDefault()
    let newObj = {text: this.state.task, category: this.state.category}
    this.props.submitForm(newObj)
    this.setState(()=> ({
      task: "",
      category: ""
    }))
  }

  render(){
    return(
      <form className="new-task-form" onSubmit={this.submitHandler}>
        <input type="text" onChange={this.changeHandler} value={this.state.task} name="task" placeholder="New Task Details" />
        <select name="category" onChange={this.changeHandler}>
          <option>Code</option>
          <option>Food</option>
          <option>Money</option>
          <option>Misc</option>
        </select>
        <input type="submit" value="Add task" />
      </form>
    )
  }

}