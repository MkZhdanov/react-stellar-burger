import { Link } from "react-router-dom";
import styles from "./forgot-password.module.css";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function ForgotPasswordPage() {
  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium text_color_primary mb-6`}>
        Восстановление пароля
      </h2>
      <form action="">
        <EmailInput
          name={"email"}
          placeholder="Укажите e-mail"
          isIcon={false}
          extraClass="mb-6"
        />
        <Button
          extraClass={styles.button}
          htmlType="submit"
          type="primary"
          size="medium"
        >
          Восстановить
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
