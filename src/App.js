import React, { useState } from 'react';


const App = () => {
  const [todoList,setTodo]=useState([])
  const [todoTask,setTask]=useState('')
  const handleChange=(e)=>{
    setTask(e.target.value)
  }
 const pushTask=()=>{
  const todo=[...todoList,todoTask]
  setTodo(todo)
 }
 const deleteTask =(taskChoise)=>{
  const arrReste=todoList.filter(aR=>aR !== taskChoise
    )
    console.log(arrReste);
    setTodo( arrReste)
 }
  return (
    <div className='App '>
      <div className="addTask">
        <input onChange={handleChange}/>
        {todoList.map(td=><li>{td} <button onClick={()=>{deleteTask(td)}}> delete </button></li>)}
        <button onClick={pushTask}>addTask</button>
       
      </div>
      <div className="list">
        
      </div>
    </div>
  );
};

export default App;
