import { createStore } from "redux";
import rootreducers from "./reducers";
//import addUserReducer from "./reducers/reduxbooks";

// const store = createStore(rootreducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(rootreducers);



export default store;


//import { createStore } from "redux"; we are importing store here