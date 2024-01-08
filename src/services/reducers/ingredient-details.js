import {
  OPEN_SELECTED_INGREDIENT,
  CLOSE_SELECTED_INGREDIENT,
  SET_SELECTED_INGREDIENT,
  RESET_SELECTED_INGREDIENT,
} from "../actions/ingredient-details";

const initialState = {
  ingredient: null,
  open: false,
};

export const selectedIngredientReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case OPEN_SELECTED_INGREDIENT: {
      return {
        ...state,
        open: true,
      };
    }
    case CLOSE_SELECTED_INGREDIENT: {
      return {
        ...state,
        open: false,
      };
    }
    case SET_SELECTED_INGREDIENT: {
      return {
        ...state,
        open: true,
        ingredient: payload,
      };
    }
    case RESET_SELECTED_INGREDIENT: {
      return {
        ...state,
        ingredient: null,
      };
    }
    default: {
      return state;
    }
  }
};
