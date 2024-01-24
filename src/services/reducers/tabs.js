import { SET_ACTIVE_TAB, SET_SCROLL_REF_ACTION } from "../actions/tabs";
import { component_tabs } from "../../utils/data";

// Начальное состояние для редьюсера вкладок
const initialState = {
  activeTab: Object.keys(component_tabs)[0],
  scrollRef: {},
};

// Редьюсер для управления состоянием вкладок
export const tabsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // Обработка действия установки активной вкладки
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: payload,
      };
    // Обработка действия установки ссылок на элементы для прокрутки
    case SET_SCROLL_REF_ACTION:
      return {
        ...state,
        scrollRefs: { ...state.scrollRefs, ...payload },
      };
    default:
      return state;
  }
};
