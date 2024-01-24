import React from "react";
import styles from "./burger-constructor.module.css";
import BurgerComponents from "./burger-components/burger-components";
import OrderInfo from "./order-info/order-info";
import { useSelector } from "react-redux";

// Основной компонент для страницы с ингредиентами бургера
export default function BurgerConstructor() {
  const { bun: burgerBun } = useSelector((state) => state.burgerIngredients);
  return (
    <section className={`${styles.burgerConstructor} pt-25`}>
      <BurgerComponents />
      {!!burgerBun && <OrderInfo />}
    </section>
  );
}
