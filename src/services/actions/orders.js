// ======== Action Types ========
export const WS_START = "WS_START";
export const WS_SUCCESS = "WS_SUCCESS";
export const WS_ERROR = "WS_ERROR";
export const WS_CLOSED = "WS_CLOSED";
export const WS_GET_ORDERS = "WS_GET_ORDERS";

// ======== Action Creators ========
// Действие для запуска соединения с WebSocket
export const wsOrdersConnectionStart = () => ({ type: WS_START });

// Действие для закрытия соединения с WebSocket
export const wsOrdersConnectionClosed = () => ({ type: WS_CLOSED });

// Действие для запроса данных о заказах через WebSocket
export const getOrders = (data) => ({ type: WS_GET_ORDERS, payload: data });
