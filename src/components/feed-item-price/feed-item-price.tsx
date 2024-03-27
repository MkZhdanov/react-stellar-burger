import React, { FC } from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import styles from "./feed-item-price.module.css";

interface IFeedItemPriceProps {
  data: string[];
}

const FeedItemPrice: FC<IFeedItemPriceProps> = ({ data = [] }) => {
  const ingredients = useSelector((state) => state.ingredientsData.ingredients);

  const ingredientMap = ingredients.reduce(
    (map: { [key: string]: number }, ingredient) => {
      map[ingredient._id] = ingredient.price;
      return map;
    },
    {}
  );

  // Вычисляем общую стоимость элемента ленты на основе данных и цен ингредиентов
  const totalPrice = data
    .map((ingredientId) => ingredientMap?.[ingredientId] || 0)
    .reduce((acc, price) => acc + price, 0);

  return (
    <p className={`${styles.price} text text_type_digits-default`}>
      <span>{totalPrice}</span>
      <CurrencyIcon type="primary" />
    </p>
  );
};

export default FeedItemPrice;
