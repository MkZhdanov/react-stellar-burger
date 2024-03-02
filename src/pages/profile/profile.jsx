import styles from "./profile.module.css";
import {
  EmailInput,
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../utils/cookie";
import { fetchLogout, fetchUpdateUserInfo } from "../../services/actions/auth";

export default function ProfilePage() {
  const link = `${styles.link} text text_type_main-medium `;
  const activeLink = "text_color_primary";
  const inactiveLink = "text_color_inactive ";

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState("home");
  const changePage = (page) => {
    setCurrentPage(page);
  };

  const refreshToken = getCookie("refreshToken");

  const logout = () => {
    dispatch(fetchLogout(refreshToken));
  };

  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <nav className={styles.navigation}>
          <NavLink
            onClick={() => changePage("home")}
            to="/profile"
            end
            className={({ isActive }) =>
              link + (isActive ? activeLink : inactiveLink)
            }
          >
            Профиль
          </NavLink>
          <NavLink
            onClick={() => changePage("orders")}
            to="/profile/orders"
            className={({ isActive }) =>
              link + (isActive ? activeLink : inactiveLink)
            }
          >
            История заказов
          </NavLink>
          <NavLink
            onClick={logout}
            className={`${styles.link} text text_type_main-medium text_color_inactive`}
          >
            Выход
          </NavLink>
        </nav>
        <p
          className={`${styles.text} text text_type_main-default text_color_inactive`}
        >
          {currentPage === "home" &&
            "В этом разделе вы можете изменить свои персональные данные"}
          {currentPage === "orders" &&
            "В этом разделе вы можете просмотреть свою историю заказов"}
        </p>
      </div>
      <Outlet />
    </div>
  );
}
