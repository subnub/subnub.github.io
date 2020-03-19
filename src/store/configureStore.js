import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import mainReducer from "../reducers/main";
import selectedReducer from "../reducers/selected";

export default () => {

    const store = createStore(
        combineReducers({
           main: mainReducer,
           selected: selectedReducer,
        }),
        applyMiddleware(thunk)
    );

    return store;
}

