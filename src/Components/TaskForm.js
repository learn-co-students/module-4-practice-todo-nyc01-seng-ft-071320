import React from 'react'

class TaskForm extends React.Component {

    state = {
        text: "",
        category: "Code"
    }

    changeHandler = (e) => {
        e.persist()
        this.setState(() => ({ text: e.target.value }))
    }

    selectChangeHandler = (e) => {
        e.persist()
        this.setState(() => ({ category: e.target.value }))
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.appSubmitHandler(this.state)
    }

    render() {
        return (
            <form className="new-task-form" onSubmit={this.submitHandler} >
                <input type="text" placeholder="New task details" value={this.state.task} onChange={this.changeHandler} />
                <select onChange={this.selectChangeHandler}>
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

export default TaskForm