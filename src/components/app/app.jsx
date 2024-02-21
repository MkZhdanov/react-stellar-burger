import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { closeSelectedIngredient } from "../../services/actions/ingredient-details";
import { closeOrderModal } from "../../services/actions/order-details";
import LoginPage from "../../pages/login/login";
import Constructor from "../../pages/constructor/constructor";
import RegisterPage from "../../pages/register/register";
import ForgotPasswordPage from "../../pages/forgot-password/forgot-password";
import ResetPasswordPage from "../../pages/reset-password/reset-password";
import ProfilePage from "../../pages/profile/profile";
import { fetchCheckAccess } from "../../services/actions/auth";

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

  React.useEffect(() => {
    dispatch(fetchCheckAccess());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Router>
        <AppHeader />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Constructor />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
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
      </Router>
    </div>
  );
}
