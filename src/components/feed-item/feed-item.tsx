import React, { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";

import FeedIcon from "../feed-icon/feed-icon";
import FeedItemPrice from "../feed-item-price/feed-item-price";
import styles from "./feed-item.module.css";
import isEmpty from "../../utils/isEmpty";
import { IOrder } from "../../utils/types/order";

interface IFeedItemProps {
  data: IOrder;
}

const FeedItem: FC<IFeedItemProps> = ({ data }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const { createdAt: date, name, ingredients, number } = data;

  // Обработчик клика по элементу списка
  const handleClick = () => {
    // Создаем объект состояния для передачи в навигацию
    const state = { background: location };
    // Переходим на страницу с номером элемента списка
    navigate(`${number}`, { state });
  };

  // Функция для отображения ингредиентов
  const renderIngredients = () => {
    const firstFive = ingredients.slice(0, 5);
    const remaining = ingredients.slice(5);

    // Отображаем первые пять ингредиентов с использованием map
    const renderedFirstFive = firstFive.map((id, index) => (
      <li key={index} className={styles.lineIcon}>
        <FeedIcon zIndex={ingredients.length - index} id={id} hover={false} />
      </li>
    ));

    // Добавляем оставшиеся ингредиенты, если они существуют
    const renderedRemaining = !isEmpty(remaining) && (
      <li key={remaining[0]}>
        <FeedIcon
          col={remaining.length}
          id={remaining[0]}
          zIndex={ingredients.length - firstFive.length}
          hover={false}
        />
      </li>
    );
    return [renderedFirstFive, renderedRemaining];
  };

  return (
    <li onClick={handleClick} className={`${styles.container} p-6`}>
      <div className={styles.line}>
        <p className={`${styles.number} text text_type_digits-default`}>
          {number}
        </p>
        <FormattedDate
          date={new Date(date)}
          className="text text_type_main-default text_color_inactive"
        />
      </div>
      <h3 className="text text_type_main-medium">{name}</h3>
      <div className={styles.line}>
        <ul className={styles.list}>{renderIngredients()}</ul>
        <FeedItemPrice data={ingredients} />
      </div>
    </li>
  );
};

export default FeedItem;
