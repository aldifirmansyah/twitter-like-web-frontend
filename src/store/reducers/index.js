import { combineReducers } from "redux";
import userReducer from "./currentUser";
import errorReducer from "./errors";
import messagesReducer from "./messages";

const rootReducer = combineReducers({
  userReducer,
  errorReducer,
  messagesReducer
});

export default rootReducer;
