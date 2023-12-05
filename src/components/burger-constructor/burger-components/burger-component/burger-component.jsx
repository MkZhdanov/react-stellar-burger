import React from "react";
import styles from "./burger-component.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { data } from "../../../../utils/data";
import { ingredientPropType } from "../../../../utils/prop-types";
import PropTypes from "prop-types";

export default function BurgerComponent({ position, isLocked, iconVis, data }) {
  const visibility = iconVis ? styles.icon_visible : styles.icon_hidden;
  return (
    <li className={styles.container}>
      <div className={visibility}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        type={position}
        isLocked={isLocked}
        text={
          data.name +
          (position === "top" ? " (верх)" : "") +
          (position === "bottom" ? " (низ)" : "")
        }
        price={data.price}
        thumbnail={data.image}
      />
    </li>
  );
}

BurgerComponent.propTypes = {
  position: PropTypes.oneOf(["top", "bottom"]),
  iconVis: PropTypes.bool.isRequired,
  isLocked: PropTypes.bool,
  data: ingredientPropType,
};
