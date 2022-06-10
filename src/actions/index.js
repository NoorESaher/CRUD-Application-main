export const incNumber = () => {
    return {
        type: 'INCREMENT',
    }
}

export const decNumber = () => {
    return {
        type: 'DECREMENT'
    }
};

// Increment and Decrement are Two Actions Here
//export const incNumber = () => {        ----> This Line creates Pure Function, incNumber is a function
//    return {
//        type: 'INCREMENT',              -----> Increment is an Action
//   }