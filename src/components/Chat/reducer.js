import { CONSTANTS } from "./../../constants";
const { CHAT_ACTIONS } = CONSTANTS;
const reducer = (state, action) => {
  switch (action.type) {
    case CHAT_ACTIONS.DATA_RESPONSE_SUCCES: {
      const {
        data: { messages, users },
      } = action;
      const usersLinkMap = new Map();
      users.map((user) => usersLinkMap.set(user.id, user));
      const messagesWithUser = messages.map((message) => {
        const newMessageWithUser = {
          ...message,
          user: usersLinkMap.get(message.userId),
        };
        return newMessageWithUser;
      });
      const newState = {
        ...state,
        users,
        messages: messagesWithUser,
      };
      return newState;
    }
    case CHAT_ACTIONS.DATA_RESPONSE_ERROR: {
      const newState = {
        ...state,
        error: action.error,
      };
      return newState;
    }
    case CHAT_ACTIONS.DATA_RESPONSE_IS_FETCHING_TRUE: {
      const newState = {
        ...state,
        isFetching: true,
      };
      return newState;
    }
    case CHAT_ACTIONS.DATA_RESPONSE_IS_FETCHING_FALSE: {
      const newState = {
        ...state,
        isFetching: false,
      };
      return newState;
    }

    default:
      return state;
  }
};
export default reducer;
