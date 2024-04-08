import styles from "./feed-user.module.css";
import React, { useEffect, FC } from "react";
import { useSelector, useDispatch } from "../../services/hooks";
import FeedList from "../feed-list/feed-list";
import RenderContent from "../render-content/render-content";
import {
  wsUserOrdersConnectionStart,
  wsUserOrdersConnectionClosed,
} from "../../services/actions/auth";

const FeedUser: FC = () => {
  const dispatch = useDispatch();
  const { orders, isLoading } = useSelector((state) => state.auth);

  // useEffect для управления WebSocket-соединением при монтировании и размонтировании компонента
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
};

export default FeedUser;
