import React from 'react'

function FunctionProps(props) {

    const {name , fname} = props

    return (
        <div>
            <h1>this is a props component</h1>
            <div>
            <h2>{name}</h2>
            <h2>{fname}</h2>
            </div>
        </div>
    )
}

export default FunctionProps
