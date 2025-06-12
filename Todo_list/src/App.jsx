import { useState,useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Task from './components/Task'

function App() {
const [Data,setData]= useState(()=>{
  const storedData = localStorage.getItem('todoList');
  return storedData ? JSON.parse(storedData) : [];
})


 useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(Data));
  }, [Data]);


  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
       <form onSubmit={e => {
               e.preventDefault();
               const value = e.target.data.value.trim();
               if (!value) {
               alert("Task cannot be empty");
               return;
          }
              if (!Data.includes(value)) setData(prev => [...prev, value]);
               else alert("This task already exists");
               e.target.data.value = '';
  }}
>
  <input type="text" name="data" id="txt" placeholder="Enter your task here.." />
  <button className="btn">Add</button>
</form>
        <ul>
            {Data.map((item,index)=>{
              // alert(item)
           return (
                <Task key={index}  item={item} setData={setData} index={index} Data={Data}/>
           )
        })} 
        </ul>
         
      </div>
    </>
  )
}

export default App
