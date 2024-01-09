import { SET_ACTIVE_TAB, SET_SCROLL_REF_ACTION } from "../actions/tabs";
import { component_tabs } from "../../utils/data";

const initialState = {
  activeTab: Object.keys(component_tabs)[0],
  scrollRef: {},
};

export const tabsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: payload,
      };
    case SET_SCROLL_REF_ACTION:
      return {
        ...state,
        scrollRefs: { ...state.scrollRefs, ...payload },
      };
    default:
      return state;
  }
};
