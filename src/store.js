import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducers from "./reducers/indexReducer";

export const Store = createStore(reducers, applyMiddleware(thunk));