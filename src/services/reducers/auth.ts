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
  WS_USER_CLOSED,
  WS_USER_ERROR,
  WS_USER_GET_ORDERS,
  WS_USER_START,
  WS_USER_SUCCESS,
} from "../constants";
import {
  ILogin,
  IUser,
  IResetPassword,
  IChangeUserInfo,
  IRegister,
} from "../../utils/types/types";
import { IOrder } from "../../utils/types/order";
import { TUserActions } from "../actions/auth";

type TUserState = {
  user: IUser | null;
  loaded: boolean;
  dataUser: IUser | null;
  userAuth: boolean;
  logoutSubmit: boolean;
  logoutFailed: boolean;
  forgotPasswordForm: {
    email: string;
  };
  forgotPasswordSubmit: boolean;
  forgotPasswordFailed: boolean;
  forgotEmailSent: boolean;
  resetPasswordForm: IResetPassword;
  resetPasswordSubmit: boolean;
  resetPasswordFailed: boolean;
  resetPasswordRequest: boolean;
  registerForm: IRegister;
  registerSubmit: boolean;
  registerFailed: boolean;
  loginForm: ILogin;
  loginSubmit: boolean;
  loginFailed: boolean;
  updateInfoSubmit: boolean;
  updateInfoFailed: boolean;
  isLoading: boolean;
  isConnection: boolean;
  hasConnectionFailed: boolean;
  orders: IOrder[];
};

const initialState: TUserState = {
  //авторизация
  user: null,
  loaded: false,
  dataUser: null,
  userAuth: false,

  //выход из аккаунта
  logoutSubmit: false,
  logoutFailed: false,

  //восстановление пароля
  forgotPasswordForm: {
    email: "",
  },
  forgotPasswordSubmit: false,
  forgotPasswordFailed: false,
  forgotEmailSent: false,

  //сброс пароля
  resetPasswordForm: {
    password: "",
    token: "",
  },

  resetPasswordSubmit: false,
  resetPasswordFailed: false,
  resetPasswordRequest: false,

  //регистрация
  registerForm: {
    email: "",
    password: "",
    name: "",
  },

  registerSubmit: false,
  registerFailed: false,

  //логин
  loginForm: {
    email: "",
    password: "",
  },

  loginSubmit: false,
  loginFailed: false,

  // изменение данных
  updateInfoSubmit: false,
  updateInfoFailed: false,

  // ws
  isLoading: false,
  isConnection: false,
  hasConnectionFailed: false,
  orders: [],
};

export const authReducer = (state = initialState, actions: TUserActions) => {
  switch (actions.type) {
    case REGISTER_SET_VALUE: // регистрация
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          [actions.field]: actions.value,
        },
      };
    case REGISTER_SUBMIT: {
      return {
        ...state,
        registerSubmit: true,
      };
    }
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          name: "",
          email: "",
          password: "",
        },
        userAuth: true,
      };
    case REGISTER_FAILED:
      return {
        ...state,
        registerSubmit: false,
        registerFailed: true,
      };
    case LOGIN_SET_VALUE: // логин
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          [actions.field]: actions.value,
        },
      };
    case LOGIN_SUBMIT:
      return {
        ...state,
        loginSubmit: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          email: "",
          password: "",
        },
        user: {
          ...state.user,
          email: actions.payload.email,
          name: actions.payload.name,
        },
        dataUser: actions.payload,
        userAuth: true,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loginSubmit: false,
        loginFailed: true,
        userAuth: false,
      };
    case FORGOT_PASSWORD_SET_VALUE: // восстановление пароля
      return {
        ...state,
        forgotPasswordForm: {
          ...state.forgotPasswordForm,
          [actions.field]: actions.value,
        },
      };
    case FORGOT_PASSWORD_SUBMIT: {
      return {
        ...state,
        forgotPasswordSubmit: true,
      };
    }
    case FORGOT_PASSWORD_SUBMIT_SUCCESS:
      return {
        ...state,
        forgotPasswordForm: {
          ...state.forgotPasswordForm,
          email: "",
        },
        resetEmailSent: true,
      };
    case FORGOT_PASSWORD_SUBMIT_FAILED:
      return {
        ...state,
        forgotPasswordSubmit: false,
        forgotPasswordFailed: true,
      };
    case RESET_PASSWORD_SET_VALUE: // сброс пароля
      return {
        ...state,
        resetPasswordForm: {
          ...state.resetPasswordForm,
          [actions.field]: actions.value,
        },
      };
    case RESET_PASSWORD_SUBMIT:
      return {
        ...state,
        resetPasswordSubmit: true,
        resetPasswordRequest: true,
      };
    case RESET_PASSWORD_SUBMIT_SUCCESS:
      return {
        ...state,
        resetPasswordForm: {
          ...state.resetPasswordForm,
          password: "",
          token: "",
        },
        resetPasswordRequest: false,
      };
    case RESET_PASSWORD_SUBMIT_FAILED:
      return {
        ...state,
        resetPasswordSubmit: false,
        resetPasswordRequest: false,
        resetPasswordFailed: true,
      };
    case GET_ACCESS_LOADED:
      return {
        ...state,
        loaded: true,
      };
    case GET_ACCESS_SUCCESS:
      return {
        ...state,
        loaded: false,
        user: actions.payload,
        userAuth: true,
      };
    case GET_ACCESS_FAILED:
      return {
        ...state,
        loaded: false,
        userAuth: false,
      };
    case UPDATE_INFO_SUBMIT:
      return {
        ...state,
        updateInfoSubmit: true,
      };
    case UPDATE_INFO_SUCCESS:
      return {
        ...state,
        user: actions.payload,
      };
    case UPDATE_INFO_FAILED:
      return {
        ...state,
        updateInfoSubmit: false,
        updateInfoFailed: true,
      };
    case LOGOUT_SUBMIT:
      return {
        ...state,
        logoutSubmit: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        logoutSubmit: false,
        logoutFailed: false,
        user: null,
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        logoutFailed: true,
      };
    case WS_USER_START:
      return {
        ...state,
        isLoading: true,
        isConnection: false,
        hasConnectionFailed: false,
        orders: [],
      };
    case WS_USER_SUCCESS:
      return {
        ...state,
        isConnection: true,
      };
    case WS_USER_ERROR:
      return {
        ...state,
        hasConnectionFailed: true,
      };
    case WS_USER_GET_ORDERS: {
      return {
        ...state,
        isLoading: false,
        hasConnectionFailed: false,
        orders: [...actions.payload.orders],
      };
    }
    case WS_USER_CLOSED:
      return {
        ...state,
        isLoading: false,
        isConnection: false,
      };
    default: {
      return state;
    }
  }
};
