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
import PropTypes from "prop-types";

export default function IngredientItem({ data }) {
  const dispatch = useDispatch();
  const { _id: id, image, image_mobile, name, price } = data;
  const { bun: burgerBun, ingredients: burgerIngredients } = useSelector(
    (state) => state.burgerIngredients
  );

  const handleClick = useCallback(() => {
    dispatch(openSelectedIngredient(data));
  }, [dispatch, data]);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        dispatch(openSelectedIngredient(data));
      }
    },
    [dispatch, data]
  );

  const count = useMemo(() => {
    if (data.type === "bun") {
      return data._id === burgerBun._id ? 2 : 0;
    } else {
      return burgerIngredients.reduce(
        (col, ingredient) => (ingredient._id === id ? col + 1 : col),
        0
      );
    }
  }, [data, burgerBun, burgerIngredients]);

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
