import React , { Component } from 'react';

class CounterButton extends Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps, nextState){    
        if(this.state.count !== nextState.count) return true
        else return false;
    }

    updateCount = () => {
        this.setState(state =>{//Grab de current state and return the new state
            return {count: this.state.count + 1}
        })
    }

    render(){
        return (
            <button color={this.props.color} onClick={this.updateCount}>
                Count: {this.state.count}
            </button>
        );
    }
}

export default CounterButton; 