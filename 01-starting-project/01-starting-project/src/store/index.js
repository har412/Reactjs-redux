// import {createStore} from 'redux'
import {createSlice, configureStore} from '@reduxjs/toolkit';

const initialCounterState = {
    counter : 0,
    showCounter : false
}

const counterSlice = createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        // it is not directly changing the state but behind it is making a copy updating the field and returning a new state
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter += action.payload;
        },
        toggleCounter(state){
            state.showCounter = !state.showCounter
        },    
    
    }
});

const initialAuthState = {
    isAuthenticated:false
}

const authSlice = createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers:{
        // it is not directly changing the state but behind it is making a copy updating the field and returning a new state
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }    
    }
});

// action creators



// const changeState = (state = initialState, action) => {
//     // never mutate your state, always return a new state
//     if(action.type === "increment"){
//         return{
//             counter:state.counter + 1,
//             showCounter:state.showCounter,
//         }
//     }
//     if(action.type === "increase"){
//         return{
//             counter:state.counter + action.amount,
//             showCounter:state.showCounter,
//         }
//     }

//     if(action.type === "decrement"){
//         return{
//             counter:state.counter - 1,
//             showCounter:state.showCounter,
//         }
//     }

//     if(action.type === "toggle"){
//         return{
//             counter:state.counter,
//             showCounter:!(state.showCounter),
//         }
//     }
//     return state;
// }

// counterSlice should use .reducer only
// const store = createStore(counterSlice.reducer);

const store = configureStore({
    reducer:{auth:authSlice.reducer, counter:counterSlice.reducer}
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;