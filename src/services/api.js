//GET запрос для получения списка ингридиентов
export const getFetchIngredientsRequest = async () => {
  try {
    const response = await fetch(
      "https://norma.nomoreparties.space/api/ingredients"
    );
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при получении ингредиентов:", error);
    throw error;
  }
};

//POST запрос для отправки данных о заказе
export const postFetchBurgerRequest = async (ingredients) => {
  try {
    const response = await fetch(
      "https://norma.nomoreparties.space/api/orders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ingredients,
        }),
      }
    );
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при получении ингредиентов:", error);
    throw error;
  }
};
