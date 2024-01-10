import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import styles from "./burger-components.module.css";
import BurgerComponent from "./burger-component/burger-component";
import {
  addBunBurger,
  addIngredientBurger,
} from "../../../services/actions/burger-constructor";

export default function BurgerComponents() {
  const dispatch = useDispatch();
  const { bun: burgerBun, ingredients: burgerIngredients } = useSelector(
    (state) => state.burgerIngredients
  );

  const renderedIngredients = useMemo(() => {
    if (burgerIngredients) {
      return burgerIngredients.map((ingredient) => (
        <BurgerComponent
          iconVis={true}
          data={ingredient}
          key={ingredient.key}
        />
      ));
    }
    return null;
  }, [burgerIngredients]);

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
      <BurgerComponent position="top" iconVis={false} data={burgerBun} />
      <ul className={`${styles.list} custom-scroll`}>{renderedIngredients}</ul>
      <BurgerComponent position="bottom" iconVis={false} data={burgerBun} />
    </div>
  );
}
