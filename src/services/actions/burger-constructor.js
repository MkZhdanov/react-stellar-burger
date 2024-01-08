export const ADD_BUN_BURGER = "ADD_BUN_BURGER";
export const ADD_INGREDIENT_BURGER = "ADD_INGREDIENT_BURGER";
export const REMOVE_INGREDIENT_BURGER = "REMOVE_INGREDIENT_BURGER";
export const REMOVE_BUN_BURGER = "REMOVE_BUN_BURGER";
export const UPDATE_INGREDIENT_ORDER = "UPDATE_INGREDIENT_ORDER";

export const addBunBurger = (bun) => ({
  type: ADD_BUN_BURGER,
  payload: bun,
});

export const addIngredientBurger = (ingredient) => ({
  type: ADD_INGREDIENT_BURGER,
  payload: ingredient,
});

export const removeIngredientBurger = (ingredientIndex) => ({
  type: REMOVE_INGREDIENT_BURGER,
  payload: ingredientIndex,
});

export const removeBunBurger = () => ({
  type: REMOVE_BUN_BURGER,
});

export const updateIngredientOrder = (startIndex, endIndex) => ({
  type: UPDATE_INGREDIENT_ORDER,
  payload: { startIndex, endIndex },
});
