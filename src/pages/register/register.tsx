import { Link, useNavigate, Navigate } from "react-router-dom";
import React, { FC, FormEvent, ChangeEvent } from "react";
import { useDispatch, useSelector } from "../../services/hooks";
import styles from "./register.module.css";
import {
  EmailInput,
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { fetchRegister, setRegisterValue } from "../../services/actions/auth";

const RegisterPage: FC = () => {
  const { registerForm } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(setRegisterValue(e.target.name, e.target.value));
  }

  const submitRegisterForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchRegister(registerForm, () => navigate("/login")));
  };

  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium text_color_primary mb-6`}>
        Регистрация
      </h2>
      <form onSubmit={submitRegisterForm}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          name={"name"}
          onChange={onChange}
          value={registerForm.name || ""}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6"
        />
        <EmailInput
          name={"email"}
          onChange={onChange}
          value={registerForm.email || ""}
          isIcon={false}
          extraClass="mb-6"
        />
        <PasswordInput
          name={"password"}
          onChange={onChange}
          value={registerForm.password || ""}
          extraClass="mb-6"
        />
        <Button
          extraClass={styles.button}
          htmlType="submit"
          type="primary"
          size="medium"
        >
          Зарегистрироваться
        </Button>
      </form>
      <div className={styles.actions}>
        <p className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?&nbsp;
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
};

export default RegisterPage;
