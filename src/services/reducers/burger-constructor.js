import {
  ADD_BUN_BURGER,
  ADD_INGREDIENT_BURGER,
  REMOVE_INGREDIENT_BURGER,
  REMOVE_BUN_BURGER,
  UPDATE_INGREDIENT_ORDER,
} from "../actions/burger-constructor";

// Начальное состояние для редьюсера конструктора бургера
const initialState = {
  bun: null,
  ingredients: [],
};

// Редьюсер конструктора бургера
export const burgerIngredientsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    // Добавление булки к состоянию
    case ADD_BUN_BURGER: {
      return {
        ...state,
        bun: payload,
      };
    }
    // Добавление ингредиента к состоянию
    case ADD_INGREDIENT_BURGER: {
      return {
        ...state,
        ingredients: [...state.ingredients, payload],
      };
    }
    // Удаление ингредиента из состояния
    case REMOVE_INGREDIENT_BURGER: {
      const ingredientIndex = state.ingredients.findIndex(
        (ingredient) => ingredient.key === payload
      );
      if (ingredientIndex !== -1) {
        const updatedIngredients = [...state.ingredients];
        updatedIngredients.splice(ingredientIndex, 1);
        return {
          ...state,
          ingredients: updatedIngredients,
        };
      }
      return state;
    }
    // Редюсер для обновления порядка ингредиентов
    case UPDATE_INGREDIENT_ORDER: {
      const { firstKey, secondKey } = payload;
      const updatedIngredients = [...state.ingredients];
      const indexFirstElement = updatedIngredients.findIndex(
        (ingredient) => ingredient.key === firstKey
      );
      const indexSecondElement = updatedIngredients.findIndex(
        (ingredient) => ingredient.key === secondKey
      );
      const [movedIngredient] = updatedIngredients.splice(indexFirstElement, 1);
      updatedIngredients.splice(indexSecondElement, 0, movedIngredient);
      return {
        ...state,
        ingredients: updatedIngredients,
      };
    }
    // Удаление булки из состояния
    case REMOVE_BUN_BURGER: {
      return {
        ...state,
        bun: null,
      };
    }
    default: {
      return state;
    }
  }
};
