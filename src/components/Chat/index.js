import React, { useReducer, useEffect } from "react";
import { loadChat } from "../../api";
import { Spinner } from "../Spinner";
import reducer from "./reducer";
import { CONSTANTS } from "./../../constants";
const { CHAT_ACTIONS } = CONSTANTS;

const Chat = () => {
  const [state, dispatch] = useReducer(reducer, {
    users: [],
    messages: [],
    error: null,
    isFetching: false,
  });
  useEffect(() => {
    chatTrue();
    loadChat()
      .then((data) =>
        dispatch({ type: CHAT_ACTIONS.DATA_RESPONSE_SUCCES, data })
      )
      .catch((err) => dispatch({ type: CHAT_ACTIONS.DATA_RESPONSE_ERROR, err }))
      .finally(() => chatFalse());
  }, []);

  const chatTrue = () =>
    dispatch({ type: CHAT_ACTIONS.DATA_RESPONSE_IS_FETCHING_TRUE });
  const chatFalse = () =>
    dispatch({ type: CHAT_ACTIONS.DATA_RESPONSE_IS_FETCHING_FALSE });

  return (
    <div>
      {state.error && <div>ERORR!!</div>}
      {state.isFetching && <Spinner />}
      <h1>Chat:</h1>
      {state.messages.map((message) => (
        <div key={message.id}>
          <h2>{message.user.name}</h2>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Chat;
