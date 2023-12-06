import React from "react";
import styles from "./ingredient-item.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientPropType } from "../../../../utils/prop-types";
import PropTypes from "prop-types";

export default function IngredientItem({ data, onCardClick }) {
  const handleClick = () => {
    onCardClick(data);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div
      className={styles.ingredient_item}
      onClick={handleClick}
      onKeyPress={handleKeyPress}
    >
      <div>
        <img className="ml-4 mr-4" src={data.image} alt={data.name} />
        <div className={`${styles.price} mt-1 mb-1`}>
          <p className="text text_type_digits-default">{data.price}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={`${styles.description} text text_type_main-default`}>
          {data.name}
        </p>
      </div>
      <Counter count={1} size="default" extraClass="m-1" />
    </div>
  );
}

IngredientItem.propTypes = {
  data: ingredientPropType,
  onCardClick: PropTypes.func.isRequired,
};
