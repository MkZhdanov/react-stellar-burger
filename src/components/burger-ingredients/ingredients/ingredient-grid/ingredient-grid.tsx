import React, { useMemo, FC } from "react";
import { useSelector } from "../../../../services/hooks";
import styles from "./ingredient-grid.module.css";
import IngredientItem from "../ingredient-item/ingredient-item";

interface IIngredientGridProps {
  data: {
    tabKey: string;
    tabName: string;
  };
  rowRef: React.RefObject<HTMLLIElement>;
}

const IngredientGrid: FC<IIngredientGridProps> = ({ data, rowRef }) => {
  // Получение списка ингредиентов
  const ingredients = useSelector((state) => state.ingredientsData.ingredients); //???????????????
  const { tabKey, tabName } = data;

  // Фильтрация ингредиентов для текущей вкладки
  const filteredIngredients = useMemo(
    () => ingredients.filter((ingredient) => ingredient.type === tabKey),
    [ingredients, tabKey]
  );

  // Создание компонентов ингредиентов для текущей вкладки
  const ingredientComponents = useMemo(
    () =>
      filteredIngredients.map((ingredient) => (
        <IngredientItem key={ingredient._id} data={ingredient} />
      )),
    [filteredIngredients]
  );

  return (
    <li className={styles.list} ref={rowRef} id={tabKey}>
      <h3 className={"text text_type_main-medium mt-10 mb-6"}>{tabName}</h3>
      <ul className={`${styles.grid} pl-4 pr-4`}>{ingredientComponents}</ul>
    </li>
  );
};

export default IngredientGrid;
