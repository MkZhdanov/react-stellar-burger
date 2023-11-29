import React from "react";
import styles from "./burger-ingredients.module.css";
import Tabs from "./tabs/tabs";
import Ingredients from "./ingredients/ingredients";
import { data } from "../../utils/data";
import { ingredientPropType } from "../../utils/prop-types";
import PropTypes from "prop-types";

export default function BurgerIngredients() {
  return (
    <section className={`${styles.ingredients} mt-10`}>
      <h2 className={`text text_type_main-large mb-5`}>Соберите бургер</h2>
      <Tabs />
      <Ingredients data={data} />
    </section>
  );
}

Ingredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType),
};
