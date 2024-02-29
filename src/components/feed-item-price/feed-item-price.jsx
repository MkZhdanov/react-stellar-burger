import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./feed-item-price.module.css";

export default function FeedItemPrice() {
  return (
    <p className={`${styles.price} text text_type_digits-default`}>
      <span>40500</span>
      <CurrencyIcon type="primary" />
    </p>
  );
}
