import React from 'react';

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            elapsedTime: 0,
            buttonTitle: 'Start Timer'
        };
        this.tick = this.tick.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this)
    }

    tick() {
        this.setState({elapsedTime: this.state.elapsedTime + 1})
    }

    onClickHandler() {
        if (this.state.elapsedTime === 0) {
            this.setState({
                buttonTitle: 'Reset Timer'
            });
            this.interval = setInterval(this.tick, 100)
        } else {
            clearInterval(this.interval);
            this.setState({
                elapsedTime: 0,
                buttonTitle: 'Start Timer'
            })
        }
    }

    render() {
        return (
            <div>
                <div>{this.state.elapsedTime}</div>
                <button
                    onClick={this.onClickHandler}
                    name="timer">{this.state.buttonTitle}
                </button>
            </div>
        )
    }
}
