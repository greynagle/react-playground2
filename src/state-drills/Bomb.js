import React from 'react';

export default class Bomb extends React.Component {
    state = {
        count: 0,
        disp: 'tick',
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            console.log(this.state.count)
            const newCount = this.state.count + 1;
            let clear=false;
            let newDisp;
            if (newCount % 2 === 0 && newCount % 8 !== 0){
                newDisp='tick';
            } else if (newCount % 2 !== 0) {
                newDisp='tock';
            } else {
                newDisp='BOOM!!!';
                clear = !clear
            }
            
            this.setState({
                count: newCount,
                disp: newDisp
            })

            if(clear){
                clearInterval(this.interval)
            }

        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        return(
            <div>
                <p>
                    {this.state.disp}
                </p>
            </div>
        )
    }
}