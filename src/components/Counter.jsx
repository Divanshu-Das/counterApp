import React, {Component} from 'react';
import CounterButton from './CounterButton';

class Counter extends Component {
    state = {
        counterValue: 0
    }
    
    increment = (value) => {
        this.setState({
            counterValue: this.state.counterValue + value
        })
    }

    decrement = (value) => {
        this.setState({
            counterValue: this.state.counterValue - value
        })
    }

    reset = () => {
        this.setState({
            counterValue: 0
        })
    }

    render() {
        return(
            <div>
                <CounterButton value={1} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <br/>
                <CounterButton value={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <br/>
                <CounterButton value={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <div style={{fontSize: '20px', marginTop: '10px'}}> 
                    {this.state.counterValue}
                </div>
                <div>
                    <button style={{fontSize: '40px', marginTop: '20px'}}
                    onClick={this.reset}>
                        Reset
                    </button>
                </div>
            </div>
        )
    }
}

export default Counter;