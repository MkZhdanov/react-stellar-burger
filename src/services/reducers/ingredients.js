import {
  FETCH_INGREDIENTS,
  FETCH_INGREDIENTS_FAILED,
  FETCH_INGREDIENTS_SUCCESS,
} from "../actions/ingredients";

// Начальное состояние редюсера для ингредиентов
const initialState = {
  ingredients: [],
  isRequesting: false,
  hasRequestFailed: false,
  errors: null,
};

// Редюсер для управления состоянием ингредиентов
export const ingredientsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_INGREDIENTS:
      // Запуск запроса на получение ингредиентов
      return { ...state, isRequesting: true, hasRequestFailed: false };
    case FETCH_INGREDIENTS_SUCCESS:
      // Успешное получение ингредиентов
      return { ...state, isRequesting: false, ingredients: payload };
    case FETCH_INGREDIENTS_FAILED:
      // Ошибка при получении ингредиентов
      return {
        ...state,
        isRequesting: false,
        hasRequestFailed: true,
        errors: [...state.errors, payload],
      };
    default:
      // Возвращение текущего состояния в случае неизвестного действия
      return state;
  }
};
