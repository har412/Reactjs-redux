// connect is used for class based component
import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import {counterActions} from '../store/index'
const Counter = () => {
  // automatically adds the subscription so that the state is updated automatically
  let counter = useSelector(state => state.counter.counter);
  let showcounter = useSelector(state => state.counter.showCounter);
  // let auth = useSelector(state => state.auth.isAuthenticated);


  const dispatch=useDispatch()

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
 
  };

  
  const increment = () => {
    dispatch(counterActions.increment())
    // console.log("incre")
    // counter = counter+1;
  };

  const decrement = () => {
    dispatch(counterActions.decrement())
    // counter = counter-1;
    //  console.log("incre")
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase(10))
    // counter = counter-1;
    //  console.log("incre")
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {(showcounter) && <div className={classes.value}>{counter}</div>}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={increaseHandler}>Increase by 5</button>
    </main>
  );
};

export default Counter;