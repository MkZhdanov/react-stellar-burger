import React from "react";
import styles from "./ingredient-grid.module.css";
import IngredientItem from "../ingredient-item/ingredient-item";
import { ingredientPropType } from "../../../../utils/prop-types";
import PropTypes from "prop-types";

export default function IngredientGrid({ data, title, onCardClick }) {
  return (
    <li className={styles.list}>
      <h3 className={"text text_type_main-medium mt-10 mb-6"}>{title}</h3>
      <ul className={`${styles.grid} pl-4 pr-4`}>
        {data.map((data) => (
          <IngredientItem
            onCardClick={onCardClick}
            key={data._id}
            data={data}
          />
        ))}
      </ul>
    </li>
  );
}

IngredientGrid.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType),
  title: PropTypes.string,
  onCardClick: PropTypes.func.isRequired,
};
