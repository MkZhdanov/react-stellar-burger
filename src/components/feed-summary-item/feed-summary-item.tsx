import React, { FC } from "react";
import styles from "./feed-summary-item.module.css";

interface IFeedSummaryItemProps {
  title: string;
  value: number;
}

const FeedSummaryItem: FC<IFeedSummaryItemProps> = ({ title, value }) => {
  return (
    <div>
      <h2 className="text text_type_main-medium">{title}</h2>
      <p className={`${styles.text_shadow} text text_type_digits-large`}>
        {value}
      </p>
    </div>
  );
};

export default FeedSummaryItem;
