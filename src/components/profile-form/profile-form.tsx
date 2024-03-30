import styles from "./profile-form.module.css";
import {
  EmailInput,
  PasswordInput,
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "../../services/hooks";
import { fetchUpdateUserInfo } from "../../services/actions/auth";

const ProfileForm: FC = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  interface FormValues {
    email?: string;
    name?: string;
    password?: string;
    code?: string;
  }

  interface FormState {
    values: FormValues;
    handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
    setValues: (values: FormValues) => void;
  }

  // Создаем кастомный хук для управления формой
  function useForm(inputValues: FormValues): FormState {
    // Инициализация состояния с начальными значениями формы
    const [values, setValues] = useState<FormValues>(inputValues);

    // Обработчик изменения значений полей формы
    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
      // Извлекаем имя и значение из события изменения
      const { name, value } = evt.target;
      // Обновляем состояние, сохраняя предыдущие значения и добавляя новое значение
      setValues({ ...values, [name]: value });
    };

    // Возвращаем объект с текущими значениями формы, обработчиком изменения и функцией установки значений
    return { values, handleChange, setValues };
  }

  const { values, handleChange, setValues } = useForm({
    name: user ? user.name : "",
    email: user ? user.email : "",
    password: "",
  });
  // Состояние для отслеживания отправки формы
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Проверка, были ли изменения в форме
  const isFormChanged =
    user &&
    (user.name !== values.name ||
      user.email !== values.email ||
      values.password);
  // Проверка валидности формы
  const isFormValid = values.name && values.email && values.password;

  // Обработчик отправки формы
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsFormSubmitted(true);
    dispatch(fetchUpdateUserInfo(values));
    console.log(values);
  };

  // Обработчик отмены редактирования
  const onCancelEditing = () => {
    // Восстановление значений формы
    setValues({
      name: user ? user.name : "",
      email: user ? user.email : "",
      password: "",
    });
    setIsFormSubmitted(false);
  };

  if (isFormSubmitted && isFormChanged && isFormValid) onCancelEditing();

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <Input
        onChange={handleChange}
        value={values.name!}
        placeholder={"Имя"}
        name={"name"}
        extraClass="mb-6"
      />
      <EmailInput
        onChange={handleChange}
        value={values.email!}
        name={"email"}
        placeholder={"Логин"}
        isIcon={true}
        extraClass="mb-6"
      />
      <PasswordInput
        onChange={handleChange}
        value={values.password!}
        name={"password"}
        placeholder={"Пароль"}
        icon="EditIcon"
        extraClass="mb-6"
      />
      {isFormChanged && (
        <div className={` ${styles.buttonBlock}`}>
          <Button
            size="medium"
            htmlType="button"
            type="secondary"
            onClick={onCancelEditing}
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
