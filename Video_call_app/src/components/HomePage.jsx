import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();
    const [randomId,setrandomId] = useState("");
    const [Visible,setVisible] = useState(true);

    const handleId = ()=>{
        const id = Math.random().toString().substring(2,9);
        const timestamp = Date.now().toString(36).substring(-4)
        setrandomId(id+timestamp);
        setVisible(false);
    }

    const handleOneCall = ()=>{
        if(!randomId){
            alert("Plaese genrate a Id");
            return;
        }
        navigate(`/callpage/${randomId}?type=one-to-one`);
    }


    const handleGroupCall = ()=>{
         if(!randomId){
            alert("Plaese genrate a Id");
            return;
        }
        navigate(`/callpage/${randomId}?type=group`);
    }

  return (
    <div className='main-container'>
         <div className="content-container">
            <h1>WELLCOME TO VIDEO CALL APP</h1>
            <p>Genrate a Random room id</p>
            <div className="room-id">
                <input type="text" value={randomId} readOnly className='input'/>
                <button onClick={handleId} className='btn'>Genrate</button>
            </div>
            <div className="call-btn">
                <button disabled={Visible} onClick={handleOneCall}>One to One Call</button>
                <button disabled={Visible} onClick={handleGroupCall}>Group Call</button>
            </div>
         </div>
    </div>
  )
}

export default HomePage