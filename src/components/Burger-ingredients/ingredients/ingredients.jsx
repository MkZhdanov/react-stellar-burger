import React from "react";
import styles from "./ingredients.module.css";
import IngredientGrid from "./ingredient-grid/ingredient-grid";
import { component_tabs } from "../../../utils/data";

export default function Ingredients({ data }) {
  return (
    <ul className={`${styles.container} custom-scroll`}>
      {component_tabs.map((tabItem) => (
        <IngredientGrid
          key={tabItem.type}
          title={tabItem.text}
          data={
            data
              ? data.filter(function (item) {
                  return item.type === tabItem.type;
                })
              : []
          }
        />
      ))}
    </ul>
  );
}
