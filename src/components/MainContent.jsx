import React from 'react'
import { useState } from 'react'
import { TaskList } from './TaskList';
import Counter from './Counter';

export const MainContent = () => {
    const [newCount, setNewCount] = useState(0);
  
    const [show,setShow] = useState(true);
    function handleOperation(operator) {
      if (operator == '+') {
        setNewCount(newCount + 1);
      } else {
        setNewCount(newCount - 1);
      }
    }
  
    const handleReset = () => {
      setNewCount(0);
    } 
  
    const projectName = 'Starck AI'
  return (
    <section className='maincontent'>
        <h1>This is main section</h1>
        <Counter count={newCount} handleOperation={handleOperation} handleReset={handleReset}/>
        <button className='trigger' onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>
        {show && <TaskList title="My Task List" subtitle="Test" project={projectName}/>}
    </section>
  )
}
