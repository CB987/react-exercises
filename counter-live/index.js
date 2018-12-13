const { createStore } = require('redux');
const uuid = require('uuid/v4');


//1 write out an example/default version of my application state

const defaultState = {
    // count: 0
    counters: [
        {
            id: uuid(),
            count: 0
        }
    ]
};

//2a describe the ways that state can change
// - count can go up by one
// - count can go down by one
// 2b find single words or short phrases for those changes
//         -increment
//         -decrement
// 2c translate those into objects

// also good to all-caps the variable for an action

const ACTION_INC = {
    type: 'INCREMENT' //common to all-caps type
};

const ACTION_DEC = {
    type: 'DECREMENT'
};

const ACTION_ADD = {
    type: 'ADD_COUNTER'
};

const ACTION_DEL = {
    type: 'DELETE_COUNTER'
};

//"action creators"
// when you need to configure an action, write a function
const incrementCounter = (id) => {
    return {
        ...ACTION_INC,
        id
    }
};
// example: store.dispatch(incrementCounter('abc-123-doreme'))

const decrementCounter = (id) => {
    return {
        ...ACTION_DEC,
        id
    }
};

const addCounter = (id) => {
    return {
        ...ACTION_ADD,
        id
    }
}

//write a pure function that accepts the current state and an action, thern returns the new version state

const counter = (state = defaultState, action) => {
    //check the action.type
    // if (action.type === ACTION_INC.type) {}
    switch (action.type) {
        case ACTION_INC.type:
            //if it's 'INCREMENT', return a new state object with the count +1
            return {
                // count: state.count + 1
                //we want to return the array of counters
                // but we want to modify the one where its id === action.id
                counters: state.counter.map(oneCounter => {
                    if (oneCounter.id === action.id) {
                        //return a new version of oneCounter
                        return {
                            ...oneCounter,
                            count: oneCounter.count + 1
                        }
                    } else {
                        return oneCounter;
                    }
                })
            };
        // break; //no need to break, because returning. if not returning, make sure to break so other states aren't triggered

        case ACTION_DEC.type:
            //if it's 'DECREMENT', return a new state object with count -1
            return {
                count: state.count - 1
            };

        case ACTION_ADD.type:
            //return all the existing counters, but also a new one
            return {
                counters: [
                    ...state.counters,
                    {
                        id: uuid(),
                        count: 0
                    }
                ]
            };

        case ACTION_DEL.type:
            return {
                //we want all the counters, except the one whose id matches action.id
                counters: state.counters.filter(oneCounter => {
                    const canGoIntoClub = oneCounter.id !== action.id;
                    return canGoIntoClub;
                })
            }
    }

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
    console.log(`The state is now ${theState.counters}`);
});

module.exports = {
    store,
    decrementCounter,
    incrementCounter,
    addCounter,
    delCounter
};

/*
const {
    store,
    decrementCounter,
    incrementCounter,
    ACTION_INC,
    ACTION_DEC
    } = require('./index');
    */