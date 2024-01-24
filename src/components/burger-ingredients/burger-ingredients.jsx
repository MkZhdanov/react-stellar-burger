import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./burger-ingredients.module.css";
import Tabs from "./tabs/tabs";
import Ingredients from "./ingredients/ingredients";
import { getIngredients } from "../../services/actions/burger-ingredients";

// Основной компонент для страницы с ингредиентами
export default function BurgerIngredients() {
  const dispatch = useDispatch();
  // Получение состояния загрузки и ошибок
  const loading = useSelector((state) => state.ingredients.loading);
  const error = useSelector((state) => state.ingredients.error);

  // Эффект, выполняющий запрос на получение ингредиентов при загрузке компонента
  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    error === null &&
    !loading && (
      <section className={`${styles.ingredients} mt-10`}>
        <h2 className={`text text_type_main-large mb-5`}>Соберите бургер</h2>
        <Tabs />
        <Ingredients />
      </section>
    )
  );
}
