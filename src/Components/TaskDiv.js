import React from 'react'



class TaskDiv extends React.Component {

    deleteHandler = () => {
        this.props.appDeleteHandler(this.props.text)
    }

    render() {
        return (
            <div className="task">
                <div className="label">{this.props.label}</div>
                <div className="text">{this.props.text}</div>
                <button className="delete" onClick={this.deleteHandler}>X</button>
            </div>
        )
    }

}

export default TaskDiv