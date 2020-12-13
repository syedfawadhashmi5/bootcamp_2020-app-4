import React from 'react'

class LifeCycle extends React.Component{

    constructor(){
        super()
        this.state ={
            name : 'syed',
            number : 0
        }
        console.warn('constructor')
    }

    componentDidMount(){

        console.warn('Component Did Mount')

    }

    componentWillUpdate(){

        console.warn('Component Will Update')


    }

    render(){
        return(
            <div>
                <h1>LifeCycleMethods && State</h1>
        <h2>{this.state.name} {this.state.number}</h2>
                <button onClick={() => {this.setState( {name : 'hashmi'})}}>Update State</button>
                <button onClick={() => {this.setState({number: 2})}}>Update State Number</button>

            </div>
        )
    }
}


export default LifeCycle