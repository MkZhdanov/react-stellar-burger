import styles from "./feed-user.module.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FeedList from "../feed-list/feed-list";
import RenderContent from "../render-content/render-content";
import {
  wsUserOrdersConnectionStart,
  wsUserOrdersConnectionClosed,
} from "../../services/actions/auth";

export default function FeedUser() {
  const dispatch = useDispatch();
  const { orders, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(wsUserOrdersConnectionStart());
    return () => {
      dispatch(wsUserOrdersConnectionClosed());
    };
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <RenderContent isLoading={isLoading}>
        <FeedList data={orders} />
      </RenderContent>
    </div>
  );
}
