import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = { who: 'world' }
    }

    handleButtonClick = (event) => {
        this.setState({ who: event.currentTarget.innerText })
    }

    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={this.handleButtonClick}>
                    World
                </button>
                <button onClick={this.handleButtonClick}>
                    Friend
                </button>
                <button onClick={this.handleButtonClick}>
                    React
                </button>
            </div>
        )
    }
}

export default HelloWorld;