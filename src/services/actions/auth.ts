import { setCookie, getCookie, deleteCookie } from "../../utils/cookie";
import {
  resetPasswordUrl,
  forgotPasswordUrl,
  checkAccessUrl,
  tokenUrl,
  logoutUrl,
  loginUrl,
  registerUrl,
} from "../../utils/data";
import { checkResponse } from "../api";
import {
  REGISTER_SET_VALUE,
  REGISTER_SUBMIT,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  LOGIN_SET_VALUE,
  LOGIN_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  FORGOT_PASSWORD_SET_VALUE,
  FORGOT_PASSWORD_SUBMIT,
  FORGOT_PASSWORD_SUBMIT_SUCCESS,
  FORGOT_PASSWORD_SUBMIT_FAILED,
  RESET_PASSWORD_SET_VALUE,
  RESET_PASSWORD_SUBMIT,
  RESET_PASSWORD_SUBMIT_SUCCESS,
  RESET_PASSWORD_SUBMIT_FAILED,
  GET_ACCESS_SUCCESS,
  GET_ACCESS_FAILED,
  GET_ACCESS_LOADED,
  UPDATE_INFO_SUBMIT,
  UPDATE_INFO_SUCCESS,
  UPDATE_INFO_FAILED,
  LOGOUT_SUBMIT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  WS_USER_START,
  WS_USER_SUCCESS,
  WS_USER_ERROR,
  WS_USER_CLOSED,
  WS_USER_GET_ORDERS,
} from "../constants";
import {
  IRegister,
  IUser,
  ILogin,
  IResetPassword,
  IChangeUserInfo,
  IAuthSuccess,
} from "../../utils/types/types";
import { IOrder } from "../../utils/types/order";
import { AppDispatch } from "..";

export interface ISetRegisterValue {
  readonly type: typeof REGISTER_SET_VALUE;
  readonly field: string;
  readonly value: string;
}

export interface IRegisterSubmit {
  readonly type: typeof REGISTER_SUBMIT;
}

export interface IRegisterSuccess {
  readonly type: typeof REGISTER_SUCCESS;
}

export interface IRegisterFailed {
  readonly type: typeof REGISTER_FAILED;
}

export interface ISetLoginValue {
  readonly type: typeof LOGIN_SET_VALUE;
  readonly field: string;
  readonly value: string;
}

export interface ILoginSubmit {
  readonly type: typeof LOGIN_SUBMIT;
}

export interface ILoginSuccess {
  readonly type: typeof LOGIN_SUCCESS;
  readonly payload: IUser;
  readonly dataUser: IUser;
}

export interface ILoginFailed {
  readonly type: typeof LOGIN_FAILED;
}

export interface IForgotPasswordSetValue {
  readonly type: typeof FORGOT_PASSWORD_SET_VALUE;
  readonly field: string;
  readonly value: string;
}

export interface IForgotPasswordSubmitValue {
  readonly type: typeof FORGOT_PASSWORD_SUBMIT;
}

export interface IForgotPasswordSuccessValue {
  readonly type: typeof FORGOT_PASSWORD_SUBMIT_SUCCESS;
}

export interface IForgotPasswordFailedValue {
  readonly type: typeof FORGOT_PASSWORD_SUBMIT_FAILED;
}

export interface ISetPasswordValue {
  readonly type: typeof RESET_PASSWORD_SET_VALUE;
  readonly field: string;
  readonly value: string;
}

export interface IPasswordSubmitValue {
  readonly type: typeof RESET_PASSWORD_SUBMIT;
}

export interface IPasswordSuccessValue {
  readonly type: typeof RESET_PASSWORD_SUBMIT_SUCCESS;
}

export interface IPasswordFailedValue {
  readonly type: typeof RESET_PASSWORD_SUBMIT_FAILED;
}

export interface IGetAccessLoaded {
  readonly type: typeof GET_ACCESS_LOADED;
}

export interface IAccessSuccess {
  readonly type: typeof GET_ACCESS_SUCCESS;
  readonly payload: IUser;
}

export interface IGetAccessFailed {
  readonly type: typeof GET_ACCESS_FAILED;
}

export interface IUpdateRequest {
  readonly type: typeof UPDATE_INFO_SUBMIT;
}

export interface IUpdateSuccess {
  readonly type: typeof UPDATE_INFO_SUCCESS;
  readonly payload: IUser;
}

export interface IUpdateFailed {
  readonly type: typeof UPDATE_INFO_FAILED;
}

export interface ILogoutRequest {
  readonly type: typeof LOGOUT_SUBMIT;
}

export interface ILogoutSuccess {
  readonly type: typeof LOGOUT_SUCCESS;
}

export interface ILogoutFailed {
  readonly type: typeof LOGOUT_FAILED;
}

export interface IWsUserOrdersConnectionStartAction {
  readonly type: typeof WS_USER_START;
}

export interface IWsUserOrdersConnectionSuccessAction {
  readonly type: typeof WS_USER_SUCCESS;
}

export interface IWsUserOrdersConnectionErrorAction {
  readonly type: typeof WS_USER_ERROR;
}

export interface IWsUserOrdersConnectionClosedAction {
  readonly type: typeof WS_USER_CLOSED;
}

export interface IGetUserOrdersAction {
  readonly type: typeof WS_USER_GET_ORDERS;
  readonly payload: { orders: IOrder[] };
}

export type TUserActions =
  | IForgotPasswordSetValue
  | IForgotPasswordSubmitValue
  | IForgotPasswordSuccessValue
  | IForgotPasswordFailedValue
  | ISetPasswordValue
  | IPasswordSubmitValue
  | IPasswordSuccessValue
  | IPasswordFailedValue
  | ISetRegisterValue
  | IRegisterSubmit
  | IRegisterSuccess
  | IRegisterFailed
  | ISetLoginValue
  | ILoginSubmit
  | ILoginSuccess
  | ILoginFailed
  | IGetAccessLoaded
  | IAccessSuccess
  | IGetAccessFailed
  | IUpdateRequest
  | IUpdateSuccess
  | IUpdateFailed
  | ILogoutRequest
  | ILogoutSuccess
  | ILogoutFailed
  | IWsUserOrdersConnectionStartAction
  | IWsUserOrdersConnectionSuccessAction
  | IWsUserOrdersConnectionErrorAction
  | IWsUserOrdersConnectionClosedAction
  | IGetUserOrdersAction;

// Действия связанные с процессом регистрации
export const setRegisterValue = (
  field: string,
  value: string
): ISetRegisterValue => {
  return {
    type: REGISTER_SET_VALUE,
    field,
    value,
  };
};

const registerSubmit = (): IRegisterSubmit => {
  return {
    type: REGISTER_SUBMIT,
  };
};

const registerSuccess = (): IRegisterSuccess => {
  return {
    type: REGISTER_SUCCESS,
  };
};

const registerFailed = (): IRegisterFailed => {
  return {
    type: REGISTER_FAILED,
  };
};

export const fetchRegister = (userData: IRegister, callback: () => void) => {
  return (dispatch: AppDispatch) => {
    dispatch(registerSubmit());
    fetch(registerUrl, {
      method: "POST",
      headers: {
        authorization: "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then(checkResponse)
      .then((res) => {
        setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
        setCookie("refreshToken", res.refreshToken);
      })
      .then(() => {
        dispatch(registerSuccess);
        callback();
      })
      .catch((error) => {
        console.log(`Ошибка при загрузке данных: ${error}`);
        dispatch(registerFailed());
      });
  };
};

// Действия связанные с процессом авторизации
export function setLoginValue(field: string, value: string): ISetLoginValue {
  return {
    type: LOGIN_SET_VALUE,
    field,
    value,
  };
}

const loginSubmit = (): ILoginSubmit => {
  return {
    type: LOGIN_SUBMIT,
  };
};
const loginSuccess = (res: IAuthSuccess): ILoginSuccess => {
  return {
    type: LOGIN_SUCCESS,
    payload: res.user,
    dataUser: res.user,
  };
};

const loginFailed = (): ILoginFailed => {
  return {
    type: LOGIN_FAILED,
  };
};

export const fetchLogin = (userData: ILogin) => {
  return (dispatch: AppDispatch) => {
    dispatch(loginSubmit());
    fetch(loginUrl, {
      method: "POST",
      headers: {
        authorization: "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then(checkResponse)
      .then((res) => {
        console.log(res);
        dispatch(loginSuccess(res));
        setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
        setCookie("refreshToken", res.refreshToken);
      })
      .catch((error) => {
        console.log(`Ошибка при загрузке данных: ${error}`);
        dispatch(loginFailed());
      });
  };
};

// Действия связанные с процессом восстановления пароля
export function setFormValue(
  field: string,
  value: string
): IForgotPasswordSetValue {
  return {
    type: FORGOT_PASSWORD_SET_VALUE,
    field,
    value,
  };
}

const submitForm = (): IForgotPasswordSubmitValue => {
  return {
    type: FORGOT_PASSWORD_SUBMIT,
  };
};

const submitSuccessForm = (): IForgotPasswordSuccessValue => {
  return {
    type: FORGOT_PASSWORD_SUBMIT_SUCCESS,
  };
};

const submitFailedForm = (): IForgotPasswordFailedValue => {
  return {
    type: FORGOT_PASSWORD_SUBMIT_FAILED,
  };
};

export const fetchForgotPassword = (
  email: { email: string },
  callback: () => void
) => {
  return (dispatch: AppDispatch) => {
    dispatch(submitForm());
    fetch(forgotPasswordUrl, {
      method: "POST",
      headers: {
        authorization: "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
    })
      .then(checkResponse)
      .then((data) => {
        console.log(callback);
        console.log(data);
        dispatch(submitSuccessForm());
        callback();
      })
      .catch((error) => {
        console.log(`Ошибка при загрузке данных: ${error}`);
        dispatch(submitFailedForm());
      });
  };
};

// Действия связанные с процессом сброса пароля
export function setPasswordValue(
  field: string,
  value: string
): ISetPasswordValue {
  return {
    type: RESET_PASSWORD_SET_VALUE,
    field,
    value,
  };
}

const submitResetPassword = (): IPasswordSubmitValue => {
  return {
    type: RESET_PASSWORD_SUBMIT,
  };
};

const submitSuccessResetPassword = (): IPasswordSuccessValue => {
  return {
    type: RESET_PASSWORD_SUBMIT_SUCCESS,
  };
};

const submitFailedResetPassword = (): IPasswordFailedValue => {
  return {
    type: RESET_PASSWORD_SUBMIT_FAILED,
  };
};

export const fetchResetPassword = (password: IResetPassword) => {
  return (dispatch: AppDispatch) => {
    dispatch(submitResetPassword());
    fetch(resetPasswordUrl, {
      method: "POST",
      headers: {
        authorization: "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(password),
    })
      .then(checkResponse)
      .then((data) => {
        console.log(data);
        dispatch(submitSuccessResetPassword());
      })
      .catch((error) => {
        console.log(`Ошибка при загрузке данных: ${error}`);
        dispatch(submitFailedResetPassword());
      });
  };
};

// Действия связанные с процессом получения данных пользователя с сервера
const accessLoaded = (): IGetAccessLoaded => {
  return {
    type: GET_ACCESS_LOADED,
  };
};
////////проверить на необходимость////////////
const accessSuccess = (res: IAuthSuccess): IAccessSuccess => {
  return {
    type: GET_ACCESS_SUCCESS,
    payload: res.user,
  };
};

const accessFailed = (): IGetAccessFailed => {
  return {
    type: GET_ACCESS_FAILED,
  };
};

export const fetchCheckAccess = () => {
  return (dispatch: AppDispatch) => {
    fetch(checkAccessUrl, {
      method: "GET",
      headers: {
        authorization: "Bearer " + getCookie("accessToken"),
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(accessToken),
    })
      .then(checkResponse)
      .then((res) => {
        console.log(res);
        dispatch(accessSuccess(res));
      })
      .catch((error) => {
        if (error.message === "jwt expired" || "jwt malformed") {
          dispatch(refreshToken("refreshToken"));
        }
      })
      .finally(() => {
        dispatch(accessLoaded());
      });
  };
};

//обновление токена
export const refreshToken = (refreshToken: string | undefined) => {
  return (dispatch: AppDispatch) => {
    fetch(tokenUrl, {
      method: "POST",
      headers: {
        authorization: "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: refreshToken }),
    })
      .then(checkResponse)
      .then((res) => {
        console.log(res);
        dispatch(fetchCheckAccess());
        setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
        setCookie("refreshToken", res.refreshToken);
      })
      .catch((error) => {
        console.log(`Ошибка при загрузке данных: ${error}`);
        dispatch(accessFailed());
      });
  };
};

// Действия связанные с процессом изменения данных пользователя
const updateRequest = (): IUpdateRequest => {
  return {
    type: UPDATE_INFO_SUBMIT,
  };
};

const updateSuccess = (res: IAuthSuccess): IUpdateSuccess => {
  ///////////////////////////////////////////////////////////////////////
  return {
    type: UPDATE_INFO_SUCCESS,
    payload: res.user,
  };
};

const updateFailed = (): IUpdateFailed => {
  return {
    type: UPDATE_INFO_FAILED,
  };
};

export const fetchUpdateUserInfo = (userData: IChangeUserInfo) => {
  return (dispatch: AppDispatch) => {
    dispatch(updateRequest());
    fetch(checkAccessUrl, {
      method: "PATCH",
      headers: {
        authorization: "Bearer " + getCookie("accessToken"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then(checkResponse)
      .then((res) => {
        console.log(res);
        dispatch(updateSuccess(res)); ////////////////
        //////// localStorage.getItem(res); ///////////////localStorage.setItem(res.user)
      })
      .catch((error) => {
        if (error.message === "jwt expired") {
          dispatch(refreshToken("refreshToken"));
          fetch(checkAccessUrl, {
            method: "PATCH",
            headers: {
              authorization: "Bearer " + getCookie("accessToken"),
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          })
            .then(checkResponse)
            .then((res) => {
              console.log(res);
              dispatch(updateSuccess(res));
            });
        }
      })
      .catch((error) => {
        console.log(`Ошибка при загрузке данных: ${error}`);
        dispatch(updateFailed());
      });
  };
};

// Действия связанные с процессом логаута
const logoutRequest = (): ILogoutRequest => {
  return {
    type: LOGOUT_SUBMIT,
  };
};

const logoutSuccess = (): ILogoutSuccess => {
  ///////////////////////////////////////////////////////
  return {
    type: LOGOUT_SUCCESS,
  };
};

const logoutFailed = (): ILogoutFailed => {
  return {
    type: LOGOUT_FAILED,
  };
};

export const fetchLogout = (refreshToken: string | undefined) => {
  return (dispatch: AppDispatch) => {
    fetch(logoutUrl, {
      method: "POST",
      headers: {
        authorization: "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: refreshToken }),
    })
      .then(checkResponse)
      .then((res) => {
        console.log(res);
        dispatch(logoutSuccess());
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
      })
      .catch((error) => {
        console.log(`Ошибка при загрузке данных: ${error}`);
        dispatch(logoutFailed());
      })
      .finally(() => {
        dispatch(logoutRequest());
      });
  };
};

// Действия связанные с WebSocket соединением для получения заказов пользователя
export const wsUserOrdersConnectionStart =
  (): IWsUserOrdersConnectionStartAction => ({ type: WS_USER_START });
export const wsUserOrdersConnectionClosed =
  (): IWsUserOrdersConnectionClosedAction => ({ type: WS_USER_CLOSED });
export const getUserOrders = (data: {
  orders: IOrder[];
}): IGetUserOrdersAction => ({
  type: WS_USER_GET_ORDERS,
  payload: data,
});
