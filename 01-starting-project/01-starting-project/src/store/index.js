import { createStore } from 'redux';

// reducer function
const counterReducer = (state = {counter:0}, action) => {

    if(action.type==='increment'){
    return {
        counter : state.counter + 1,
    }; 
}

if(action.type==='decrement'){
    return {
        counter : state.counter -1,
    };
}  
if(action.type==='toggle'){
    return {
        counter : 0,
    };
}  

return state;
};

const store = createStore(counterReducer);

export default store;