import styles from "./feed-icon.module.css";

export default function FeedIcon() {
  return (
    <div className={styles.container}>
      <img
        className={`${styles.image}`}
        src={"https://code.s3.yandex.net/react/code/sauce-02.png"}
        alt={"Соус Spicy-X"}
      />
    </div>
  );
}
