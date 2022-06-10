import { createStore } from "redux";
import rootreducers from "./reducers/index";

const store = createStore(rootreducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;


//import { createStore } from "redux"; we are importing store here