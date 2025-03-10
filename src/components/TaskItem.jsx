import React from 'react'

/*
  If we use general props at component level we need to refer all the correspinding values
  by refering to props. For example, if we have a prop called title, we need to refer it as
  props.title. If we have a prop called subtitle, we need to refer it as props.subtitle. Instead
    of doing this, we can destructure the props object and get the values of the props object
    directly. This is called destructuring. We can destructure the props object as shown below:
    const TaskList = ({title, subtitle}) => {
    }
        Initial : export const TaskList = (props) => {
        Final : export const TaskList = ({title, subtitle}) => {
*/
export const TaskItem = ({project, task, handleDelete}) => {
  return (
    <div>
        <li className={task.isComplete ? 'completed' : 'incomplete'}> 
            <span>
            For Project : {project} :: {task.id}-{task.name} 
            </span>
            <button className="delete" onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
    </div>
  )
}
