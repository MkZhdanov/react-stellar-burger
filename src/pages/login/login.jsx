import { Link } from "react-router-dom";
import {
  EmailInput,
  Button,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium text_color_primary mb-6`}>
        Вход
      </h2>
      <form>
        <EmailInput />
        <PasswordInput />
        <Button>Войти</Button>
      </form>
      <div className={styles.actions}>
        <p className="text text_type_main-default text_color_inactive">
          Вы - новый пользователь?&nbsp;
          <Link>Зарегистрироваться</Link>
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Забыли пароль?&nbsp;
          <Link>Восстановить пароль</Link>
        </p>
      </div>
    </div>
  );
}
