import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_MESSAGES, REMOVE_MESSAGE, ADD_MESSAGE } from "../actionTypes";

function loadMessages(messages) {
  return {
    type: LOAD_MESSAGES,
    messages
  };
}

function remove(id) {
  return {
    type: REMOVE_MESSAGE,
    id
  };
}

function removeMessage(userId, messageId) {
  return dispatch => {
    return apiCall("delete", `api/user/${userId}/messages/${messageId}`)
      .then(() => dispatch(remove(messageId)))
      .catch(err => dispatch(addError(err)));
  };
}

function fetchMessages() {
  return dispatch => {
    return apiCall("get", "/api/messages")
      .then(res => dispatch(loadMessages(res)))
      .catch(err => dispatch(addError(err)));
  };
}

function postNewMessage(text) {
  return (dispatch, getState) => {
    let { userReducer } = getState();
    const id = userReducer.user.id;
    return apiCall("post", `/api/user/${id}/messages`, { text })
      .then(() => true)
      .catch(err => dispatch(addError(err.message)));
  };
}

export { removeMessage, fetchMessages, postNewMessage };
