import styles from "./feed-summary-item.module.css";
import PropTypes from "prop-types";

export default function FeedSummaryItem({ title, value }) {
  return (
    <div>
      <h2 className="text text_type_main-medium">{title}</h2>
      <p className={`${styles.text_shadow} text text_type_digits-large`}>
        {value}
      </p>
    </div>
  );
}

FeedSummaryItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};
