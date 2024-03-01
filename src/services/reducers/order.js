import {
  FETCH_ORDER,
  FETCH_ORDER_FAILED,
  FETCH_ORDER_SUCCESS,
} from "../actions/order";

// Начальное состояние редюсера заказов
const initialState = {
  information: {},
  isRequesting: false,
  hasRequestFailed: false,
  errors: [],
};

// Редюсер для управления состоянием заказов
export const orderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
        information: { ...payload },
        isRequesting: false,
      };
    }
    default: {
      return state;
    }
  }
};
