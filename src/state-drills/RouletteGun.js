import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            chamber: null,
            spinningTheChamber: false 
        }
    }

    pullTheTrigger = () => {
        this.setState({
            spinningTheChamber: !this.state.spinningTheChamber
        })

        this.timeout = setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * (8 - 1) + 1);
            console.log('randomNumber!', randomNumber);

            this.setState({
                chamber: randomNumber,
                spinningTheChamber: false 
            })
        }, 2000);


    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    render() {
        
        let text = (this.state.spinningTheChamber) ? "spinning the chamber and pulling the trigger!..." : (this.state.chamber === this.props.bulletInChamber) ? "BANG!!!!" : "you're safe!";

        return (
            <div>
                <p>{text}</p>
                <button onClick={this.pullTheTrigger}>
                    Pull the trigger!
                </button>
            </div>
        )
    }
}

export default RouletteGun;