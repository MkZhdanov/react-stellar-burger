import {
  FETCH_ORDER,
  FETCH_ORDER_FAILED,
  FETCH_ORDER_SUCCESS,
} from "../constants";
import { IOrder } from "../../utils/types/order";
import { TOrderActions } from "../actions/order";

type TOrderState = {
  information: IOrder | {};
  isRequesting: boolean;
  hasRequestFailed: boolean;
};

// Начальное состояние редюсера заказов
const initialState: TOrderState = {
  information: {},
  isRequesting: false,
  hasRequestFailed: false,
};

// Редюсер для управления состоянием заказов
export const orderReducer = (state = initialState, actions: TOrderActions) => {
  switch (actions.type) {
    case FETCH_ORDER: {
      // Обработка начала запроса на получение заказа
      return {
        ...state,
        information: {},
        isRequesting: true,
        hasRequestFailed: false,
      };
    }
    case FETCH_ORDER_FAILED: {
      // Обработка неудачного запроса на получение заказа
      return {
        ...state,
        isRequesting: false,
        hasRequestFailed: true,
      };
    }
    case FETCH_ORDER_SUCCESS: {
      // Обработка успешного запроса на получение заказа
      return {
        ...state,
        information: { ...actions.payload },
        isRequesting: false,
      };
    }
    default: {
      return state;
    }
  }
};
