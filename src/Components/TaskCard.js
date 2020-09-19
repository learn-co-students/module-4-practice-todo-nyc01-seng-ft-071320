import React from 'react'


class TaskCard extends React.Component {

    render() {
        return (
            <div className="task">
                <div className="label">{this.props.task.category}</div>
                <div className="text">{this.props.task.text}</div>
                <button className="delete" onClick={this.delete}>X</button>
            </div>
        )
    }

    delete = () => {
        this.props.deleteHandler(this.props.task)
    }


}



export default TaskCard