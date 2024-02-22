import React, { useMemo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./ingredient-grid.module.css";
import IngredientItem from "../ingredient-item/ingredient-item";
import { setScrollRefAction } from "../../../../services/actions/tabs";
import { component_tabs } from "../../../../utils/data";
import { ingredientPropType } from "../../../../utils/prop-types";
import PropTypes from "prop-types";

export default function IngredientGrid({ tab }) {
  const dispatch = useDispatch();
  // Получение списка ингредиентов
  const ingredients = useSelector((state) => state.ingredientsData.ingredients);
  // Создание ref для текущей строки
  const rowRef = useRef(null);

  // Фильтрация ингредиентов для текущей вкладки
  const filteredIngredients = useMemo(
    () => ingredients.filter((ingredient) => ingredient.type === tab),
    [ingredients, tab]
  );

  // Создание компонентов ингредиентов для текущей вкладки
  const ingredientComponents = useMemo(
    () =>
      filteredIngredients.map((ingredient) => (
        <IngredientItem key={ingredient._id} data={ingredient} />
      )),
    [filteredIngredients]
  );

  // Эффект для установки ref в состояние Redux
  useEffect(() => {
    dispatch(setScrollRefAction({ [tab]: rowRef }));
  }, [dispatch]);

  return (
    <li className={styles.list} ref={rowRef} id={tab}>
      <h3 className={"text text_type_main-medium mt-10 mb-6"}>
        {component_tabs[tab]}
      </h3>
      <ul className={`${styles.grid} pl-4 pr-4`}>{ingredientComponents}</ul>
    </li>
  );
}

IngredientGrid.propTypes = {
  tab: PropTypes.oneOf(Object.keys(component_tabs)).isRequired,
};
