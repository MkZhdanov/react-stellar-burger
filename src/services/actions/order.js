import { getFetchOrderInfo } from "../api";
import isEmpty from "../../utils/isEmpty";

// ======== Action Types ========
export const FETCH_ORDER = "FETCH_ORDER";
export const FETCH_ORDER_SUCCESS = "FETCH_ORDER_SUCCESS";
export const FETCH_ORDER_FAILED = "FETCH_ORDER_FAILED";

// ======== Action Creators ========
// Действие для запроса заказа
export const fetchOrder = () => ({ type: FETCH_ORDER });

// Действие при успешном получении заказа
export const fetchOrderSuccess = (orderData) => ({
  type: FETCH_ORDER_SUCCESS,
  payload: orderData,
});

// Действие при неудачном получении заказа
export const fetchOrderFailed = (error = "Unknown error") => ({
  type: FETCH_ORDER_FAILED,
  payload: error,
});

// ======== Thunk Action ========
// Асинхронная функция получения информации о заказе по его номеру
const getOrderInfo = async (number) => {
  try {
    return await getFetchOrderInfo(number);
  } catch (error) {
    throw new Error(`Не удалось получить информацию о заказе #${number}`);
  }
};

// Экспорт функции для получения информации о заказе
export const getInformationOrder = (number) => async (dispatch) => {
  dispatch(fetchOrder());
  try {
    // Запрос информации о заказе по его номеру
    const { orders } = await getOrderInfo(number);
    const { createdAt, ingredients, name, status } = orders[0];

    // Проверка наличия необходимых данных в полученной информации о заказе
    if (
      isEmpty(createdAt) ||
      isEmpty(ingredients) ||
      isEmpty(name) ||
      isEmpty(status)
    ) {
      throw new Error(`Получены пустые данные для заказа #${number}`);
    }

    dispatch(fetchOrderSuccess(orders[0]));
  } catch (error) {
    dispatch(fetchOrderFailed(error));
  }
};
