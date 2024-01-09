import { combineReducers } from "redux";

import { ingredientsReducer } from "./burger-ingredients";
import { burgerIngredientsReducer } from "./burger-constructor";
import { selectedIngredientReducer } from "./ingredient-details";
import { orderReducer } from "./order-details";
import { tabsReducer } from "./tabs";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerIngredients: burgerIngredientsReducer,
  selectedIngredient: selectedIngredientReducer,
  createdOrder: orderReducer,
  tabs: tabsReducer,
});
