import ReactDOM from "react-dom";
import React from "react";
import "normalize.css/normalize.css"
import "./styles/styles.scss";
import configureStore from "./store/configureStore";
import {Provider} from "react-redux"
import AppRouter, {history} from "./routers/AppRouter"

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"))

console.log("hello");