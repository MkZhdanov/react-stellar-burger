import React, { useMemo, FC } from "react";
import { useLocation } from "react-router-dom";

import styles from "./feed-list.module.css";
import FeedItem from "../feed-item/feed-item";
import { IOrder } from "../../utils/types/order";

interface IFeedListProps {
  data: IOrder[];
}

const FeedList: FC<IFeedListProps> = ({ data }) => {
  const location = useLocation();

  const feedItems = useMemo(() => {
    return data.map((orderData) => (
      <FeedItem key={orderData._id} data={orderData} />
    ));
  }, [data, location.pathname]);

  return (
    <div className={styles.container}>
      <ul className={`${styles.list} pr-2 custom-scroll`}>{feedItems}</ul>
    </div>
  );
};

export default FeedList;
