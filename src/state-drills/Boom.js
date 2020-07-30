import React from 'react';

class Boom extends React.Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const newCount = this.state.count + 1
            this.setState({
                count: newCount
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        
        let text = (this.state.count > 8) ? "Boom" : (this.state.count % 2 === 0) ? "tick" : "tock";

        return (
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default Boom;