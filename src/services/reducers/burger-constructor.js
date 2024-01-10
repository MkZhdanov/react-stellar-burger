import { generateKey } from "../../utils/data";
import {
  ADD_BUN_BURGER,
  ADD_INGREDIENT_BURGER,
  REMOVE_INGREDIENT_BURGER,
  REMOVE_BUN_BURGER,
  UPDATE_INGREDIENT_ORDER,
} from "../actions/burger-constructor";

const initialState = {
  bun: {
    _id: "60666c42cc7b410027a1a9b2",
    name: "Флюоресцентная булка R2-D3",
    type: "bun",
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: "https://code.s3.yandex.net/react/code/bun-01.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-01-large.png",
    __v: 0,
  },
  ingredients: [],
};

export const burgerIngredientsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BUN_BURGER: {
      return {
        ...state,
        bun: payload,
      };
    }
    case ADD_INGREDIENT_BURGER: {
      const key = generateKey();
      return {
        ...state,
        ingredients: [...state.ingredients, { ...payload, key }],
      };
    }
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
