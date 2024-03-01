import { combineReducers } from "redux";

import { burgerIngredientsReducer } from "./burger-constructor";
import { selectedIngredientReducer } from "./ingredient-details";
import { orderReducer } from "./order-details";
import { tabsReducer } from "./tabs";
import { authReducer } from "./auth";
import { ingredientsReducer } from "./ingredients";
import { ordersReducer } from "./orders";

// Корневой редюсер, объединяющий все редюсеры
export const rootReducer = combineReducers({
  ingredientsData: ingredientsReducer,
  ordersData: ordersReducer,
  burgerIngredients: burgerIngredientsReducer, // Хранилище бургерных ингредиентов
  selectedIngredient: selectedIngredientReducer, // Хранилище выбранного ингредиента
  createdOrder: orderReducer, // Хранилище заказа
  tabs: tabsReducer, // Хранилище вкладок
  auth: authReducer, //
});
