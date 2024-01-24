import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { closeSelectedIngredient } from "../../services/actions/ingredient-details";
import { closeOrderModal } from "../../services/actions/order-details";

// Основной компонент приложения
export default function App() {
  const dispatch = useDispatch();

  // Деструктуризация состояния созданного заказа для модального окна заказа
  const {
    loading: loadingModalOrder,
    error: errorModalOrder,
    open: openModalOrder,
  } = useSelector((state) => state.createdOrder);

  // Получение состояния открытия модального окна выбранного ингредиента
  const openModalIngredient = useSelector(
    (state) => state.selectedIngredient.open
  );

  // Функция для закрытия модального окна
  const closeModal = () => {
    if (openModalIngredient) dispatch(closeSelectedIngredient());
    if (errorModalOrder === null && !loadingModalOrder && openModalOrder)
      dispatch(closeOrderModal());
  };
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
      {errorModalOrder === null && !loadingModalOrder && openModalOrder && (
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
      {openModalIngredient && (
        <Modal title="Детали ингредиента" onClose={closeModal}>
          <IngredientDetails />
        </Modal>
      )}
    </div>
  );
}
