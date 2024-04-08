import React, { FC } from "react";
import styles from "./energy-item.module.css";

interface IEnergyItemProps {
  data: {
    label: string;
    amount: number;
  };
}

// Компонент отображения числовых показатель ингридиента
const EnergyItem: FC<IEnergyItemProps> = ({ data }) => {
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
};

export default EnergyItem;
