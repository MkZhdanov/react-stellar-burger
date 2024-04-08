import React, { useMemo, FC } from "react";
import { useSelector } from "../../services/hooks";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import FeedIcon from "../feed-icon/feed-icon";
import styles from "./feed-ingredient.module.css";
import { IIngredient } from "../../utils/types/ingredients";

interface IFeedIngredientProps {
  id: string;
  count: number;
}

const FeedIngredient: FC<IFeedIngredientProps> = ({ id, count }) => {
  const ingredients = useSelector((state) => state.ingredientsData.ingredients);
  const ingredient: IIngredient | undefined = useMemo(
    () => ingredients.find((ingredients) => ingredients._id === id),
    [ingredients, id]
  );

  if (!ingredient) return null;

  const { name, price } = ingredient;

  return (
    <li className={styles.container}>
      <FeedIcon id={id} />
      <h3 className={`${styles.name} text text_type_main-small`}>{name}</h3>
      <p className={`${styles.price} text text_type_digits-default`}>
        <span>{`${count} x ${price}`}</span>
        <CurrencyIcon type="primary" />
      </p>
    </li>
  );
};

export default FeedIngredient;
