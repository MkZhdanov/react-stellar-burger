import styles from "./feed-list.module.css";
import FeedItemPrice from "../feed-item-price/feed-item-price";
import FeedIcon from "../feed-icon/feed-icon";

export default function FeedList() {
  return (
    <div className={styles.container}>
      <ul className={`${styles.list} pr-2 custom-scroll`}>
        <li className={`${styles.itemContainer} p-6`}>
          <div className={styles.line}>
            <p className={`${styles.number} text text_type_digits-default`}>
              35345
            </p>
            <p className="text text_type_main-default text_color_inactive">
              Сегодня, 17:35 i-GMT+3
            </p>
          </div>
          <h2 className="text text_type_main-medium">
            Space флюоресцентный бургер
          </h2>
          <div className={styles.line}>
            <ul className={styles.itemList}>
              <li style={{ marginRight: "-20px" }}>
                <FeedIcon />
              </li>
            </ul>
            <FeedItemPrice />
          </div>
        </li>
        <li className={`${styles.itemContainer} p-6`}>
          <div className={styles.line}>
            <p className={`${styles.number} text text_type_digits-default`}>
              35345
            </p>
            <p className="text text_type_main-default text_color_inactive">
              Сегодня, 17:35 i-GMT+3
            </p>
          </div>
          <h2 className="text text_type_main-medium">
            Space флюоресцентный бургер
          </h2>
          <div className={styles.line}>
            <ul className={styles.itemList}>
              <li style={{ marginRight: "-20px" }}>
                <FeedIcon />
              </li>
            </ul>
            <FeedItemPrice />
          </div>
        </li>
        <li className={`${styles.itemContainer} p-6`}>
          <div className={styles.line}>
            <p className={`${styles.number} text text_type_digits-default`}>
              35345
            </p>
            <p className="text text_type_main-default text_color_inactive">
              Сегодня, 17:35 i-GMT+3
            </p>
          </div>
          <h2 className="text text_type_main-medium">
            Space флюоресцентный бургер
          </h2>
          <div className={styles.line}>
            <ul className={styles.itemList}>
              <li style={{ marginRight: "-20px" }}>
                <FeedIcon />
              </li>
            </ul>
            <FeedItemPrice />
          </div>
        </li>
        <li className={`${styles.itemContainer} p-6`}>
          <div className={styles.line}>
            <p className={`${styles.number} text text_type_digits-default`}>
              35345
            </p>
            <p className="text text_type_main-default text_color_inactive">
              Сегодня, 17:35 i-GMT+3
            </p>
          </div>
          <h2 className="text text_type_main-medium">
            Space флюоресцентный бургер
          </h2>
          <div className={styles.line}>
            <ul className={styles.itemList}>
              <li style={{ marginRight: "-20px" }}>
                <FeedIcon />
              </li>
            </ul>
            <FeedItemPrice />
          </div>
        </li>
        <li className={`${styles.itemContainer} p-6`}>
          <div className={styles.line}>
            <p className={`${styles.number} text text_type_digits-default`}>
              35345
            </p>
            <p className="text text_type_main-default text_color_inactive">
              Сегодня, 17:35 i-GMT+3
            </p>
          </div>
          <h2 className="text text_type_main-medium">
            Space флюоресцентный бургер
          </h2>
          <div className={styles.line}>
            <ul className={styles.itemList}>
              <li style={{ marginRight: "-20px" }}>
                <FeedIcon />
              </li>
            </ul>
            <FeedItemPrice />
          </div>
        </li>
        <li className={`${styles.itemContainer} p-6`}>
          <div className={styles.line}>
            <p className={`${styles.number} text text_type_digits-default`}>
              35345
            </p>
            <p className="text text_type_main-default text_color_inactive">
              Сегодня, 17:35 i-GMT+3
            </p>
          </div>
          <h2 className="text text_type_main-medium">
            Space флюоресцентный бургер
          </h2>
          <div className={styles.line}>
            <ul className={styles.itemList}>
              <li style={{ marginRight: "-20px" }}>
                <FeedIcon />
              </li>
            </ul>
            <FeedItemPrice />
          </div>
        </li>
        <li className={`${styles.itemContainer} p-6`}>
          <div className={styles.line}>
            <p className={`${styles.number} text text_type_digits-default`}>
              35345
            </p>
            <p className="text text_type_main-default text_color_inactive">
              Сегодня, 17:35 i-GMT+3
            </p>
          </div>
          <h2 className="text text_type_main-medium">
            Space флюоресцентный бургер
          </h2>
          <div className={styles.line}>
            <ul className={styles.itemList}>
              <li style={{ marginRight: "-20px" }}>
                <FeedIcon />
              </li>
            </ul>
            <FeedItemPrice />
          </div>
        </li>
      </ul>
    </div>
  );
}
