import { ORDER_STATUSES } from "./data";

// функция возвращает сообщение о статусе заказа
export default function getStatusMessage(status) {
  switch (status) {
    //  статус заказа - "Выполнен"
    case ORDER_STATUSES.done:
      return {
        message: "Выполнен",
        className: "text_color_success",
        title: "Ваш заказ успешно выполнен",
        text: "Спасибо за выбор наших бургеров!",
      };
    //  статус заказа - "Готовится"
    case ORDER_STATUSES.pending:
      return {
        message: "Готовится",
        className: "text_color_accent",
        title: "Ваш заказ начали готовить",
        text: "Дождитесь готовности на орбитальной станции",
      };
    //  статус заказа - "Создан"
    case ORDER_STATUSES.created:
      return {
        message: "Создан",
        className: "",
        title: "Ваш заказ успешно создан",
        text: "Ожидайте подтверждение и начало приготовления",
      };
    //  статус заказа - "Отменен"
    case ORDER_STATUSES.canselled:
      return {
        message: "Отменен",
        className: "text_color_inactive",
        title: "Ваш заказ был отменен",
        text: "Мы надеемся на ваш заказ в будущем",
      };
    default:
      return {
        message: "Ошибка",
        className: "text_color_error",
        title: "Произошла непредвиденная ошибка",
        text: "Пожалуйста, повторите попытку позже",
      };
  }
}
