import { combineReducers } from "redux";

import { ingredientsReducer } from "./burger-ingredients";
import { burgerIngredientsReducer } from "./burger-constructor";
import { selectedIngredientReducer } from "./ingredient-details";
import { orderReducer } from "./order-details";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerIngredients: burgerIngredientsReducer,
  selectedIngredient: selectedIngredientReducer,
  createdOrder: orderReducer,
});
