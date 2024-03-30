import { generateKey } from "../../utils/data";
import {
  ADD_BUN_BURGER,
  ADD_INGREDIENT_BURGER,
  REMOVE_INGREDIENT_BURGER,
  REMOVE_BUN_BURGER,
  UPDATE_INGREDIENT_ORDER,
} from "../constants";
import { IIngredient, IUuid } from "../../utils/types/types";

export interface IAddBunBurgerAction {
  readonly type: typeof ADD_BUN_BURGER;
  readonly payload: IIngredient & IUuid;
}

export interface IAddIngredientBurgerAction {
  readonly type: typeof ADD_INGREDIENT_BURGER;
  readonly payload: IIngredient & IUuid;
}

export interface IRemoveIngredientBurgerAction {
  readonly type: typeof REMOVE_INGREDIENT_BURGER;
  readonly payload: string;
}

export interface IRemoveBunBurgerAction {
  readonly type: typeof REMOVE_BUN_BURGER;
}

export interface IUpdateIngredientOrderAction {
  readonly type: typeof UPDATE_INGREDIENT_ORDER;
  readonly payload: any; //////////////////////////////////////////////////////////////
}

export type TBurgerConstructorActions =
  | IAddBunBurgerAction
  | IAddIngredientBurgerAction
  | IRemoveIngredientBurgerAction
  | IRemoveBunBurgerAction
  | IUpdateIngredientOrderAction;

// Создает действие для добавления булки в конструктор бургера
export const addBunBurger = (
  bun: IIngredient & IUuid
): IAddBunBurgerAction => ({
  type: ADD_BUN_BURGER,
  payload: bun,
});

// Создает действие для добавления ингредиента в конструктор бургера
export const addIngredientBurger = (
  ingredient: IIngredient & IUuid
): IAddIngredientBurgerAction => ({
  type: ADD_INGREDIENT_BURGER,
  payload: { ...ingredient, key: generateKey() },
});

// Создает действие для удаления ингредиента из конструктора бургера
export const removeIngredientBurger = (
  ingredientIndex: string
): IRemoveIngredientBurgerAction => ({
  type: REMOVE_INGREDIENT_BURGER,
  payload: ingredientIndex,
});

// Создает действие для удаления булки из конструктора бургера
export const removeBunBurger = (): IRemoveBunBurgerAction => ({
  type: REMOVE_BUN_BURGER,
});

// Создает действие для обновления порядка ингредиентов
export const updateIngredientOrder = (
  firstKey: string,
  secondKey: string
): IUpdateIngredientOrderAction => ({
  type: UPDATE_INGREDIENT_ORDER,
  payload: { firstKey, secondKey },
});
