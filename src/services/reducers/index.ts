import { combineReducers } from "redux";

import { burgerIngredientsReducer } from "./burger-constructor";
import { orderDetailsReducer } from "./order-details";
import { tabsReducer } from "./tabs";
import { authReducer } from "./auth";
import { ingredientsReducer } from "./ingredients";
import { ordersReducer } from "./orders";
import { orderReducer } from "./order";

// Корневой редюсер, объединяющий все редюсеры
export const rootReducer = combineReducers({
  ingredientsData: ingredientsReducer,
  ordersData: ordersReducer, // хранилище заказов всех пользователей приложения
  orderData: orderReducer, // хранилище заказов пользователя
  burgerIngredients: burgerIngredientsReducer, // Хранилище бургерных ингредиентов
  createdOrder: orderDetailsReducer, // Хранилище заказа
  tabs: tabsReducer, // Хранилище вкладок
  auth: authReducer, //
});
