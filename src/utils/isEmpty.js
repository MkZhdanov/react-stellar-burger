export default function isEmpty(value) {
  switch (typeof value) {
    case "object":
      return value === null ? true : Object.keys(value).length === 0;
    case "array":
      return value.length === 0;
    default:
      return !value;
  }
}
