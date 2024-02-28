import styles from "./profile.module.css";
import {
  EmailInput,
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "../../utils/cookie";
import { fetchLogout, fetchUpdateUserInfo } from "../../services/actions/auth";

export default function ProfilePage() {
  const link = `${styles.link} text text_type_main-medium `;
  const activeLink = "text_color_primary";
  const inactiveLink = "text_color_inactive ";

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(user);

  const [input, setInput] = React.useState({
    name: false,
    email: false,
    password: "",
  });

  const refreshToken = getCookie("refreshToken");

  const [isChange, setIsChange] = React.useState(false);

  const logout = () => {
    dispatch(fetchLogout(refreshToken));
  };

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    setIsChange(true);
  };

  function onReset() {
    setValue({ name: user.name, email: user.email, password: "" });
    setIsChange(false);
  }

  function profileFormSubmit(e) {
    e.preventDefault();
    dispatch(fetchUpdateUserInfo(value));
    setIsChange(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <nav className={styles.navigation}>
          <NavLink
            to="/profile"
            end
            className={({ isActive }) =>
              link + (isActive ? activeLink : inactiveLink)
            }
          >
            Профиль
          </NavLink>
          <NavLink
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
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <form onSubmit={profileFormSubmit} className={styles.formContainer}>
        <Input
          onChange={onChange}
          value={value?.name || ""}
          placeholder={"Имя"}
          name={"name"}
          extraClass="mb-6"
        />
        <EmailInput
          onChange={onChange}
          value={value?.email || ""}
          name={"email"}
          placeholder={"Логин"}
          isIcon={true}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={onChange}
          value={value?.password || ""}
          name={"password"}
          placeholder={"Пароль"}
          icon="EditIcon"
          extraClass="mb-6"
        />
        {isChange && (
          <div className={` ${styles.buttonBlock}`}>
            <Button
              size="medium"
              htmlType="button"
              type="secondary"
              onClick={onReset}
            >
              Отмена
            </Button>
            <Button htmlType="submit" size="medium">
              Сохранить
            </Button>
          </div>
        )}
      </form>
    </div>
  );
}
