import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  CLOSE_ORDER_MODAL,
} from "../actions/order-details";

const initialState = {
  loading: false,
  order: null,
  error: null,
  open: false,
};

export const orderReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        order: null,
        error: null,
        open: false,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        order: payload,
        open: true,
      };
    case CREATE_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case CLOSE_ORDER_MODAL:
      return {
        ...state,
        open: false,
      };
    default:
      return state;
  }
};
