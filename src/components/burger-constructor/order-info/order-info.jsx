import React from "react";
import styles from "./order-info.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function OrderInfo({ onOrderClick }) {
  return (
    <div className={`${styles.container} mt-10 mr-4 ml-4`}>
      <div className={`${styles.price}`}>
        <p className="text text_type_digits-medium">610</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button
        htmlType="button"
        type="primary"
        size="large"
        onClick={onOrderClick}
      >
        Оформить заказ
      </Button>
    </div>
  );
}
