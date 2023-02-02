// connect is used for class based component

import React, { Component } from 'react'

import { useDispatch, useSelector , connect} from 'react-redux';
import classes from './Counter.module.css';



class Counter extends Component {

    incrementHandler(){
      this.props.increment();
    }
    decrementHandler(){
      this.props.decrement();
    }
    toggleCounterHandler(){
      this.props.toggle();
    }
 

  render() {
    return (
      <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{this.props.counter}</div>
      <button onClick={this.incrementHandler.bind(this)}>Increment</button>
      <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
      <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
    </main>
    )
  }


}
const mapStateToProps = (state) => {
  return {
    counter:state.counter
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    increment:()=>dispatch({type:"increment"}) 
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
