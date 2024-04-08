import React, { FC } from "react";
import styles from "./feed-summary-block.module.css";

interface IFeedSummaryBlockProps {
  title: string;
  data: {
    number: number;
  }[];
}

const FeedSummaryBlock: FC<IFeedSummaryBlockProps> = ({ title, data }) => {
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
};

export default FeedSummaryBlock;
