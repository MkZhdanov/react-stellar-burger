import React, { FC } from "react";
import styles from "./burger-constructor.module.css";
import BurgerComponents from "./burger-components/burger-components";
import OrderInfo from "./order-info/order-info";
import { useSelector } from "../../services/hooks";

// Основной компонент для страницы с ингредиентами бургера
const BurgerConstructor: FC = () => {
  const { bun: burgerBun } = useSelector((state) => state.burgerIngredients);
  return (
    <section className={`${styles.burgerConstructor} pt-25`}>
      <BurgerComponents />
      {!!burgerBun && <OrderInfo />}
    </section>
  );
};

export default BurgerConstructor;
