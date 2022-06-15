import { combineReducers } from "redux";
import addUserReducer from "./reduxbooks";
import changeTheNumber from "./upDown";

const rootreducers = combineReducers(
    {
        //myNumber:changeTheNumber
        changeTheNumber,
        addUserReducer,

    }
);

// const rootreducers = combineReducers({
//     addBook: addUserReducer,


// });


export default rootreducers;
