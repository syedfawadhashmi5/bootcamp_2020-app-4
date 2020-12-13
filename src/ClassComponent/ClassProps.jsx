import React from 'react'

class ClassProps extends React.Component {


    componentDidUpdate(){
        console.warn('component is update')
    }

    render() {
        return (
            <div>
                <h1>Props Components {this.props.name} {this.props.age}</h1>
            </div>
        )
    }
}

export default ClassProps