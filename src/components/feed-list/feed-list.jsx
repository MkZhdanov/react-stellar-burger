import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./feed-list.module.css";
import FeedItem from "../feed-item/feed-item";
import { orderPropType } from "../../utils/prop-types";

export default function FeedList({ data }) {
  const location = useLocation();

  const feedItems = useMemo(() => {
    return data.map((orderData) => (
      <FeedItem key={orderData._id} data={orderData} link={location.pathname} />
    ));
  }, [data, location.pathname]);

  return (
    <div className={styles.container}>
      <ul className={`${styles.list} pr-2 custom-scroll`}>{feedItems}</ul>
    </div>
  );
}

FeedList.propTypes = {
  data: PropTypes.arrayOf(orderPropType),
};
