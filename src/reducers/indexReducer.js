import { combineReducers } from "redux";
import sample from './sample.js';
import postsReducer from "./postsReducer.js";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
  init: sample,
  posts: postsReducer,
  users: usersReducer
});

export default reducers;