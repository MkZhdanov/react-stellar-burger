import { BASE_URL } from "../utils/data";
import { getCookie } from "../utils/cookie";
import { IOptions } from "../utils/types/types";

// создаем функцию проверки ответа на `ok`
export const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  // не забываем выкидывать ошибку, чтобы она попала в `catch`
  return Promise.reject(`Ошибка ${res.status}`);
};

// создаем функцию проверки на `success`
const checkSuccess = (res: any) => {
  if (res && res.success) {
    return res;
  }
  // не забываем выкидывать ошибку, чтобы она попала в `catch`
  return Promise.reject(`Ответ не success: ${res}`);
};

// создаем универсальную фукнцию запроса с проверкой ответа и `success`
// В вызов приходит `endpoint`(часть урла, которая идет после базового) и опции
const request = (endpoint: string, options?: IOptions) => {
  // а также в ней базовый урл сразу прописывается, чтобы не дублировать в каждом запросе
  return fetch(`${BASE_URL}${endpoint}`, options)
    .then(checkResponse)
    .then(checkSuccess);
};

//GET запрос для получения списка ингридиентов
export const getFetchIngredientsRequest = () => request("ingredients");

//POST запрос для отправки данных о заказе
export const postFetchBurgerRequest = (ingredients: string[]) =>
  request("orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("accessToken"),
    },
    body: JSON.stringify({
      ingredients,
    }),
  });

//GET запрос для получения информации о заказе по номеру
export const getFetchOrderInfo = (number: string) =>
  request(`orders/${number}`);
