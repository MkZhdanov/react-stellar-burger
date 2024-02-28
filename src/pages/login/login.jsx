import React from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  EmailInput,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { fetchLogin, setLoginValue } from "../../services/actions/auth";

export default function LoginPage() {
  const { loginForm, loginSubmit, userAuth } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    dispatch(setLoginValue(e.target.name, e.target.value));
  };

  const submitForm = (e) => {
    e.preventDefault();
    dispatch(fetchLogin(loginForm));
  };

  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium text_color_primary mb-6`}>
        Вход
      </h2>
      <form onSubmit={submitForm}>
        <EmailInput
          name={"email"}
          onChange={onChange}
          value={loginForm.email || ""}
          isIcon={false}
          extraClass="mb-6"
        />
        <PasswordInput
          name={"password"}
          onChange={onChange}
          value={loginForm.password || ""}
          extraClass="mb-6"
        />
        <Button
          extraClass={styles.button}
          htmlType="submit"
          type="primary"
          size="medium"
        >
          Войти
        </Button>
      </form>
      <div className={styles.actions}>
        <p className="text text_type_main-default text_color_inactive">
          Вы - новый пользователь?&nbsp;
          <Link
            to="/register"
            className={`${styles.link} text_color_accent text text_type_main-default`}
          >
            Зарегистрироваться
          </Link>
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?&nbsp;
          <Link
            to="/forgot-password"
            className={`${styles.link} text_color_accent text text_type_main-default`}
          >
            Восстановить пароль
          </Link>
        </p>
      </div>
    </div>
  );
}
