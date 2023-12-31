import React from "react";
import styles from "./order-details.module.css";
import successImg from "../../assets/images/done.jpg";

export default function OrderDetails() {
  return (
    <div className={styles.info}>
      <p className={`${styles.btn} text text_type_digits-large mt-4 mb-6`}>
        034536
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
}
