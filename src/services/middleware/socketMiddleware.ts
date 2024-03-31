// Middleware для работы с WebSocket
import { Middleware } from "redux";
import { getCookie } from "../../utils/cookie";
import { IWsOptions } from "../../utils/types/types";
import { RootState } from "..";

export const socketMiddleware = (
  wsUrl: string,
  wsActions: IWsOptions
): Middleware<{}, RootState> => {
  return (store) => (next) => (action) => {
    let socket: WebSocket | null = null; // Инициализация переменной для хранения объекта WebSocket
    const { dispatch } = store;
    const { wsInit, onOpen, onClose, onError, onMessage } = wsActions; // Извлечение типов действий WebSocket из параметров
    const { type } = action; // Извлечение типа действия из параметра
    // Извлечение данных пользователя из состояния хранилища
    const accessToken = getCookie("accessToken");

    // Инициализация WebSocket при получении действия wsInit
    if (type === wsInit) {
      const token = accessToken?.replace("Bearer ", ""); // Извлечение токена из данных пользователя
      socket = new WebSocket(`${wsUrl}?token=${token}`); // Создание объекта WebSocket с передачей токена в URL
    }

    // Закрытие WebSocket при получении действия onClose
    if (type === onClose) {
      socket && socket.close(1000, "CLOSE_NORMAL"); // Проверка наличия WebSocket перед закрытием
    }

    // Обработка событий WebSocket, если объект WebSocket инициализирован
    if (socket) {
      // Обработка события открытия соединения
      socket.onopen = (event) => dispatch({ type: onOpen });

      // Обработка события ошибки соединения
      socket.onerror = (event) => {
        dispatch({ type: onError });
      };

      // Обработка события получения сообщения
      socket.onmessage = (event) => {
        const { data } = event;
        const { success, ...restParsedData } = JSON.parse(data); // Парсинг JSON-данных из сообщения
        if (!success) dispatch({ type: onError, payload: event });
        dispatch({ type: onMessage, payload: restParsedData });
      };

      // Обработка события закрытия соединения
      socket.onclose = (event) => dispatch({ type: onClose, payload: event });
    }

    return next(action);
  };
};
