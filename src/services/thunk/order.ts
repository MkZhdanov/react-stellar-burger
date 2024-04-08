import {
  fetchOrder,
  fetchOrderFailed,
  fetchOrderSuccess,
} from "../actions/order";
import { getFetchOrderInfo } from "../api";
import isEmpty from "../../utils/isEmpty";
import { AppThunk } from "../index";

// Асинхронная функция получения информации о заказе по его номеру
const getOrderInfo = async (number: string) => {
  try {
    return await getFetchOrderInfo(number);
  } catch (error) {
    throw new Error(`Не удалось получить информацию о заказе #${number}`);
  }
};

// Экспорт функции для получения информации о заказе
export const getInformationOrder =
  (number?: string): AppThunk =>
  async (dispatch) => {
    dispatch(fetchOrder());
    try {
      if (!number) {
        throw new Error(`Получены пустые данные`);
      }

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
      dispatch(fetchOrderFailed());
    }
  };
