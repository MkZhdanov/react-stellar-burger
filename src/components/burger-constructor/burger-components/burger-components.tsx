import React, { useMemo, FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import styles from "./burger-components.module.css";
import BurgerComponent from "./burger-component/burger-component";
import {
  addBunBurger,
  addIngredientBurger,
} from "../../../services/actions/burger-constructor";
import { IIngredient } from "../../../utils/types/ingredients";
import { IUuid } from "../../../utils/types/types";

// Компонент для игридиентов бургера
const BurgerComponents: FC = () => {
  const dispatch = useDispatch();
  const { bun: burgerBun, ingredients: burgerIngredients } = useSelector(
    (state) => state.burgerIngredients
  );

  // Использование useMemo для оптимизации рендера
  const renderedIngredients = useMemo(() => {
    if (burgerIngredients) {
      return burgerIngredients.map((ingredient: IIngredient & IUuid) => (
        <BurgerComponent
          iconVis={true}
          data={ingredient}
          key={ingredient.key}
        />
      ));
    }
    return null;
  }, [burgerIngredients]);

  // Использование useDrop для обработки бросания ингредиентов
  const [{ isHover }, drop] = useDrop({
    accept: "ingredient",
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(item) {
      item && item.type === "bun"
        ? dispatch(addBunBurger(item))
        : dispatch(addIngredientBurger(item));
    },
  });
  return (
    <div
      className={`${styles.container} `}
      ref={drop}
      style={{ opacity: isHover ? 0.5 : 1 }}
    >
      {burgerBun ? (
        <>
          <BurgerComponent position="top" iconVis={false} data={burgerBun} />
          <ul className={`${styles.list} custom-scroll`}>
            {renderedIngredients}
          </ul>
          <BurgerComponent position="bottom" iconVis={false} data={burgerBun} />
        </>
      ) : (
        <div className={`${styles.item}`}>
          <h3>
            Пожалуйста, перенесите сюда булку и ингредиенты для создания заказа
          </h3>
        </div>
      )}
    </div>
  );
};

export default BurgerComponents;
