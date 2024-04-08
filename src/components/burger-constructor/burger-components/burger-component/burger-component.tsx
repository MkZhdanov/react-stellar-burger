import React, { useRef, FC } from "react";
import { useDispatch } from "../../../../services/hooks";
import { useDrag, useDrop } from "react-dnd";
import styles from "./burger-component.module.css";
import {
  DragIcon,
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  removeIngredientBurger,
  updateIngredientOrder,
} from "../../../../services/actions/burger-constructor";
import { IIngredient } from "../../../../utils/types/ingredients";
import { IUuid } from "../../../../utils/types/types";

interface IIngredientProps {
  position?: "top" | "bottom";
  iconVis: boolean;
  data: IIngredient & IUuid;
}

// Компонент ингридиента бургера
const BurgerComponent: FC<IIngredientProps> = ({ position, iconVis, data }) => {
  const dispatch = useDispatch();
  // Иконка для перетаскивания ингридиентов
  const visibility = iconVis ? styles.icon_visible : styles.icon_hidden;

  // Функция для обработки удаления ингредиента
  const handleIngredientDelete = () => {
    dispatch(removeIngredientBurger(data.key));
  };

  // Хук для перетаскивания
  const [{ isDrag }, drag] = useDrag({
    type: "item",
    item: data,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  // Хук для обработки бросания
  const [, drop] = useDrop({
    accept: "item",
    hover: (item: IUuid) => {
      const { key: firstKey } = item;
      const secondKey = data.key;
      if (firstKey && secondKey && firstKey !== secondKey) {
        dispatch(updateIngredientOrder(firstKey, secondKey));
      }
    },
  });

  // Создаем общий реф
  const sharedRef = useRef<HTMLLIElement>(null);
  // Привязываем общий реф к обоим хукам
  if (iconVis) {
    drag(sharedRef);
    drop(sharedRef);
  }

  return (
    <li
      className={styles.container}
      ref={sharedRef}
      style={{ opacity: isDrag ? 0.5 : 1 }}
    >
      <div className={visibility} ref={iconVis ? drag : null}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        handleClose={handleIngredientDelete}
        type={position}
        isLocked={position !== undefined}
        text={
          data.name +
          (position === "top" ? " (верх)" : "") +
          (position === "bottom" ? " (низ)" : "")
        }
        price={data.price}
        thumbnail={data.image}
      />
    </li>
  );
};

export default BurgerComponent;
