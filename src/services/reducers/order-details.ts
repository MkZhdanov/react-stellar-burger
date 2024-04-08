import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  CLOSE_ORDER_MODAL,
} from "../constants";
import { TOrderDetailsActions } from "../actions/order-details";
import { IMyOrderResponse } from "../../utils/types/types";

type TOrderDetailsState = {
  loading: boolean;
  order: IMyOrderResponse | any;
  error: boolean | null;
  open: boolean;
};

// Начальное состояние для редюсера заказов
const initialState: TOrderDetailsState = {
  loading: false,
  order: null,
  error: null,
  open: false,
};

// Редюсер для заказов
export const orderDetailsReducer = (
  state = initialState,
  actions: TOrderDetailsActions
): TOrderDetailsState => {
  switch (actions.type) {
    // Установка состояния загрузки и сброс предыдущего заказа и ошибки
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        order: null,
        error: null,
        open: false, /////////++++++++++++++++
      };
    // Установка состояния загрузки в false и обновление заказа данными из payload
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: actions.payload,
        open: true,
      };
    // Установка состояния загрузки в false и обновление ошибки данными из payload
    case CREATE_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    // Закрытие состояния заказа
    case CLOSE_ORDER_MODAL:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};
