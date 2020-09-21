import React from 'react'
import Task from '../components/Task'

export default class TasksContainer extends React.Component {

    state = {
        text: "",
        category: ""
    }

    renderTasks = () => {
        return this.props.tasks.map(task => <Task key={task.text} category={task.category} text={task.text} deleteHandler={this.props.deleteHandler} />)
    }

    submitForm = (event) => {
        event.preventDefault()
        event.persist()
        console.log(`Hey cool, a new task: ${this.state.text}`)
        this.props.submitHandler(this.state)
        event.target.reset()
    }

    changeHandler = (event) => {
        event.persist()
        this.setState(()=>({
            [event.target.name]: event.target.value
        }))
    }

    render(){
        return(
            <div className="tasks">
                <h5>Tasks</h5>
                <form className="new-task-form" onSubmit={this.submitForm}>
                    <input name="text" placeholder="New Task Details" type="text" onChange={this.changeHandler}/>
                    <select name="category" onChange={this.changeHandler}>
                        <option>Code</option>
                        <option>Food</option>
                        <option>Money</option>
                        <option>Misc</option>
                    </select>
                    <input type="submit" />
                </form>
                {this.renderTasks()}
            </div>
        )
    }

}