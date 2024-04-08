export default function isEmpty(value: string[]): boolean {
  if (Array.isArray(value)) {
    return value.length === 0;
  } else if (typeof value === "object" && value !== null) {
    return Object.keys(value).length === 0;
  } else {
    return !value;
  }
}
