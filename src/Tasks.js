import React from 'react'
import NewTaskForm from './NewTaskForm'

export default class Tasks extends React.Component {

    renderTasks = () => {
        return this.props.tasks(this.props.state).map(el => 
            <>
                <div className="task">
                    <div className="label">{el.category}</div>
                    <div className="text">{el.text}</div>
                    <button className="delete" onClick={() => {this.props.deleteHandler(el)}}>X</button>
                </div>
            </>
        )
    }
    
    render() {
        return(
            <div className="tasks">
                <h5>Tasks</h5>
                    <NewTaskForm submitHandler={this.props.submitHandler}/>
                    {this.renderTasks()}
            </div>
        )
    }
}

