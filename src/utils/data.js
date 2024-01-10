import { v4 as uuidv4 } from "uuid";

export const component_tabs = {
  bun: "Булки",
  sauce: "Соусы",
  main: "Начинки",
};

export const generateKey = () => uuidv4();

export const BASE_URL = "https://norma.nomoreparties.space/api/";
