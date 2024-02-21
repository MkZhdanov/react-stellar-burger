import React from "react";
import styles from "./app-header.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

// Комопнент шапки приложения
export default function AppHeader() {
  return (
    <header className={`${styles.header} mt-10 mr-10 ml-10`}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <a
              className={`${styles.link} ${styles.link_active} mt-4 mb-4 mr-5 ml-5`}
              href="/"
            >
              <BurgerIcon type="primary" />
              <span className="text text_type_main-default">Конструктор</span>
            </a>
          </li>
          <li>
            <a className={`${styles.link} mt-4 mb-4 mr-5 ml-5`} href="#">
              <ListIcon type="secondary" />
              <span className="text text_type_main-default text_color_inactive">
                Лента заказов
              </span>
            </a>
          </li>
        </ul>
        <a href="#">
          <Logo />
        </a>
        <a className={`${styles.link} mt-4 mb-4 mr-5 ml-5`} href="/profile">
          <ProfileIcon type="secondary" />
          <span className="text text_type_main-default text_color_inactive">
            Личный кабинет
          </span>
        </a>
      </nav>
    </header>
  );
}
