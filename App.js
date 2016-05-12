import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            timeElapsed: 0
        };
        this.tick = this.tick.bind(this)
    }

    tick() {
        this.setState({
            timeElapsed: this.state.timeElapsed + 1
        })
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }

    render() {
        return <div>
            <div>{this.state.timeElapsed}</div>
            <div>Hello World!</div>
        </div>
    }
}
