import React from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchResetPassword,
  setPasswordValue,
} from "../../services/actions/auth";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./reset-password.module.css";

export default function ResetPasswordPage() {
  const { resetPasswordForm } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (e) => {
    dispatch(setPasswordValue(e.target.name, e.target.value));
  };

  const submitResetPassword = (e) => {
    e.preventDefault();
    dispatch(fetchResetPassword(resetPasswordForm));
  };

  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium text_color_primary mb-6`}>
        Восстановление пароля
      </h2>
      <form onSubmit={submitResetPassword}>
        <PasswordInput
          onChange={onChange}
          value={resetPasswordForm.password || ""}
          name={"password"}
          placeholder={"Введите новый пароль"}
          extraClass="mb-6"
        />
        <Input
          onChange={onChange}
          value={resetPasswordForm.token || ""}
          type={"text"}
          placeholder={"Введите код из письма"}
          name={"token"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6"
        />
        <Button
          extraClass={styles.button}
          htmlType="submit"
          type="primary"
          size="medium"
        >
          Сохранить
        </Button>
      </form>
      <div className={styles.actions}>
        <p className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?&nbsp;
          <Link
            to="/login"
            className={`${styles.link} text_color_accent text text_type_main-default`}
          >
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}
