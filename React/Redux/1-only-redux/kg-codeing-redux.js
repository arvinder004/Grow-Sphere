const redux = require('redux');

const INITAL_VALUE = {
    counter: 0
}

const reducer = (store = INITAL_VALUE, action) =>{
console.log("Reducer called", action)
return {counter: store.counter +1};    
}
const store  = redux.createStore(reducer)

const subscriber = () => {
const state = store.getState()
console.log(state)
}

store.subscribe(subscriber)

store.dispatch({type:'INCREMENT'})