import React,{useState , useEffect} from 'react'

function FunctionHooks() {

    let [state, setstate] = useState(0);

    const [name, setname] = useState('Count')


    useEffect(() => {

        console.warn("Component Will Update")

    })

    useEffect(() => {

        console.warn("Component Did Mount")

    }, [])

    useEffect(() => {

        console.warn("Component Will Update with one dependancing")

    }, [name])


    return (
        <div>
            <h1>UseSatate :  {name} {state}</h1>
            <button onClick={() => setname('counting')}>update state</button>
            <button onClick={() => setstate(state +1)}>update state</button>
        </div>
    )
}

export default FunctionHooks
