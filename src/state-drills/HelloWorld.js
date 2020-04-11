import React from 'react';

export default class HelloWorld extends React.Component {
    state={
        who: 'World!'
    }

    handleButton = (e) => {
        this.setState({
            who: e.target.name
        })
    }
    
    render() {
        return(
            <div>
                <p>
                    Hello, {this.state.who}
                </p>
                <button name='World!' onClick = {this.handleButton}>
                    World!
                </button>
                <button name='React!' onClick = {this.handleButton}>
                    React!
                </button>
                <button name='Friend!' onClick = {this.handleButton}>
                    Friend!
                </button>
            </div>
        )
    }
}