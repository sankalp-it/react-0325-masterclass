import React from 'react'

function Counter({count, handleOperation, handleReset})  {
  return (
    <div className="box">
    <p>Counter - {count}</p>
    <button className="add" onClick={handleOperation.bind(this,'+')}> + </button>
    <button className="sub" onClick={handleOperation.bind(this,'-')}> - </button>
    <button onClick={handleReset}> RESET </button>
  </div> 
  )
}

export default Counter
