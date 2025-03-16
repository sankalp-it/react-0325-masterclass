import React from 'react'
import { useState } from 'react'
import { TaskItem } from './TaskItem';
import { MessageBox } from './MessageBox';
import './TaskList.css';
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
export const TaskList = ({project, title, subtitle}) => {
    const [tasks, setTasks] = useState([
        { id: 1, name: "Task 1", isComplete: true },
        { id: 2, name: "Task 2", isComplete: false },
        { id: 3, name: "Task 3", isComplete: false },
    ]);
    const styles = {
        color: "#be3434",
        border: '1px solid #be3434',
        padding: '20px',
        borderRadius: '5px',
        margin: '10px 0',
        fontSize: '20px'
      }
    function handleDelete(id) {
        console.log('Delete Task with id:', id);
        setTasks(tasks.filter((task) => task.id !== id));
    
    }
   return (
    <section name="tasklist"> 
        {/* The following line is used to display the title and subtitle of the task list using inline styling */}
        {/* <h1 style={{color: "#be3434", border: "1 px solid #be3434"}}>{project}: {title} - {subtitle}</h1> */}
        {/* Now the same using constant at the top of the component */}
        <h1 style={styles}>{project}: {title} - {subtitle}</h1>
        <ul>
            {tasks.map((task) => (
                <TaskItem project={project} key={task.id} task={task} handleDelete={handleDelete} />
            ))}
        </ul>
        <MessageBox messageType="success">
            <p className="title">Success</p>
            <p className="description">This is a success message</p>
        </MessageBox>
        <MessageBox messageType="warning">
            <p className="title">Warning</p>
            <p className="description">This is a warning message</p>
            <p className="description">Error while loading the page</p>
        </MessageBox>
        <MessageBox messageType="alert">
            <p className="title">Alert</p>
            <p className="description">This is a alert message</p>
        </MessageBox>
    </section>  
  )
}
