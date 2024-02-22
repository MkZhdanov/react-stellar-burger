import React from "react";
import styles from "./energy-item.module.css";
import PropTypes from "prop-types";

// Компонент отображения числовых показатель ингридиента
export default function EnergyItem({ data }) {
  const { label, amount } = data;
  return (
    <li className={styles.item}>
      <p className="text text_type_main-default text_color_inactive mb-2">
        {label}
      </p>
      <p className="text text_type_digits-default text_color_inactive mt-2">
        {amount}
      </p>
    </li>
  );
}

EnergyItem.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired,
};
