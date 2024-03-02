import styles from "./feed-summary.module.css";
import { useSelector } from "react-redux";
import React, { useMemo } from "react";
import { ORDER_STATUSES } from "../../utils/data";
import FeedSummaryBlock from "../feed-summary-block/feed-summary-block";
import FeedSummaryItem from "../feed-summary-item/feed-summary-item";

export default function FeedSummary() {
  const { total, totalToday, orders } = useSelector(
    (state) => state.ordersData
  );

  const filteredOrders = useMemo(() => {
    // Функция для фильтрации заказов по статусу и возврата первых 10 элементов
    const filterOrdersByStatus = (status) =>
      orders.filter((order) => order.status === status).slice(0, 10);

    // Возвращаем объект с отфильтрованными заказами для "Готовы" и "В работе"
    return {
      completedOrders: filterOrdersByStatus(ORDER_STATUSES.done),
      pendingOrders: filterOrdersByStatus(ORDER_STATUSES.pending),
    };
  }, [orders]);

  return (
    <div className={styles.container}>
      <div className={styles.line}>
        <FeedSummaryBlock
          title="Готовы:"
          data={filteredOrders.completedOrders}
        />
        <FeedSummaryBlock
          title="В работе:"
          data={filteredOrders.pendingOrders}
        />
      </div>
      <FeedSummaryItem title="Выполнено за все время:" value={total} />
      <FeedSummaryItem title="Выполнено за сегодня:" value={totalToday} />
    </div>
  );
}
