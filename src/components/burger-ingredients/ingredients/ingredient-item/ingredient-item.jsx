import React, { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrag, DragPreviewImage } from "react-dnd";
import styles from "./ingredient-item.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { openSelectedIngredient } from "../../../../services/actions/ingredient-details";
import { ingredientPropType } from "../../../../utils/prop-types";

import { useSearchParams, useNavigate, useLocation } from "react-router-dom";

// Компонент для отображения ингредиента
export default function IngredientItem({ data }) {
  const dispatch = useDispatch();
  // Извлекаем необходимые данные из объекта ингредиента
  const { _id: id, image, image_mobile, name, price } = data;
  // Получение булочки и ингридиентов для бургера
  const { bun: burgerBun, ingredients: burgerIngredients } = useSelector(
    (state) => state.burgerIngredients
  );

  // Обработчик клика для выбора ингредиента
  //const handleClick = useCallback(() => {
  //  dispatch(openSelectedIngredient(data));
  // }, [dispatch, data]);
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = useCallback(() => {
    const state = { background: location };
    navigate(`/ingredients/${data._id}`, { state });
  }, [navigate, location, data]);

  // Обработчик нажатия клавиши Enter для выбора ингредиента
  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        dispatch(openSelectedIngredient(data));
      }
    },
    [dispatch, data]
  );

  // Вычисление количества ингредиента в бургере с использованием useMemo
  const count = useMemo(() => {
    const countIngredients = burgerIngredients.filter(
      (item) => item._id === data._id
    );

    let countBun = 0;
    if (burgerBun) {
      if (burgerBun._id === data._id) {
        countBun = 2;
        return countBun;
      }
    }

    return countIngredients.length + countBun;
  }, [burgerIngredients, burgerBun, data]);

  // Использование библиотеки для реализации Drag and Drop
  const [{ isDrag }, drag, preview] = useDrag({
    type: "ingredient",
    item: data,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  return (
    <>
      <DragPreviewImage connect={preview} src={image_mobile} />
      <div
        className={styles.ingredient_item}
        onClick={handleClick}
        onKeyPress={handleKeyPress}
        ref={drag}
        style={{ opacity: isDrag ? 0.5 : 1 }}
      >
        <div>
          <img className="ml-4 mr-4" src={image} alt={name} />
          <div className={`${styles.price} mt-1 mb-1`}>
            <p className="text text_type_digits-default">{price}</p>
            <CurrencyIcon type="primary" />
          </div>
          <p className={`${styles.description} text text_type_main-default`}>
            {name}
          </p>
        </div>
        <Counter count={count} size="default" extraClass="m-1" />
      </div>
    </>
  );
}

IngredientItem.propTypes = {
  data: ingredientPropType.isRequired,
};
