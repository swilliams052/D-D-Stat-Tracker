const objOne = {
    name: 'Fred',
};

const objTwo = {
    name: 'Marty'
}

const objThree = {
    name: 'Shamarooski'
}

const myState = [
    objOne,
    objTwo,
    objThree
]

const myAction = { 
    type: 'removeFromArray',
    payload: 0
}


const reducer = {
    removeFromArray: (state, poop) => {
        state.splice(poop.payload, 1)
    }
}

const removeFromArray = (poop) => {


    return {
        type: 'removeFromArray',
        payload: poop,
        actions: {
            anything: 'me luv u',
            poop: 'flush',
            pee: 'only if its brown'
        }
    }
}


const myReturn = removeFromArray('add')



const { anything, poop, pee } = myReturn.actions

console.log(poop)
// console.log(myState)
// reducer.removeFromArray(myState, myAction)
// console.log(myState)


// TRY AND DO THIS SAME THING BUT THE ACTION.PAYLOAD IS A NAME AND NOT AN INDEX POTENTIALLY TARGETING THE NAME PARIED WITH INDEX AND MAKE IT BEAUTIFUL