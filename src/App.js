import React, {useState} from 'react';
import './App.css';
import {Message}  from './message.js'


function App() {

  let [count, setCount] = useState(1);
  
  let [ismorning, setMorning] = useState(false);
  
    return (
      <div className={`'box ${ismorning ? 'daylight' : 'box '}`}>
        <h1>Good  {ismorning ? "morning" : "night"}</h1>
          <Message counter={count} />
  
        <br />
        
        <button onClick={()=> setCount(++count)}>Update Counter</button>
        <button onClick={()=> setMorning(!ismorning)}>Update Day</button>
      </div>
    );
  }

export default App;
