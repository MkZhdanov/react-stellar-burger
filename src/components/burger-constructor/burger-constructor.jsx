import React from "react";
import styles from "./burger-constructor.module.css";
import BurgerComponents from "./burger-components/burger-components";
import OrderInfo from "./order-info/order-info";

export default function BurgerConstructor() {
  return (
    <section className={`${styles.burgerConstructor} pt-25`}>
      <BurgerComponents />
      <OrderInfo />
    </section>
  );
}
