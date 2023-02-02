const redux = require('redux');

// reducer function
const counterReducer = (state = {counter:0}, action) => {

    if(action.type=='increment'){
    return {
        counter : state.counter + 1,
    }; 
}
if(action.type=='decrement'){
    return {
        counter : state.counter -1,
    };
}
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
}
// counterSubscriber will be fired by the store.
store.subscribe(counterSubscriber);

store.dispatch({type:'increment'})
store.dispatch({type:'decrement'})