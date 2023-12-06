import React from "react";
import styles from "./burger-ingredients.module.css";
import Tabs from "./tabs/tabs";
import Ingredients from "./ingredients/ingredients";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types.js";

export default function BurgerIngredients({ onCardClick, data }) {
  return (
    <section className={`${styles.ingredients} mt-10`}>
      <h2 className={`text text_type_main-large mb-5`}>Соберите бургер</h2>
      <Tabs />
      <Ingredients onCardClick={onCardClick} data={data} />
    </section>
  );
}

BurgerIngredients.propTypes = {
  onCardClick: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(ingredientPropType),
};
