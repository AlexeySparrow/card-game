import {combineReducers, createStore} from "redux";
import {cardsReducer} from "./redusers/cardsReducer";

let reducers = combineReducers({
    cards: cardsReducer
});

export let store = createStore(reducers);
