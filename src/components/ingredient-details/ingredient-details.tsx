import React, { useMemo, FC } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./ingredient-details.module.css";
import EnergyItem from "./energy-item/energy-item";

// Основной компонент для информации об ингридиенте
const IngredientDetails: FC = () => {
  // Стандартные данные об ингредиенте, используемые при отсутствии информации
  const DEFAULT_INFO_INGREDIENT = {
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    image: "https://... (ссылка на изображение)",
    name: "Информация об ингридиенте не найдена :(",
  };

  // Получение id ингредиента из URL с использованием хука useParams
  const { id } = useParams();

  // Получение данных об ингредиентах из Redux
  const { ingredients } = useSelector((state) => state.ingredientsData);

  // Поиск ингредиента по id
  let selectedIngredient = ingredients.find(
    (ingredient) => ingredient._id === id
  );

  if (!selectedIngredient) {
    selectedIngredient = { ...DEFAULT_INFO_INGREDIENT };
  }

  const { proteins, fat, carbohydrates, calories, image, name } =
    selectedIngredient;

  // Подготовка данных об энергетической ценности
  const energyInfo = {
    "Белки,\u00A0г": proteins,
    "Жиры,\u00A0г": fat,
    "Углеводы,\u00A0г": carbohydrates,
    "Калории,\u00A0ккал": calories,
  };

  // Преобразование объекта в массив пар [ключ, значение]
  const energyArray = Object.entries(energyInfo);

  // Мемоизация массива компонентов EnergyItem
  const memoizedEnergyItems = useMemo(() => {
    // Итерация по массиву энергетической информации и создание компонентов
    return energyArray.map(([label, amount], index) => (
      <EnergyItem key={index} data={{ label, amount }} />
    ));
  }, [energyArray]);

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img
          className={`${styles.img} pl-5 pr-5 mb-4`}
          src={image}
          alt={name}
        />
        <p className="text text_type_main-medium mt-4 mb-8">{name}</p>
        <ul className={`${styles.list} `}>{memoizedEnergyItems}</ul>
      </div>
    </div>
  );
};

export default IngredientDetails;
