import React from 'react'
import TaskDiv from '../Components/TaskDiv'
import TaskForm from '../Components/TaskForm'

function filterTasks(props) {
    return props.category === "All" ? props.tasks : props.tasks.filter(task => task.category === props.category)
}

function renderTasks(props) {
    return filterTasks(props).map(task => <TaskDiv text={task.text} label={task.category} appDeleteHandler={props.appDeleteHandler} />)
}

function Tasks(props) {
    console.log(props.tasks)
    return (
        < div className="tasks" >
            <h5>Tasks</h5>
            <TaskForm appSubmitHandler={props.appSubmitHandler} categories={props.categories} />
            <div>
                {renderTasks(props)}
            </div>
        </div>
    )
}

export default Tasks