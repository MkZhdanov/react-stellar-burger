import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";

import FeedIcon from "../feed-icon/feed-icon";
import FeedItemPrice from "../feed-item-price/feed-item-price";
import styles from "./feed-item.module.css";
import { orderPropType } from "../../utils/prop-types";

export default function FeedItem({ data }) {
  const location = useLocation();
  const navigate = useNavigate();

  const { createdAt: date, name, ingredients, number } = data;

  function isEmpty(value) {
    // Проверка типа значения
    switch (typeof value) {
      case "object":
        // Если тип значения - объект
        return value === null ? true : Object.keys(value).length === 0; // Вернуть true, если объект пуст, иначе false
      case "array":
        // Если тип значения - массив
        return value.length === 0; // Вернуть true, если массив пуст, иначе false
      default:
        // Для остальных типов значений
        return !value; // Вернуть true, если значение ложно (пусто), иначе false
    }
  }

  // Обработчик клика по элементу списка
  const handleClick = (evt) => {
    const state = { background: location };
    navigate(`${number}`, { state });
  };

  // Функция для отображения ингредиентов
  const renderIngredients = () => {
    const firstFive = ingredients.slice(0, 5);
    const remaining = ingredients.slice(5);

    // Отображаем первые пять ингредиентов с использованием map
    const renderedFirstFive = firstFive.map((id, index) => (
      <li key={index} style={{ marginRight: "-20px" }}>
        <FeedIcon zIndex={ingredients.length - index} id={id} hover={false} />
      </li>
    ));

    // Добавляем оставшиеся ингредиенты, если они существуют
    const renderedRemaining = !isEmpty(remaining) && (
      <li>
        <FeedIcon
          col={remaining.length}
          id={remaining[0]}
          zIndex={ingredients.length - firstFive.length}
          hover={false}
        />
      </li>
    );

    // Возвращаем массив с отрендеренными элементами
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
      <h2 className="text text_type_main-medium">{name}</h2>
      <div className={styles.line}>
        <ul className={styles.list}>{renderIngredients()}</ul>
        <FeedItemPrice data={ingredients} />
      </div>
    </li>
  );
}

FeedItem.propTypes = {
  data: orderPropType.isRequired,
};
