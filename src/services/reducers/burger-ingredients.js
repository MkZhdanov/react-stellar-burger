import {
  FETCH_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILURE,
} from "../actions/burger-ingredients";

const initialState = {
  loading: true,
  error: null,
  ingredients: [],
};

export const ingredientsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_INGREDIENTS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        ingredients: payload,
      };
    }
    case GET_INGREDIENTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: payload,
      };
    }
    default: {
      return state;
    }
  }
};
