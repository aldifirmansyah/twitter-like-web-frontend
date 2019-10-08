import { LOAD_MESSAGES, REMOVE_MESSAGE } from "../actionTypes";

function messagesReducer(state = [], action) {
  switch (action.type) {
    case LOAD_MESSAGES:
      return [...action.messages];
    case REMOVE_MESSAGE:
      return state.filter(d => d._id !== action.id);
    default:
      return state;
  }
}

export default messagesReducer;
