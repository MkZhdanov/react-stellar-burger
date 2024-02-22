import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./burger-ingredients.module.css";
import Tabs from "./tabs/tabs";
import Ingredients from "./ingredients/ingredients";

// Основной компонент для страницы с ингредиентами
export default function BurgerIngredients() {
  return (
    <section className={`${styles.ingredients} mt-10`}>
      <h2 className={`text text_type_main-large mb-5`}>Соберите бургер</h2>
      <Tabs />
      <Ingredients />
    </section>
  );
}
