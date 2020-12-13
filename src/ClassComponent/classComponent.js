import React from 'react'

import LifeCycle from './LifeCycleMethods'

import ClassProps from './ClassProps'

class ClassApp extends React.Component {
    constructor(){
        super();
        this.state={age : 12}
    }
    render(){
        return(
            <div>
                <br />
                <h1>Class base component</h1>
                <br />
                <LifeCycle />
                <br />
                <ClassProps name='fawad' age={this.state.age}/>
                <button onClick={() => this.setState({age : +1})}>Update</button>
            </div>
        )
    }
}

export default ClassApp