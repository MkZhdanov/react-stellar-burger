import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
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
import { Auth, UnAuth } from "../protected-route/protected-route";

import { getIngredients } from "../../services/actions/ingredients";

// Основной компонент приложения
export default function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const handleModalClose = () => {
    // Возвращаемся к предыдущему пути при закрытии модалки
    navigate(-1);
  };

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

  //==========================================================================

  // Функция для получения данных пользователя и ингредиентов
  const fetchData = useCallback(() => {
    dispatch(getIngredients()); // Запрос списка ингредиентов
  }, [dispatch]);

  // Загрузка данных пользователя и ингредиентов при монтировании компонента
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.main}>
        <Routes location={background || location}>
          <Route path="/" element={<Constructor />} />
          <Route path="/login" element={<UnAuth component={<LoginPage />} />} />
          <Route
            path="/register"
            element={<UnAuth component={<RegisterPage />} />}
          />
          <Route
            path="/forgot-password"
            element={<UnAuth uth component={<ForgotPasswordPage />} />}
          />
          <Route
            path="/reset-password"
            element={<UnAuth component={<ResetPasswordPage />} />}
          />
          <Route
            path="/profile"
            element={<Auth component={<ProfilePage />} />}
          />
          <Route path="/ingredients/:id" element={<IngredientDetails />} />
        </Routes>
        {background && (
          <Routes>
            <Route
              path="/ingredients/:id"
              element={
                <Modal title="Детали ингредиента" onClose={handleModalClose}>
                  <IngredientDetails />
                </Modal>
              }
            />
          </Routes>
        )}
      </main>
      {errorModalOrder === null && !loadingModalOrder && openModalOrder && (
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
}
