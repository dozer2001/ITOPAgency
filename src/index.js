import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class Layaut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timerStarted: false,
            timerStopped: true,
            hours: 0,
            minutes: 0,
            second: 0,
            captures: []
        }
    }

    handlerTimerStart(event) {
        event.preventDefault();

        if (this.state.timerStopped) {

           this.timer = setInterval(() => {
                this.setState({timerStarted: true, timerStopped: false});
                if (this.state.timerStarted) {
                    if (this.state.second >= 60) {
                        this.setState((prevState) => ({minutes: prevState.minutes + 1, second: 0}))
                    }
                    if (this.state.minutes >= 60) {
                        this.setState((prevState) => ({hours: prevState.hours + 1, minutes: 0, second: 0}))
                    }

                    this.setState((prevState) => ({second: prevState.second + 1}))
                }

            }, 1000)
        }
    }

    handlerTimerWait(event) {
        event.preventDefault();
        this.setState({timerStarted: false, timerStopped: true});
        clearInterval(this.timer)
    }

    handlerTimerReset(){
        this.setState({timerStarted:false,timerStopped: true, second: 0, minutes: 0, hours: 0})

    }
    handlerTimerStop(event){
        event.preventDefault();
        this.setState({timerStarted: false, timerStopped: true});
        clearInterval(this.timer)
        this.setState({timerStarted:false,timerStopped: true, second: 0, minutes: 0, hours: 0})
    }
    render() {
        return (
            <div>
                <h2>Timer</h2>
                <div className="timer-container">
                    <div className="current-timer">
                        {this.state.hours + ":" + this.state.minutes + ':' + this.state.second}
                    </div>
                    <div className="timer-controls">
                        <button onClick={this.handlerTimerStart.bind(this)}> Start</button>
                        <button onClick={this.handlerTimerStop.bind(this)}> Stop</button>
                        <button onClick={this.handlerTimerWait.bind(this)}> Wait</button>
                        <button onClick={this.handlerTimerReset.bind(this)}> Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Layaut/>,
    document.getElementById('root')
);


reportWebVitals();
