import React,{useState} from 'react'

function FunctionEvent() {

    const [val , setval]=useState('type value here')

    const handleEvent = (e) =>{

        console.warn('onchange' , e.target.value)

        setval(e.target.value)
    }

    return (
        <div>
            <h1>This is a Event Component</h1>
            <p>{val}</p>
            <input type='text' value={val} onChange={handleEvent} />
            <button onClick={() => {alert(val)}}>CHeck value</button>
        </div>
    )
}

export default FunctionEvent
