import styles from "./profile-form.module.css";
import {
  EmailInput,
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC, ChangeEvent, FormEvent } from "react";
import { useDispatch, useSelector } from "../../services/hooks";
import { getCookie } from "../../utils/cookie";
import { fetchLogout, fetchUpdateUserInfo } from "../../services/actions/auth";

const ProfileForm: FC = () => {
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

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    setIsChange(true);
  };

  function onReset() {
    setValue({ name: user.name, email: user.email, password: "" });
    setIsChange(false);
  }

  function profileFormSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(fetchUpdateUserInfo(value));
    setIsChange(false);
  }

  return (
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
  );
};

export default ProfileForm;
