import { Link } from "react-router-dom";
import styles from "./register.module.css";
import {
  EmailInput,
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <h2 className={`text text_type_main-medium text_color_primary mb-6`}>
        Регистрация
      </h2>
      <form action="">
        <Input />
        <EmailInput />
        <PasswordInput />
        <Button>Зарегистрироваться</Button>
      </form>
      <div className={styles.actions}>
        <p className="text text_type_main-default text_color_inactive">
          Уже зарегистрированы?&nbsp;
          <Link>Войти</Link>
        </p>
      </div>
    </div>
  );
}
