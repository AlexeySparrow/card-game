import {combineReducers, createStore} from "redux";
import {cardsReducer} from "./redusers/cards";

let reducers = combineReducers({
    cards: cardsReducer
});

export let store = createStore(reducers);
