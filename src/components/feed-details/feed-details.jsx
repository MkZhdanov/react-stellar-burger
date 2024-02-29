import styles from "./feed-details.module.css";
import FeedItemPrice from "../feed-item-price/feed-item-price";
import FeedIngredient from "../feed-ingredient/feed-ingredient";

export default function FeedDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p className={`${styles.number} text text_type_digits-default mb-10`}>
          35455
        </p>
        <h1 className="text text_type_main-medium mt-10 mb-3">
          Краторный бургер
        </h1>
        <p className={`text  text_type_main-small mt-3 mb-15`}>выполнен</p>
        <h2 className="text text_type_main-medium mt-15 mb-6">Состав:</h2>
        <ul className={`${styles.list} mt-6 mb-10 pr-6 custom-scroll`}>
          <FeedIngredient />
          <FeedIngredient />
        </ul>
        <div className={`${styles.line} mt-10`}>
          <p className="text text_type_main-small text_color_inactive">
            Сегодня, 17:35 i-GMT+3
          </p>
          <FeedItemPrice />
        </div>
      </div>
    </div>
  );
}
