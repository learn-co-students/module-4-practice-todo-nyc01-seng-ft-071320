import React, { Component } from 'react' 

class Task extends Component {
    render() {
        return (
            <div class="task">
                <div class="label">
                    {this.props.task.category}
                </div>
                <div class="text">
                    {this.props.task.text}
                </div>
                <button class="delete" onClick={() => this.props.clickHandler(this.props.task)}>X</button>
            </div>
        )
    }
}

export default Task