import React, { FC } from "react";
import { useSelector } from "../../services/hooks";
import styles from "./order-details.module.css";
import successImg from "../../assets/images/done.jpg";
import RenderContent from "../render-content/render-content";

const OrderDetails: FC = () => {
  const { number } = useSelector((state) => state.createdOrder.order);

  return (
    <div className={styles.info}>
      <p className={`${styles.btn} text text_type_digits-large mt-4 mb-6`}>
        {number}
      </p>
      <p className="text text_type_main-medium mt-6 mb-10">
        идентификатор заказа
      </p>
      <img
        className={`${styles.img} mt-10 mb-10`}
        src={successImg}
        alt="success"
      />
      <p className="text text_type_main-default mt-10 mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mt-2">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
};

export default OrderDetails;
