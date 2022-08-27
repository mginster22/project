import { CONSTANTS } from "./constants";
const {
  MENU_ACTIONS: { MENU_CLOSE, MENU_OPEN },
} = CONSTANTS;

const reducer = (state, action) => {
  switch (action.type) {
    case MENU_OPEN: {
      return {
        ...state,
        isMenuOpen: true,
      };
    }
    case MENU_CLOSE: {
      return {
        ...state,
        isMenuOpen: false,
      };
    }
    default:
      return state;
  }
};
export default reducer;
