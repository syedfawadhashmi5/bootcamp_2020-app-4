import React, {useState} from 'react'

import FunctionHooks from './FunctionHooks'

import FunctionProps from './FunctionProps'

import FunctionEvent from './FunctionEvent'

import FunctionListing from './FunctionListing'

import FunctionFrom from './FunctionFrom'

import FunictionApi from './FunictionApi'

function FunctionApp() {

    const [name , Setname]=useState('name')

    return (
        <div>
            <h1>Function base component</h1>
            <br />

            <FunctionHooks />
            <FunctionProps name={name} fname='jawed' />
            <button onClick={() => {Setname('fawad')}}>update Prop</button>

            <br />
            <FunctionEvent />

            <FunctionListing />

            <FunctionFrom />

            <FunictionApi />
        </div>
    )
}

export default FunctionApp
