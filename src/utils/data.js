import { v4 as uuidv4 } from "uuid";

// Константы, представляющие различные типы ингредиентов для вкладок
export const component_tabs = {
  bun: "Булки",
  sauce: "Соусы",
  main: "Начинки",
};

// Генерация уникального ключа
export const generateKey = () => uuidv4();

// базовый урл
export const BASE_URL = "https://norma.nomoreparties.space/api/";
