import React from 'react'

export default class NewTaskForm extends React.Component {

    state = {
        task: "",
        category: "Code"
    }

    getTask = (e) => {
        e.persist()
        this.setState(() => ({[e.target.name]: e.target.value}))
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state.task, this.state.category)
        this.setState({task: "", category: ""})
    }

    render() {
        console.log(this.state)
        return(
            <form className="new-task-form" onSubmit={this.submitHandler}>
                <input placeholder="New task details" name="task" type="text" value={this.state.task} onChange={this.getTask}></input>
                <select value={this.state.category} name="category" onChange={this.getTask}>
                    <option >Code</option>   
                    <option>Food</option>   
                    <option>Money</option>   
                    <option>Misc</option>   
                </select>
                <input type="submit" value="Add task"></input>
            </form>
        )
    }
}