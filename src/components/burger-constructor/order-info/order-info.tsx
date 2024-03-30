import React, { useMemo, FC } from "react";
import { useSelector, useDispatch } from "../../../services/hooks";
import { useNavigate } from "react-router-dom";
import styles from "./order-info.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { createOrder } from "../../../services/thunk/order-details";
import { IIngredient } from "../../../utils/types/ingredients";
import { getInformationOrder } from "../../../services/thunk/order";

// Компонент для отображения цены бургера и кнопки оформления заказа
const OrderInfo: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userAuth } = useSelector((state) => state.auth);
  // Получаем данные о булочке и ингредиентах из Redux-стейта
  const { bun, ingredients } = useSelector((state) => state.burgerIngredients);

  // Создаем массив идентификаторов ингредиентов для заказа
  const order = [
    bun._id,
    ...ingredients.map((ingredient: IIngredient) => ingredient._id),
    bun._id,
  ];

  // Рассчитываем общую стоимость бургера с помощью useMemo
  const price = useMemo(() => {
    const bunPrice = bun ? bun.price : 0;
    const ingredientsPrice = ingredients.reduce(
      (total: number, ingredient: IIngredient) => total + ingredient.price,
      0
    );
    return bunPrice * 2 + ingredientsPrice;
  }, [bun, ingredients]);

  // Обработчик клика по кнопке оформления заказа
  const handleOrderButtonClick = () => {
    if (!userAuth) {
      navigate("/login");
      return;
    }
    dispatch(createOrder(order));
    ////dispatch(getInformationOrder(order));
  };
  return (
    <div className={`${styles.container} mt-10 mr-4 ml-4`}>
      <div className={`${styles.price}`}>
        <p className="text text_type_digits-medium">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button
        htmlType="button"
        type="primary"
        size="large"
        onClick={handleOrderButtonClick}
      >
        Оформить заказ
      </Button>
    </div>
  );
};

export default OrderInfo;
