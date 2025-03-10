import React from 'react'
import { useState } from 'react'

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
                <li key={task.id} className={task.isComplete ? 'completed' : 'incomplete'}> 
                    <span>
                    {task.id}-{task.name}
                    </span>
                    <button className="delete" onClick={() => handleDelete(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </>  
  )
}
