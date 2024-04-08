import React, { FC } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import styles from "./app-header.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

// Комопнент шапки приложения
const AppHeader: FC = () => {
  const currentLocation = useLocation();

  const link = `${styles.link} mt-4 mb-4 mr-5 ml-5 `;
  const activeLink = "text_color_primary";
  const inactiveLink = "text_color_inactive ";

  const getIconType = (url: string) =>
    currentLocation.pathname === url ? "primary" : "secondary";

  return (
    <header className={`${styles.header} `}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                link + (isActive ? activeLink : inactiveLink)
              }
            >
              <BurgerIcon type={getIconType("/")} />
              <span className="text text_type_main-default">Конструктор</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/feed"}
              className={({ isActive }) =>
                link + (isActive ? activeLink : inactiveLink)
              }
            >
              <ListIcon type={getIconType("/feed")} />
              <span className="text text_type_main-default">Лента заказов</span>
            </NavLink>
          </li>
        </ul>
        <Link to="/">
          <Logo />
        </Link>
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            link + (isActive ? activeLink : inactiveLink)
          }
        >
          <ProfileIcon type={getIconType("/profile")} />
          <span className="text text_type_main-default"> Личный кабинет</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default AppHeader;
