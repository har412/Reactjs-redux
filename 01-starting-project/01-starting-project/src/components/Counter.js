// connect is used for class based component
import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  // automatically adds the subscription so that the state is updated automatically
  let counter = useSelector(state => state.counter);
  const dispatch=useDispatch()
  const toggleCounterHandler = () => {
  dispatch({type:'toggle'})
  };
  
  const increment = () => {
    dispatch({type:'increment'})
    // console.log("incre")
    // counter = counter+1;
  };

  const decrement = () => {
    dispatch({type:'decrement'})
    // counter = counter-1;
    //  console.log("incre")
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
