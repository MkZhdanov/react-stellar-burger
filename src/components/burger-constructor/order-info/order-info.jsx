import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./order-info.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { createOrder } from "../../../services/actions/order-details";

export default function OrderInfo() {
  const dispatch = useDispatch();
  const { bun, ingredients } = useSelector((state) => state.burgerIngredients);

  const order = [
    bun._id,
    ...ingredients.map((ingredient) => ingredient._id),
    bun._id,
  ];

  const price = useMemo(() => {
    const bunPrice = bun ? bun.price : 0;
    const ingredientsPrice = ingredients.reduce(
      (total, ingredient) => total + ingredient.price,
      0
    );
    return bunPrice * 2 + ingredientsPrice;
  }, [bun, ingredients]);

  const handleOrderButtonClick = () => {
    dispatch(createOrder(order));
  };
  return (
    <div className={`${styles.container} mt-10 mr-4 ml-4`}>
      <div className={`${styles.price}`}>
        <p className="text text_type_digits-medium">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button
        htmlType="button"
        type="primary"
        size="large"
        onClick={handleOrderButtonClick}
      >
        Оформить заказ
      </Button>
    </div>
  );
}
