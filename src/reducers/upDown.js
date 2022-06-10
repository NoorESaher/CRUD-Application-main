const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
   switch (action.type) {
      case "INCREMENT": return state + 1;
      case "DECREMENT": return state - 1;
      default: return state;
   }
}
export default changeTheNumber;

// const changeTheNumber = (state = initialState, action) => {     (state = initialState is previous state and action is an action)
//    switch (action.type) {
//    case "INCREMENT": return state + 1;
//    case "DECREMENT": return state - 1;
//    default: return state;
//    }
// }
//(Change the number is reducer, reducers can be more than one so we created index.js file in reducers we can add many reducers and import them in ths index.js file.)