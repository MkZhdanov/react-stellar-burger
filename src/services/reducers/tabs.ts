import { SET_ACTIVE_TAB } from "../constants";
import { TTabsActions } from "../actions/tabs";
import { component_tabs } from "../../utils/data";

const componentTabsKeys = Object.entries(component_tabs);

type TTabsState = {
  tabs: string[][];
  activeTab: string;
};

// Начальное состояние для редьюсера вкладок
const initialState: TTabsState = {
  tabs: componentTabsKeys,
  activeTab: componentTabsKeys[0][0],
};

// Редьюсер для управления состоянием вкладок
export const tabsReducer = (state = initialState, actions: TTabsActions) => {
  switch (actions.type) {
    // Обработка действия установки активной вкладки
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: actions.payload,
      };
    default:
      return state;
  }
};
