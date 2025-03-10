import React from 'react'


export const TaskItem = (props) => {
  return (
    <div>
        <li key={props.task.id} className={props.task.isComplete ? 'completed' : 'incomplete'}> 
            <span>
            {props.task.id}-{props.task.name}
            </span>
            <button className="delete" onClick={() => props.handleDelete(props.task.id)}>Delete</button>
        </li>
    </div>
  )
}
