import { combineReducers } from "redux";

import { ingredientsReducer } from "./burger-ingredients";
import { burgerIngredientsReducer } from "./burger-constructor";
import { selectedIngredientReducer } from "./ingredient-details";
import { orderReducer } from "./order-details";
import { tabsReducer } from "./tabs";
import { authReducer } from "./auth";

// Корневой редюсер, объединяющий все редюсеры
export const rootReducer = combineReducers({
  ingredients: ingredientsReducer, // Хранилище ингредиентов
  burgerIngredients: burgerIngredientsReducer, // Хранилище бургерных ингредиентов
  selectedIngredient: selectedIngredientReducer, // Хранилище выбранного ингредиента
  createdOrder: orderReducer, // Хранилище заказа
  tabs: tabsReducer, // Хранилище вкладок
  auth: authReducer,
});
