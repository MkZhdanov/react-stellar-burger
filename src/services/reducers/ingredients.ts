import {
  FETCH_INGREDIENTS,
  FETCH_INGREDIENTS_FAILED,
  FETCH_INGREDIENTS_SUCCESS,
} from "../constants";
import { TIngredientsActions } from "../actions/ingredients";
import { IIngredient } from "../../utils/types/ingredients";

type TIngredientsState = {
  ingredients: IIngredient[];
  isRequesting: boolean;
  hasRequestFailed: boolean;
};

// Начальное состояние редюсера для ингредиентов
const initialState: TIngredientsState = {
  ingredients: [],
  isRequesting: false,
  hasRequestFailed: false,
};

// Редюсер для управления состоянием ингредиентов
export const ingredientsReducer = (
  state = initialState,
  actions: TIngredientsActions
) => {
  switch (actions.type) {
    case FETCH_INGREDIENTS:
      // Запуск запроса на получение ингредиентов
      return { ...state, isRequesting: true, hasRequestFailed: false };
    case FETCH_INGREDIENTS_SUCCESS:
      // Успешное получение ингредиентов
      return { ...state, isRequesting: false, ingredients: actions.payload };
    case FETCH_INGREDIENTS_FAILED:
      // Ошибка при получении ингредиентов
      return {
        ...state,
        isRequesting: false,
        hasRequestFailed: true,
      };
    default:
      // Возвращение текущего состояния в случае неизвестного действия
      return state;
  }
};
