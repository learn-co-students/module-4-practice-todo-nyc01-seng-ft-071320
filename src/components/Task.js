import React from 'react'

function Task (props){
    console.log(props)
    return(
    <div className="task">
        <div className="label">{props.cat}</div>
        <div className="text">{props.task}</div>
        <button className="delete" onClick={()=>{props.delete(props.task)}}>Delete</button>
    </div>
    )
}

export default Task