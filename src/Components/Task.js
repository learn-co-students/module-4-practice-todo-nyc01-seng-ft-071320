import React from 'react';

function Task(props) {
  const { text, category } = props.task;
  return (
    <div className='task'>
      <div className='label'>{category}</div>
      <div className='text'>{text}</div>
      <button className='delete' onClick={props.removeTask}>
        X
      </button>
    </div>
  );
}

export default Task;
