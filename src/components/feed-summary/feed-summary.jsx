import styles from "./feed-summary.module.css";

export default function FeedSummary() {
  return (
    <div className={styles.container}>
      <div className={styles.line}>
        <div className={`${styles.block} mb-15`}>
          <h2 className="text text_type_main-medium mb-6">Готовы:</h2>
          <ul className={`${styles.list} mt-6`}>
            <li className="text text_type_digits-default text_color_success">
              35345
            </li>
            <li className="text text_type_digits-default text_color_success">
              35345
            </li>
            <li className="text text_type_digits-default text_color_success">
              35345
            </li>
            <li className="text text_type_digits-default text_color_success">
              35345
            </li>
            <li className="text text_type_digits-default text_color_success">
              35345
            </li>
            <li className="text text_type_digits-default text_color_success">
              35345
            </li>
            <li className="text text_type_digits-default text_color_success">
              35345
            </li>
            <li className="text text_type_digits-default text_color_success">
              35345
            </li>
            <li className="text text_type_digits-default text_color_success">
              35345
            </li>
          </ul>
        </div>
        <div className={`${styles.block} mb-15`}>
          <h2 className="text text_type_main-medium mb-6">В работе:</h2>
          <ul className={`${styles.list} mt-6`}>
            <li className="text text_type_digits-default text_color_success">
              35345
            </li>
            <li className="text text_type_digits-default text_color_success">
              35345
            </li>
            <li className="text text_type_digits-default text_color_success">
              35345
            </li>
            <li className="text text_type_digits-default text_color_success">
              35345
            </li>
            <li className="text text_type_digits-default text_color_success">
              35345
            </li>
            <li className="text text_type_digits-default text_color_success">
              35345
            </li>
            <li className="text text_type_digits-default text_color_success">
              35345
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text text_type_main-medium">Выполнено за все время:</h2>
        <p className={`${styles.text_shadow} text text_type_digits-large`}>
          12
        </p>
      </div>
      <div>
        <h2 className="text text_type_main-medium">Выполнено за сегодня:</h2>
        <p className={`${styles.text_shadow} text text_type_digits-large`}>1</p>
      </div>
    </div>
  );
}
