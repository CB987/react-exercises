const { createStore } = require('redux');


//write out an example/default version of my application state

const defaultState = {
    count: 0
};

//describe the ways that state can change
// - count can go up by one
// - count can go down by one
// find single words or short phrases for those changes
//         -increment
//         -decrement
// translate those into objects

// also good to all-caps the variable for an action

const ACTION_INC = {
    type: 'INCREMENT' //common to all-caps type
};

const ACTION_DEC = {
    type: 'DECREMENT'
};

//write a pure function that accepts the current state and an action, thern returns the new version state

const counter = (state = defaultState, action) => {
    //check the action.type
    // if (action.type === ACTION_INC.type) {}
    switch (action.type) {
        case ACTION_INC.type:
            //if it's 'INCREMENT', return a new state object with the count +1
            return {
                count: state.count + 1
            };
        // break; //no need to break, because returning. if not returning, make sure to break so other states aren't triggered

        case ACTION_DEC.type:
            //if it's 'DECREMENT', return a new state object with count -1
            return {
                count: state.count - 1
            };

        default:
            //else return the state as-is
            return state;

    }
};

//create your store that knows how to use your reducer fxn
const store = createStore(counter);

//you can subscribe to notifications of any changes to the state
store.subscribe(() => {
    const theState = store.getState();
    console.log(`The state is now ${theState}`);
});

module.exports = {
    store,
    ACTION_DEC,
    ACTION_DEC
};

/*
const {
    store,
    ACTION_INC,
    ACTION_DEC
    } = require('./index');
    */