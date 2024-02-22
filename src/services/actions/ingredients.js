import { getFetchIngredientsRequest } from "../api";

// ======== Action Types ========
export const FETCH_INGREDIENTS = "FETCH_INGREDIENTS";
export const FETCH_INGREDIENTS_SUCCESS = "FETCH_INGREDIENTS_SUCCESS";
export const FETCH_INGREDIENTS_FAILED = "FETCH_INGREDIENTS_FAILED";

// ======== Action Creators ========
// Действие для запроса ингредиентов
export const fetchIngredients = () => ({ type: FETCH_INGREDIENTS });

// Действие при успешном получении ингредиентов
export const fetchIngredientsSuccess = (data) => ({
  type: FETCH_INGREDIENTS_SUCCESS,
  payload: data,
});

// Действие при неудачном получении ингредиентов
export const fetchIngredientsFailed = (error = "Unknown error") => ({
  type: FETCH_INGREDIENTS_FAILED,
  payload: error,
});

// ======== Thunk Action ========
// функция для получения ингредиентов
export const getIngredients = () => async (dispatch) => {
  dispatch(fetchIngredients());
  try {
    const ingredientsData = await getFetchIngredientsRequest();
    if (ingredientsData) {
      dispatch(fetchIngredientsSuccess(ingredientsData.data));
    } else {
      throw new Error("Ошибка при получении ингредиентов");
    }
  } catch (error) {
    dispatch(fetchIngredientsFailed(error));
  }
};
