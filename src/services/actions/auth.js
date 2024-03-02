import { setCookie, getCookie, deleteCookie } from "../../utils/cookie";
import {
  baseUrl,
  resetPasswordUrl,
  forgotPasswordUrl,
  checkAccessUrl,
  tokenUrl,
  logoutUrl,
  loginUrl,
  registerUrl,
  orderUrl,
} from "../../utils/data";

const checkResponse = (res) =>
  res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);

// ======== Action Types ========
// Регистрация
export const REGISTER_SET_VALUE = "REGISTER_SET_VALUE";
export const REGISTER_SUBMIT = "REGISTER_SUBMIT";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";
// Авторизация
export const LOGIN_SET_VALUE = "LOGIN_SET_VALUE";
export const LOGIN_SUBMIT = "LOGIN_SUBMIT";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
//восстановление пароля
export const FORGOT_PASSWORD_SET_VALUE = "FORGOT_PASSWORD_FORM_SET_VALUE";
export const FORGOT_PASSWORD_SUBMIT = "FORGOT_PASSWORD_FORM_SUBMIT";
export const FORGOT_PASSWORD_SUBMIT_SUCCESS =
  "FORGOT_PASSWORD_FORM_SUBMIT_SUCCESS";
export const FORGOT_PASSWORD_SUBMIT_FAILED =
  "FORGOT_PASSWORD_FORM_SUBMIT_FAILED";
//сброс пароля
export const RESET_PASSWORD_SET_VALUE = "RESET_PASSWORD_SET_VALUE";
export const RESET_PASSWORD_SUBMIT = "RESET_PASSWORD_SUBMIT";
export const RESET_PASSWORD_SUBMIT_SUCCESS = "RESET_PASSWORD_SUBMIT_SUCCESS";
export const RESET_PASSWORD_SUBMIT_FAILED = "RESET_PASSWORD_SUBMIT_FAILED";
//получение данных пользователя
export const GET_ACCESS_SUCCESS = "GET_ACCESS_SUCCESS";
export const GET_ACCESS_FAILED = "GET_ACCESS_FAILED";
export const GET_ACCESS_LOADED = "GET_ACCESS_LOADED";
//изменение данных пользователя
export const UPDATE_INFO_SUBMIT = "UPDATE_INFO_SUBMIT";
export const UPDATE_INFO_SUCCESS = "UPDATE_INFO_SUCCESS";
export const UPDATE_INFO_FAILED = "UPDATE_INFO_FAILED";
// выход из акаунта
export const LOGOUT_SUBMIT = "LOGOUT_SUBMIT";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";
// Действия WebSocket
export const WS_USER_START = "WS_USER_START";
export const WS_USER_SUCCESS = "WS_USER_SUCCESS";
export const WS_USER_ERROR = "WS_USER_ERROR";
export const WS_USER_CLOSED = "WS_USER_CLOSED";
export const WS_USER_GET_ORDERS = "WS_GET_USER_ORDERS";

// ======== Action Creators ========
// Действия связанные с процессом регистрации
export const setRegisterValue = (field, value) => {
  return {
    type: REGISTER_SET_VALUE,
    field,
    value,
  };
};

const registerSubmit = () => {
  return {
    type: REGISTER_SUBMIT,
  };
};

const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS,
  };
};

const registerFailed = () => {
  return {
    type: REGISTER_FAILED,
  };
};

export const fetchRegister = (userData, callback) => {
  return (dispatch) => {
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
        dispatch(registerFailed(error));
      });
  };
};

// Действия связанные с процессом авторизации
export function setLoginValue(field, value) {
  return {
    type: LOGIN_SET_VALUE,
    field,
    value,
  };
}

const loginSubmit = () => {
  return {
    type: LOGIN_SUBMIT,
  };
};

const loginSuccess = (res) => {
  return {
    type: LOGIN_SUCCESS,
    payload: res.user,
  };
};

const loginFailed = () => {
  return {
    type: LOGIN_FAILED,
  };
};

export const fetchLogin = (userData) => {
  return (dispatch) => {
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
        dispatch(loginFailed(error));
      });
  };
};

// Действия связанные с процессом восстановления пароля
export function setFormValue(field, value) {
  return {
    type: FORGOT_PASSWORD_SET_VALUE,
    field,
    value,
  };
}

const submitForm = () => {
  return {
    type: FORGOT_PASSWORD_SUBMIT,
  };
};

const submitSuccessForm = () => {
  return {
    type: FORGOT_PASSWORD_SUBMIT_SUCCESS,
  };
};

const submitFailedForm = () => {
  return {
    type: FORGOT_PASSWORD_SUBMIT_FAILED,
  };
};

export const fetchForgotPassword = (email, callback) => {
  return (dispatch) => {
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
        dispatch(submitSuccessForm(data));
        callback();
      })
      .catch((error) => {
        console.log(`Ошибка при загрузке данных: ${error}`);
        dispatch(submitFailedForm(error));
      });
  };
};

// Действия связанные с процессом сброса пароля
export function setPasswordValue(field, value) {
  return {
    type: RESET_PASSWORD_SET_VALUE,
    field,
    value,
  };
}

const submitResetPassword = () => {
  return {
    type: RESET_PASSWORD_SUBMIT,
  };
};

const submitSuccessResetPassword = () => {
  return {
    type: RESET_PASSWORD_SUBMIT_SUCCESS,
  };
};

const submitFailedResetPassword = () => {
  return {
    type: RESET_PASSWORD_SUBMIT_FAILED,
  };
};

export const fetchResetPassword = (password) => {
  return (dispatch) => {
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
        dispatch(submitSuccessResetPassword(data));
      })
      .catch((error) => {
        console.log(`Ошибка при загрузке данных: ${error}`);
        dispatch(submitFailedResetPassword(error));
      });
  };
};

// Действия связанные с процессом получения данных пользователя с сервера
const accessLoaded = () => {
  return {
    type: GET_ACCESS_LOADED,
  };
};

const accessSuccess = (res) => {
  return {
    type: GET_ACCESS_SUCCESS,
    payload: res.user,
  };
};

const accessFailed = () => {
  return {
    type: GET_ACCESS_FAILED,
  };
};

export const fetchCheckAccess = (accessToken) => {
  return (dispatch) => {
    fetch(checkAccessUrl, {
      method: "GET",
      headers: {
        authorization: "Bearer " + getCookie("accessToken"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(accessToken),
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
export const refreshToken = (refreshToken) => {
  return (dispatch) => {
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
        dispatch(fetchCheckAccess("accessToken"));
        setCookie("accessToken", res.accessToken.split("Bearer ")[1]);
        setCookie("refreshToken", res.refreshToken);
      })
      .catch((error) => {
        console.log(`Ошибка при загрузке данных: ${error}`);
        dispatch(accessFailed(error));
      });
  };
};

// Действия связанные с процессом изменения данных пользователя
const updateRequest = () => {
  return {
    type: UPDATE_INFO_SUBMIT,
  };
};

const updateSuccess = (res) => {
  return {
    type: UPDATE_INFO_SUCCESS,
    payload: res.user,
  };
};

const updateFailed = () => {
  return {
    type: UPDATE_INFO_FAILED,
  };
};

export const fetchUpdateUserInfo = (userData) => {
  return (dispatch) => {
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
        dispatch(updateSuccess(res));
        localStorage.setItem(res);
      })
      .catch((error) => {
        if (error.message === "jwt expired") {
          dispatch(refreshToken("refreshToken")).then(() => {
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
const logoutRequest = () => {
  return {
    type: LOGOUT_SUBMIT,
  };
};

const logoutSuccess = (res) => {
  return {
    type: LOGOUT_SUCCESS,
    payload: res.user,
  };
};

const logoutFailed = () => {
  return {
    type: LOGOUT_FAILED,
  };
};

export const fetchLogout = (refreshToken) => {
  return (dispatch) => {
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
        dispatch(logoutSuccess(res));
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
export const wsUserOrdersConnectionStart = () => ({ type: WS_USER_START });
export const wsUserOrdersConnectionClosed = () => ({ type: WS_USER_CLOSED });
export const getUserOrders = () => ({ type: WS_USER_GET_ORDERS });
