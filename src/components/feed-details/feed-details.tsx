import styles from "./feed-details.module.css";
import React, { useEffect, FC } from "react";
import { useDispatch, useSelector } from "../../services/hooks";
import { useParams } from "react-router-dom";
import { getInformationOrder } from "../../services/actions/order";
import isEmpty from "../../utils/isEmpty";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import getStatusMessage from "../../utils/getStatusMessage";
import FeedItemPrice from "../feed-item-price/feed-item-price";
import FeedIngredient from "../feed-ingredient/feed-ingredient";
import RenderContent from "../render-content/render-content";

const FeedDetails: FC = () => {
  const dispatch = useDispatch();
  const { information, isRequesting } = useSelector((state) => state.orderData);

  // Получение параметра feedNumber из URL
  const { feedNumber } = useParams();

  useEffect(() => {
    dispatch(getInformationOrder(feedNumber));
  }, [dispatch, feedNumber]);

  if (!information) return null;

  const { number, name, status, ingredients, createdAt: date } = information;
  const statusData = getStatusMessage(status);
  const ingredientCountArray = mapIngredientsToCountArray(ingredients);

  interface IIngredientCount {
    ingredient: string;
    count: number;
  }

  function mapIngredientsToCountArray(
    ingredients: string[]
  ): IIngredientCount[] {
    // Проверяем, является ли массив пустым с помощью функции isEmpty
    if (isEmpty(ingredients)) {
      // Если массив пуст, возвращаем пустой массив
      return [];
    }
    // Создаем новый объект Map для отслеживания количества каждого ингредиента
    const ingredientCountMap = new Map<string, number>();
    // Итерируем по массиву ингредиентов
    ingredients.forEach((ingredient) => {
      // Получаем текущее количество данного ингредиента из Map, или 0, если его еще нет
      const currentCount = ingredientCountMap.get(ingredient) || 0;
      // Увеличиваем количество данного ингредиента на 1 и сохраняем в Map
      ingredientCountMap.set(ingredient, currentCount + 1);
    });
    // Преобразуем Map в массив объектов с полями ingredient и count
    return Array.from(ingredientCountMap, ([ingredient, count]) => ({
      ingredient,
      count,
    }));
  }

  return (
    <RenderContent isLoading={isRequesting}>
      <div className={styles.container}>
        <div className={styles.info}>
          <p className={`${styles.number} text text_type_digits-default mb-10`}>
            {number}
          </p>
          <h1 className="text text_type_main-medium mt-10 mb-3">{name}</h1>
          <p
            className={`text ${statusData.className} text_type_main-small mt-3 mb-15`}
          >
            {statusData.message}
          </p>
          <h2 className="text text_type_main-medium mt-15 mb-6">Состав:</h2>
          <ul className={`${styles.list} mt-6 mb-10 pr-6 custom-scroll`}>
            {ingredientCountArray.map(({ ingredient, count }) => (
              <FeedIngredient key={ingredient} id={ingredient} count={count} />
            ))}
          </ul>
          <div className={`${styles.line} mt-10`}>
            <FormattedDate
              date={new Date(date)}
              className="text text_type_main-default text_color_inactive"
            />
            <FeedItemPrice data={ingredients} />
          </div>
        </div>
      </div>
    </RenderContent>
  );
};

export default FeedDetails;
