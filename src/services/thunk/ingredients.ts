import {
  fetchIngredients,
  fetchIngredientsFailed,
  fetchIngredientsSuccess,
} from "../actions/ingredients";
import { getFetchIngredientsRequest } from "../api";
import { AppThunk } from "../index";

// функция для получения ингредиентов
export const getIngredients = (): AppThunk => async (dispatch) => {
  dispatch(fetchIngredients());
  try {
    const ingredientsData = await getFetchIngredientsRequest();
    dispatch(fetchIngredientsSuccess(ingredientsData.data));
  } catch (error) {
    dispatch(fetchIngredientsFailed());
  }
};
