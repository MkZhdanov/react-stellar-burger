import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/index";
import thunk from "redux-thunk";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { ALL_ORDERS_URL, USER_ORDERS_URL } from "../utils/data";
import {
  WS_CLOSED,
  WS_ERROR,
  WS_GET_ORDERS,
  WS_START,
  WS_SUCCESS,
} from "./constants";
import {
  WS_USER_CLOSED,
  WS_USER_ERROR,
  WS_USER_GET_ORDERS,
  WS_USER_START,
  WS_USER_SUCCESS,
} from "./constants";

// Объект с действиями для WebSocket соединения с заказами
const wsActions = {
  wsInit: WS_START,
  onOpen: WS_SUCCESS,
  onClose: WS_CLOSED,
  onError: WS_ERROR,
  onMessage: WS_GET_ORDERS,
};

// Объект с действиями для WebSocket соединения с пользовательскими заказами
const wsPersonalActions = {
  wsInit: WS_USER_START,
  onOpen: WS_USER_SUCCESS,
  onClose: WS_USER_CLOSED,
  onError: WS_USER_ERROR,
  onMessage: WS_USER_GET_ORDERS,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      thunk,
      socketMiddleware(ALL_ORDERS_URL, wsActions),
      socketMiddleware(USER_ORDERS_URL, wsPersonalActions)
    ),
  devTools: process.env.NODE_ENV !== "production",
});
