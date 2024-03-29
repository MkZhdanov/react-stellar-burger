// Регистрация
export const REGISTER_SET_VALUE: "REGISTER_SET_VALUE" = "REGISTER_SET_VALUE";
export const REGISTER_SUBMIT: "REGISTER_SUBMIT" = "REGISTER_SUBMIT";
export const REGISTER_SUCCESS: "REGISTER_SUCCESS" = "REGISTER_SUCCESS";
export const REGISTER_FAILED: "REGISTER_FAILED" = "REGISTER_FAILED";
// Авторизация
export const LOGIN_SET_VALUE: "LOGIN_SET_VALUE" = "LOGIN_SET_VALUE";
export const LOGIN_SUBMIT: "LOGIN_SUBMIT" = "LOGIN_SUBMIT";
export const LOGIN_SUCCESS: "LOGIN_SUCCESS" = "LOGIN_SUCCESS";
export const LOGIN_FAILED: "LOGIN_FAILED" = "LOGIN_FAILED";
//восстановление пароля
export const FORGOT_PASSWORD_SET_VALUE: "FORGOT_PASSWORD_FORM_SET_VALUE" =
  "FORGOT_PASSWORD_FORM_SET_VALUE";
export const FORGOT_PASSWORD_SUBMIT: "FORGOT_PASSWORD_FORM_SUBMIT" =
  "FORGOT_PASSWORD_FORM_SUBMIT";
export const FORGOT_PASSWORD_SUBMIT_SUCCESS: "FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS" =
  "FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS";
export const FORGOT_PASSWORD_SUBMIT_FAILED: "FORGOT_PASSWORD_FORM_SUBMIT_FAILED" =
  "FORGOT_PASSWORD_FORM_SUBMIT_FAILED";
//сброс пароля
export const RESET_PASSWORD_SET_VALUE: "RESET_PASSWORD_SET_VALUE" =
  "RESET_PASSWORD_SET_VALUE";
export const RESET_PASSWORD_SUBMIT: "RESET_PASSWORD_SUBMIT" =
  "RESET_PASSWORD_SUBMIT";
export const RESET_PASSWORD_SUBMIT_SUCCESS: "RESET_PASSWORD_SUBMIT_SUCCESS" =
  "RESET_PASSWORD_SUBMIT_SUCCESS";
export const RESET_PASSWORD_SUBMIT_FAILED: "RESET_PASSWORD_SUBMIT_FAILED" =
  "RESET_PASSWORD_SUBMIT_FAILED";
//получение данных пользователя
export const GET_ACCESS_SUCCESS: "GET_ACCESS_SUCCESS" = "GET_ACCESS_SUCCESS";
export const GET_ACCESS_FAILED: "GET_ACCESS_FAILED" = "GET_ACCESS_FAILED";
export const GET_ACCESS_LOADED: "GET_ACCESS_LOADED" = "GET_ACCESS_LOADED";
//изменение данных пользователя
export const UPDATE_INFO_SUBMIT: "UPDATE_INFO_SUBMIT" = "UPDATE_INFO_SUBMIT";
export const UPDATE_INFO_SUCCESS: "UPDATE_INFO_SUCCESS" = "UPDATE_INFO_SUCCESS";
export const UPDATE_INFO_FAILED: "UPDATE_INFO_FAILED" = "UPDATE_INFO_FAILED";
// выход из акаунта
export const LOGOUT_SUBMIT: "LOGOUT_SUBMIT" = "LOGOUT_SUBMIT";
export const LOGOUT_SUCCESS: "LOGOUT_SUCCESS" = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED: "LOGOUT_FAILED" = "LOGOUT_FAILED";

// константы для создания бургера
export const ADD_BUN_BURGER: "ADD_BUN_BURGER" = "ADD_BUN_BURGER";
export const ADD_INGREDIENT_BURGER: "ADD_INGREDIENT_BURGER" =
  "ADD_INGREDIENT_BURGER";
export const REMOVE_INGREDIENT_BURGER: "REMOVE_INGREDIENT_BURGER" =
  "REMOVE_INGREDIENT_BURGER";
export const REMOVE_BUN_BURGER: "REMOVE_BUN_BURGER" = "REMOVE_BUN_BURGER";
export const UPDATE_INGREDIENT_ORDER: "UPDATE_INGREDIENT_ORDER" =
  "UPDATE_INGREDIENT_ORDER";

// Константа для действия "Запросить ингредиенты"
export const FETCH_INGREDIENTS: "FETCH_INGREDIENTS" = "FETCH_INGREDIENTS";
// Константа для действия "Успешно получены ингредиенты"
export const FETCH_INGREDIENTS_SUCCESS: "FETCH_INGREDIENTS_SUCCESS" =
  "FETCH_INGREDIENTS_SUCCESS";
// Константа для действия "Не удалось получить ингредиенты"
export const FETCH_INGREDIENTS_FAILED: "FETCH_INGREDIENTS_FAILED" =
  "FETCH_INGREDIENTS_FAILED";

// константы для оформления заказа
export const CREATE_ORDER_REQUEST: "CREATE_ORDER_REQUEST" =
  "CREATE_ORDER_REQUEST";
export const CREATE_ORDER_SUCCESS: "CREATE_ORDER_SUCCESS" =
  "CREATE_ORDER_SUCCESS";
export const CREATE_ORDER_FAILURE: "CREATE_ORDER_FAILURE" =
  "CREATE_ORDER_FAILURE";
export const CLOSE_ORDER_MODAL: "CLOSE_ORDER_MODAL" = "CLOSE_ORDER_MODAL";

// Тип действия для запроса заказа
export const FETCH_ORDER: "FETCH_ORDER" = "FETCH_ORDER";
// Тип действия для успешного завершения запроса заказа
export const FETCH_ORDER_SUCCESS: "FETCH_ORDER_SUCCESS" = "FETCH_ORDER_SUCCESS";
// Тип действия для неудачного завершения запроса заказа
export const FETCH_ORDER_FAILED: "FETCH_ORDER_FAILED" = "FETCH_ORDER_FAILED";

// Действия WebSocket
export const WS_USER_START: "WS_USER_START" = "WS_USER_START";
export const WS_USER_SUCCESS: "WS_USER_SUCCESS" = "WS_USER_SUCCESS";
export const WS_USER_ERROR: "WS_USER_ERROR" = "WS_USER_ERROR";
export const WS_USER_CLOSED: "WS_USER_CLOSED" = "WS_USER_CLOSED";
export const WS_USER_GET_ORDERS: "WS_GET_USER_ORDERS" = "WS_GET_USER_ORDERS";
// Действие: начало установки WebSocket соединения
export const WS_START: "WS_START" = "WS_START";
// Действие: успешное установление WebSocket соединения
export const WS_SUCCESS: "WS_SUCCESS" = "WS_SUCCESS";
// Действие: возникла ошибка при установке WebSocket соединения
export const WS_ERROR: "WS_ERROR" = "WS_ERROR";
// Действие: WebSocket соединение закрыто
export const WS_CLOSED: "WS_CLOSED" = "WS_CLOSED";
// Действие: запрос на получение данных о заказах через WebSocket
export const WS_GET_ORDERS: "WS_GET_ORDERS" = "WS_GET_ORDERS";

// Константа для установки активной вкладки
export const SET_ACTIVE_TAB: "SET_ACTIVE_TAB" = "SET_ACTIVE_TAB";
