import { TUserActions } from "./actions/auth";
import { TBurgerConstructorActions } from "./actions/burger-constructor";
import { TIngredientsActions } from "./actions/ingredients";
import { TOrderDetailsActions } from "./actions/order-details";
import { TOrderActions } from "./actions/order";
import { TOrdersActions } from "./actions/orders";
import { TTabsActions } from "./actions/tabs";

import { ThunkAction } from "redux-thunk";

import { rootReducer } from "./reducers/";
import { store } from "./store";

// Типизация всех экшенов приложения
type TApplicationActions =
  | TUserActions
  | TBurgerConstructorActions
  | TIngredientsActions
  | TOrderDetailsActions
  | TOrderActions
  | TOrdersActions
  | TTabsActions;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>;
