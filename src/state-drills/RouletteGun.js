import React from 'react';

export default class RouletteGun extends React.Component{
    constructor(props){
        super(props)
        this.state={
            chamber:null,
            spinningTheChamber:false,            
        }
    }
    static defaultProps = {
        bulletInChamber:8,
    }

    handleClick = () =>{
        this.setState({
            spinningTheChamber: true,
            text:'Spinning the chamber and pulling the trigger! ...'
        })
        this.timeout = setTimeout(() => {
            
            this.setState({
                spinningTheChamber: false
            })
            const newCham=Math.ceil(Math.random() * 8);
            this.setState({
                chamber: newCham
            })
            this.renderText();
        }, 2000)
    }

    componentWillUnmount(){
        clearTimeout(this.timeout)
    }



    renderText = () => {
        
        if(this.state.chamber === this.props.bulletInChamber) {
            this.setState({
                text:'BANG!!!'
            })
        } else {
            this.setState({
                text: `You're safe!`
            })
        }
    }

    render(){
        return(
            <div>
                <p>
                    {this.state.text}
                </p>
                <button onClick={this.handleClick}>
                    Pull the Trigger!
                </button>
            </div>
        )
    }
}