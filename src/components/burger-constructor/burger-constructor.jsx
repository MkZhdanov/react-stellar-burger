import React from "react";
import styles from "./burger-constructor.module.css";
import BurgerComponents from "./burger-components/burger-components";
import OrderInfo from "./order-info/order-info";
import { test_burger } from "../../utils/data";

export default function BurgerConstructor({ onOrderClick }) {
  return (
    <section className={`${styles.burgerConstructor} pt-25`}>
      <BurgerComponents />
      <OrderInfo onOrderClick={onOrderClick} />
    </section>
  );
}
