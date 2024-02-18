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
        <Input
          type={"text"}
          placeholder={"Имя"}
          name={"name"}
          error={false}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mb-6"
        />
        <EmailInput name={"email"} isIcon={false} extraClass="mb-6" />
        <PasswordInput name={"password"} extraClass="mb-6" />
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
}
