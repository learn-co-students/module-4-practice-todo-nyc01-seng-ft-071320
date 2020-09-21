import React from 'react'

const Task = (props) => {

    const deleteHandler = () => {
        props.deleteHandler(props)
    }

    return(
        <div className="task">
            <div className='label'>
                {props.category}
            </div>
            <div className='text'>
                {props.text}
            </div>
            <button className="delete" onClick={deleteHandler}>
                X
            </button>
        </div>
    )
}

export default Task