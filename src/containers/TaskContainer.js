import React, { Component } from 'react'
import Task from '../components/Task'
import Form from '../components/Form'

class TaskContainer extends Component {

    tasks = () => {
        return this.props.tasks.map(task => <Task task={task} clickHandler={this.props.clickHandler}/>)
    }

    render() {
        return (
            <div class="tasks">
                <h5>Tasks</h5>
                <Form categories={this.props.categories} submitHandler={this.props.submitHandler}/>
                {this.tasks()}
            </div>
        )
    }
}

export default TaskContainer