import styles from "./profile.module.css";
import {
  EmailInput,
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";

export default function ProfilePage() {
  const link = `${styles.link} text text_type_main-medium `;
  const activelink = "text_color_primary";
  const inactiveLink = "text_color_inactive ";

  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <nav className={styles.navigation}>
          <NavLink
            to="/profile"
            end
            className={({ isActive }) =>
              link + (isActive ? activelink : inactiveLink)
            }
          >
            Профиль
          </NavLink>
          <NavLink
            to="/profile/orders"
            className={({ isActive }) =>
              link + (isActive ? activelink : inactiveLink)
            }
          >
            История заказов
          </NavLink>
          <NavLink
            className={`${styles.link} text text_type_main-medium text_color_inactive`}
          >
            Выход
          </NavLink>
        </nav>
        <p
          className={`${styles.text} text text_type_main-default text_color_inactive`}
        >
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <form className={styles.formContainer}>
        <Input
          placeholder={"Имя"}
          name={"name"}
          icon={"EditIcon"}
          extraClass="mb-6"
        />
        <EmailInput
          name={"email"}
          placeholder={"Логин"}
          icon={"EditIcon"}
          extraClass="mb-6"
        />
        <PasswordInput
          name={"password"}
          placeholder={"Пароль"}
          icon={"EditIcon"}
          extraClass="mb-6"
          disabled
        />
      </form>
    </div>
  );
}
