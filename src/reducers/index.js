import { combineReducers } from "redux";
import addUserReducer from "./reduxbooks";


// const reducers = combineReducers(
//     {
//         //   myNumber:changeTheNumber
//         changeTheNumber
//     }
// );

const reducers = combineReducers({
    addBook: addUserReducer
});


export default reducers;