import PropTypes from "prop-types";

const ORDER_STATUSES = {
  created: "created",
  pending: "pending",
  done: "done",
  canselled: "canselled",
};

const isValidDate = (dateString) => {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
};

const datePropType = (props, propName, componentName) => {
  if (!isValidDate(props[propName])) {
    return new Error(
      `Invalid prop '${propName}' supplied to '${componentName}'. It should be a valid date string.`
    );
  }
  return null;
};

export const ingredientPropType = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
});

export const orderPropType = PropTypes.shape({
  createdAt: (props, propName, componentName) =>
    datePropType(props, propName, componentName),
  ingredients: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  number: PropTypes.number,
  status: PropTypes.oneOf(Object.values(ORDER_STATUSES)),
  updatedAt: (props, propName, componentName) =>
    datePropType(props, propName, componentName),
  _id: PropTypes.string,
});
