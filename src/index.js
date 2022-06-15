import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import store from "./store";
import { Provider } from "react-redux";


store.subscribe(() => console.log(store.getState()));
//Subscribe method is change listener for Redux Store


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <Provider store={store}>
        <AppRouter />
    </Provider>
);