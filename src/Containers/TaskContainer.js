import React from 'react'
import Task from '../Components/Task'
import Form from '../Components/Form'


export default function TaskContainer(props){

  const tasks = () => {
    return props.tasks.map(taskObj => <Task delete={props.delete} form={props.form} task={taskObj}/>)
  }

  return(
    <div className="tasks">
      <h5>Tasks</h5>
      {props.form === "toggle on" ? <Form submitForm={props.submitForm} /> : null}
      <div>{tasks()}</div>
    </div>
  )

}