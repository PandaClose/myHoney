import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import RouterConfig from "./router/RouterConfig";
import defaultStates from "./store/states";
import reducer from "./store/reducer";
import {createStore} from "redux";
import {Provider,connect} from "react-redux";

const store = createStore(reducer,defaultStates);

ReactDom.render(
    <Provider store={store}>
        <RouterConfig/>
    </Provider>,
    document.querySelector("#app")
);