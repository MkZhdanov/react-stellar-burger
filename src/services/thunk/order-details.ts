import {
  createOrderRequest,
  createOrderSuccess,
  createOrderFailure,
} from "../actions/order-details";
import { postFetchBurgerRequest } from "../api";
import { AppThunk } from "../index";

// Отправляет POST-запрос на сервер с указанными ингредиентами для создания заказа
export const createOrder =
  (ingredients): AppThunk =>
  async (dispatch) => {
    dispatch(createOrderRequest());
    try {
      const order = await postFetchBurgerRequest(ingredients);
      dispatch(createOrderSuccess(order.order));
    } catch (error) {
      dispatch(createOrderFailure());
    }
  };
