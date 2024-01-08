import { getFetchIngredientsRequest } from "../api";

export const FETCH_INGREDIENTS_REQUEST = "FETCH_INGREDIENTS_REQUEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILURE = "GET_INGREDIENTS_FAILURE";

export const fetchIngredientsRequest = () => ({
  type: FETCH_INGREDIENTS_REQUEST,
});

export const getIngredientsSuccess = (ingredients) => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload: ingredients,
});

export const getIngredientsFailure = (error) => ({
  type: GET_INGREDIENTS_FAILURE,
  payload: error,
});

export const getIngredients = () => async (dispatch) => {
  dispatch(fetchIngredientsRequest());
  try {
    const ingredients = await getFetchIngredientsRequest();
    if (ingredients && ingredients.success) {
      dispatch(getIngredientsSuccess(ingredients.data));
    } else {
      throw new Error("error");
    }
  } catch (error) {
    dispatch(getIngredientsFailure(error.message));
  }
};
