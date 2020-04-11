import React from 'react'

export default class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            degree: props.degree
        };
    }
    static defaultProps = {
        degree: 1
    }
    
    
    handleClick = () => {
        this.setState({
            count: this.state.count + this.state.degree
        })
    }

    render() {
        return (
            <div>
                <p>The current count is {this.state.count}</p>
                <button onClick={this.handleClick}>
                    Add 1
                </button>
            </div>
        )
    }
}