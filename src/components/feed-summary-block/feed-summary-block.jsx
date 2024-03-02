import styles from "./feed-summary-block.module.css";
import PropTypes from "prop-types";

export default function FeedSummaryBlock({ title, data }) {
  return (
    <div className={`${styles.container} mb-15`}>
      <h2 className="text text_type_main-medium mb-6">{title}</h2>
      <ul className={`${styles.list} mt-6`}>
        {data.map(({ number }) => (
          <li
            key={number}
            className="text text_type_digits-default text_color_success"
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
}

FeedSummaryBlock.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number.isRequired,
    })
  ).isRequired,
};
