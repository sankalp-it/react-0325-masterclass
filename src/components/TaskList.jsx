import React from 'react'
import { useState } from 'react'
import { TaskItem } from './TaskItem';
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
export const TaskList = (props) => {
    const [tasks, setTasks] = useState([
        { id: 1, name: "Task 1", isComplete: true },
        { id: 2, name: "Task 2", isComplete: false },
        { id: 3, name: "Task 3", isComplete: false },
    ]);
    function handleDelete(id) {
        console.log('Delete Task with id:', id);
        setTasks(tasks.filter((task) => task.id !== id));
    
    }
   return (
    <> 
        <h1>{props.title} - {props.subtitle}</h1>
        <ul>
            {tasks.map((task) => (
                <TaskItem task={task} handleDelete={handleDelete} />
            ))}
        </ul>
    </>  
  )
}
