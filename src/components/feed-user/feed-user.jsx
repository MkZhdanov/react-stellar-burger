import FeedList from "../feed-list/feed-list";
import styles from "./feed-user.module.css";

export default function FeedUser() {
  return (
    <div className={styles.container}>
      <FeedList />
    </div>
  );
}
