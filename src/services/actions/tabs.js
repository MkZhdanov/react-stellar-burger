export const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";
export const SET_SCROLL_REF_ACTION = "SET_SCROLL_REF_ACTION";

export const setActiveTab = (activeTab) => ({
  type: SET_ACTIVE_TAB,
  payload: activeTab,
});

export const setScrollRefAction = (scrollRef) => ({
  type: SET_SCROLL_REF_ACTION,
  payload: scrollRef,
});
