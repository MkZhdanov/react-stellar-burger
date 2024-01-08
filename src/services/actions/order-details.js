import { postFetchBurgerRequest } from "../api";

export const CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST";
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS";
export const CREATE_ORDER_FAILURE = "CREATE_ORDER_FAILURE";
export const CLOSE_ORDER_MODAL = "CLOSE_ORDER_MODAL";

export const createOrderRequest = () => ({ type: CREATE_ORDER_REQUEST });
export const createOrderSuccess = (data) => ({
  type: CREATE_ORDER_SUCCESS,
  payload: data,
});
export const createOrderFailure = (error) => ({
  type: CREATE_ORDER_FAILURE,
  payload: error,
});
export const closeOrderModal = () => ({ type: CLOSE_ORDER_MODAL });

export const createOrder = (ingredients) => async (dispatch) => {
  dispatch(createOrderRequest());
  try {
    const order = await postFetchBurgerRequest(ingredients);
    if (order && order.success) {
      dispatch(createOrderSuccess(order.order));
    } else {
      throw new Error("error");
    }
  } catch (error) {
    dispatch(createOrderFailure(error.message));
  }
};
