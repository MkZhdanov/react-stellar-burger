import { Link } from "react-router-dom";
import {
  Input,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./reset-password.module.css";

export default function ResetPasswordPage() {
  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium text_color_primary mb-6`}>
        Восстановление пароля
      </h2>
      <form action="">
        <PasswordInput
          name={"password"}
          placeholder={"Введите новый пароль"}
          extraClass="mb-6"
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
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
