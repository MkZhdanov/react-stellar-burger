import { SET_ACTIVE_TAB } from "../constants";

export interface ISetActiveTabAction {
  readonly type: typeof SET_ACTIVE_TAB;
  readonly payload: string;
}

export type TTabsActions = ISetActiveTabAction;

// Устанавливает активную вкладку
export const setActiveTab = (activeTab: string): ISetActiveTabAction => ({
  type: SET_ACTIVE_TAB,
  payload: activeTab,
});
