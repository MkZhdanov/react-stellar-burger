import styles from "./feed.module.css";
import FeedList from "../../components/feed-list/feed-list";
import FeedSummary from "../../components/feed-summary/feed-summary";

export default function FeedPage() {
  return (
    <div className={`${styles.container} pt-10 pb-10`}>
      <h2 className={"mb-5 text text_type_main-large"}>Лента заказов</h2>
      <div className={styles.information}>
        <FeedList />
        <FeedSummary />
      </div>
    </div>
  );
}
