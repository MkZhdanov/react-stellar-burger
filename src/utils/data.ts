import { v4 as uuidv4 } from "uuid";

// Константы, представляющие различные типы ингредиентов для вкладок
export enum component_tabs {
  bun = "Булки",
  sauce = "Соусы",
  main = "Начинки",
}

// Генерация уникального ключа
export const generateKey = () => uuidv4();

// Статусы заказов
export enum ORDER_STATUSES {
  created = "created",
  pending = "pending",
  done = "done",
  cancelled = "cancelled",
}

// базовый url  и эндпойнты
export const BASE_URL = "https://norma.nomoreparties.space/api/";
export const ALL_ORDERS_URL = "wss:/norma.nomoreparties.space/orders/all";
export const USER_ORDERS_URL = "wss://norma.nomoreparties.space/orders";
export const loginUrl = `${BASE_URL}auth/login`;
export const registerUrl = `${BASE_URL}auth/register`;
export const logoutUrl = `${BASE_URL}auth/logout`;
export const tokenUrl = `${BASE_URL}auth/token`;
export const forgotPasswordUrl = `${BASE_URL}password-reset`;
export const resetPasswordUrl = `${BASE_URL}password-reset/reset`;
export const checkAccessUrl = `${BASE_URL}auth/user`;
export const orderUrl = `${BASE_URL}orders`;
