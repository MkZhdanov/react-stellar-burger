import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./feed.module.css";
import FeedList from "../../components/feed-list/feed-list";
import FeedSummary from "../../components/feed-summary/feed-summary";
import {
  wsOrdersConnectionStart,
  wsOrdersConnectionClosed,
} from "../../services/actions/orders";

export default function FeedPage() {
  const dispatch = useDispatch();
  const { isLoading, hasConnectionFailed, orders } = useSelector(
    (state) => state.ordersData
  );

  // Запуск WebSocket соединения при монтировании компонента
  useEffect(() => {
    dispatch(wsOrdersConnectionStart());
    // Функция, вызываемая при размонтировании компонента для закрытия WebSocket соединения
    return () => {
      dispatch(wsOrdersConnectionClosed());
    };
  }, [dispatch]);

  return (
    <div className={`${styles.container} pt-10 pb-10`}>
      <h2 className={"mb-5 text text_type_main-large"}>Лента заказов</h2>
      <div className={styles.information}>
        <FeedList data={orders} title="Лента заказов" />
        <FeedSummary />
      </div>
    </div>
  );
}
