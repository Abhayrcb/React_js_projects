import './Task.css'
const Task = ({item,Data,setData,index}) => {

    console.log(setData,index)
  return (
    <>
        <li>
            <div className="task">
                <p>{item}</p>
            </div>
           <div className="button">
                <button className='btn'>Edit</button>
                <button className='btn' 
                onClick={()=>{
                    let data = Data.filter((_,i) => i !== index);
                    setData(data);
                    setTimeout(() => {
                        alert("Task deleted successfully");
                    }, 200);
                }}>Delete</button>
           </div>
        </li>
    </>
  )
}

export default Task