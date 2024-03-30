import React, { useCallback, useMemo, FC } from "react";
import { useSelector, useDispatch } from "../../../../services/hooks";
import { useDrag, DragPreviewImage } from "react-dnd";
import styles from "./ingredient-item.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate, useLocation } from "react-router-dom";
import { IIngredient } from "../../../../utils/types/ingredients";

interface IIngredientProps {
  data: IIngredient;
}

// Компонент для отображения ингредиента
const IngredientItem: FC<IIngredientProps> = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // Извлекаем необходимые данные из объекта ингредиента
  const { _id: id, image, image_mobile, name, price } = data;
  // Получение булочки и ингридиентов для бургера
  const { bun: burgerBun, ingredients: burgerIngredients } = useSelector(
    (state) => state.burgerIngredients
  );

  // Обработчик клика для выбора ингредиента
  const handleClick = useCallback(() => {
    const state = { background: location };
    navigate(`/ingredients/${data._id}`, { state });
  }, [navigate, location, data]);

  // Вычисление количества ингредиента в бургере с использованием useMemo
  const count = useMemo(() => {
    const countIngredients = burgerIngredients.filter(
      (item: IIngredient) => item._id === data._id
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
};

export default IngredientItem;
