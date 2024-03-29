import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  CLOSE_ORDER_MODAL,
} from "../constants";

export interface ICreateOrderRequestAction {
  readonly type: typeof CREATE_ORDER_REQUEST;
}

export interface ICreateOrderSuccessAction {
  readonly type: typeof CREATE_ORDER_SUCCESS;
  readonly payload;
}

export interface ICreateOrderFailureAction {
  readonly type: typeof CREATE_ORDER_FAILURE;
}

export interface ICloseOrderModalAction {
  readonly type: typeof CLOSE_ORDER_MODAL;
}

export type TOrderDetailsActions =
  | ICreateOrderRequestAction
  | ICreateOrderSuccessAction
  | ICreateOrderFailureAction
  | ICloseOrderModalAction;

// Создатель действия для указания начала запроса на создание заказа
export const createOrderRequest = (): ICreateOrderRequestAction => ({
  type: CREATE_ORDER_REQUEST,
});

// Создатель действия для указания успешного завершения запроса на создание заказа
export const createOrderSuccess = (data): ICreateOrderSuccessAction => ({
  type: CREATE_ORDER_SUCCESS,
  payload: data,
});

// Создатель действия для указания неудачного завершения запроса на создание заказа
export const createOrderFailure = (): ICreateOrderFailureAction => ({
  type: CREATE_ORDER_FAILURE,
});

// Создатель действия для закрытия модального окна заказа
export const closeOrderModal = (): ICloseOrderModalAction => ({
  type: CLOSE_ORDER_MODAL,
});
