import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import FeedIcon from "../feed-icon/feed-icon";
import styles from "./feed-ingredient.module.css";

export default function FeedIngredient() {
  let count = 2;
  let price = 1245;
  return (
    <li className={styles.container}>
      <FeedIcon />
      <h3 className={`${styles.name} text text_type_main-small`}>
        Соус фирменный Space Sauce
      </h3>
      <p className={`${styles.price} text text_type_digits-default`}>
        <span>{`${count} x ${price}`}</span>
        <CurrencyIcon type="primary" />
      </p>
    </li>
  );
}
