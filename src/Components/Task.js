import React from 'react'


export default function Task (props){

  return(
    <div className="task">
      <div className="label">{props.task.category}</div>
      <div className="text">{props.task.text}</div>
      {props.form === "toggle on" ? <button className="delete" onClick={() => props.delete(props.task)}>X</button> : null}
    </div>
  )

}